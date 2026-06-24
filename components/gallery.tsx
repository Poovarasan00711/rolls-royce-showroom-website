import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { GALLERY } from "@/components/site-data"
import { cn } from "@/lib/utils"

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Gallery</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Beauty in Every Detail
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            A closer look at the craftsmanship, materials, and presence that define our motor cars.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 90}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border",
                item.span,
              )}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 translate-y-3 text-sm font-medium text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
