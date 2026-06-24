import Image from "next/image"
import { ArrowUpRight, Gauge, Timer, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { CARS } from "@/components/site-data"

export function FeaturedCars() {
  return (
    <section id="collection" className="bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">The Collection</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Motor Cars of Distinction
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            A curated selection from our current showroom. Each is available for private viewing and
            bespoke commission.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {CARS.map((car, i) => (
            <Reveal
              key={car.name}
              delay={(i % 2) * 120}
              as="article"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.name} — ${car.tagline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {car.price}
                </span>
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{car.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{car.tagline}</p>

                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  <Spec icon={<Zap className="size-4" />} label="Power" value={car.specs.power} />
                  <Spec icon={<Gauge className="size-4" />} label="Top Speed" value={car.specs.topSpeed} />
                  <Spec icon={<Timer className="size-4" />} label="0–60" value={car.specs.acceleration} />
                </dl>

                <Button
                  asChild
                  variant="outline"
                  className="mt-6 w-full rounded-full border-border bg-transparent transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <a href="#contact">
                    View Details
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-muted-foreground">{icon}</span>
      <dt className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium text-foreground">{value}</dd>
    </div>
  )
}
