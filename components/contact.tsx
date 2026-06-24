"use client"

import { useState, type FormEvent } from "react"
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"

const INFO = [
  { icon: MapPin, label: "Showroom", value: "1 Berkeley Square, Mayfair, London W1J" },
  { icon: Phone, label: "Telephone", value: "+44 20 7946 0820" },
  { icon: Mail, label: "Email", value: "concierge@maisonroyce.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 9am – 7pm · By appointment" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Get in Touch</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Arrange Your Private Viewing
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Share a few details and our concierge will contact you to curate a personal experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-9">
              {submitted ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Thank You</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your inquiry has been received. A member of our concierge team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required placeholder="Alexander" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required placeholder="Whitmore" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+44 20 7946 0820" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="interest">Model of Interest</Label>
                    <Input id="interest" name="interest" placeholder="Phantom VIII, Ghost, Cullinan…" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your ideal motor car or preferred viewing time."
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-1 rounded-full">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info + map */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border">
                {INFO.map((item) => (
                  <li key={item.label} className="flex items-start gap-4 bg-card p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="mt-0.5 text-sm text-foreground">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map placeholder */}
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-border bg-secondary">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative flex h-full min-h-[12rem] flex-col items-center justify-center gap-2 p-6 text-center">
                  <MapPin className="size-8 text-foreground" />
                  <p className="font-medium text-foreground">Berkeley Square, Mayfair</p>
                  <p className="text-sm text-muted-foreground">Interactive map available on request</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
