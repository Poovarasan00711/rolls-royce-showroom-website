import Image from "next/image"
import { Reveal } from "@/components/reveal"

const PILLARS = [
  { title: "Bespoke", copy: "Every commission is tailored, from paint to the last hand-stitched seam." },
  { title: "Heritage", copy: "Over a century of obsessive craftsmanship in every motor car we present." },
  { title: "Discretion", copy: "Private viewings and concierge ownership, conducted with absolute privacy." },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
              <Image
                src="/images/about-showroom.png"
                alt="Maison Royce showroom interior with a black luxury sedan under spotlights"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card/90 px-7 py-5 shadow-xl backdrop-blur sm:block">
              <p className="font-serif text-4xl font-semibold text-foreground">Est. 1904</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">A Legacy of Excellence</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Our Heritage</p>
              <h2 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
                A Sanctuary for the Extraordinary
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                For more than a century, Maison Royce has been the destination for collectors who refuse
                to compromise. Our showroom is not a place of transaction, but of revelation — where each
                motor car is presented as the masterpiece it is.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Our artisans, designers, and concierge specialists devote themselves to a single pursuit:
                creating an ownership experience as flawless as the machines themselves.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={150 + i * 100} className="bg-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
