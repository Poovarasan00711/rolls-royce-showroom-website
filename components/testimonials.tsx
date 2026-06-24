"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/components/site-data"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000)
    return () => clearInterval(id)
  }, [count])

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Testimonials</p>
        <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
          Words From Our Clients
        </h2>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live="polite"
          >
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-2 sm:px-8">
                <Quote className="mx-auto size-10 text-primary/50" aria-hidden />
                <blockquote className="mt-6 text-balance font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
