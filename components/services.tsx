import { Paintbrush, ShieldCheck, Wrench, Truck, KeyRound, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    icon: Paintbrush,
    title: "Bespoke Commissioning",
    copy: "Tailor every surface — paint, leather, veneer, and embroidery — to a vision uniquely yours.",
  },
  {
    icon: KeyRound,
    title: "Private Concierge",
    copy: "A dedicated specialist manages every aspect of acquisition and ownership on your behalf.",
  },
  {
    icon: Wrench,
    title: "Master Servicing",
    copy: "Factory-trained technicians preserve your motor car to its original, flawless standard.",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    copy: "White-glove, fully enclosed transport to any destination, anywhere in the world.",
  },
  {
    icon: ShieldCheck,
    title: "Provenance & Warranty",
    copy: "Comprehensive certification and extended coverage for complete peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Detailing Atelier",
    copy: "Hand-finished detailing that returns every surface to showroom brilliance.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Concierge Services</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Ownership, Perfected
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Beyond the motor car lies an experience devoted entirely to you — from first sketch to every
            mile thereafter.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 100}
              as="article"
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
