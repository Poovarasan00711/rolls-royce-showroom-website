import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-car.png"
        alt="Black flagship Rolls-Royce motor car under dramatic studio lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8 lg:pt-32">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs uppercase tracking-[0.45em] text-muted-foreground">
            The Art of Effortless Luxury
          </p>
          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Where <span className="text-gradient-silver">Engineering</span> Becomes Art
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Maison Royce is a private showroom devoted to the world&apos;s most exquisite motor cars.
            Discover a curated collection of bespoke Rolls-Royce, commissioned and tailored to you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="rounded-full px-7 text-base">
              <a href="#collection">
                Explore the Collection
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border bg-transparent px-7 text-base hover:bg-secondary"
            >
              <a href="#contact">Arrange a Private Viewing</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="sr-only">Years of heritage</dt>
              <dd className="font-serif text-3xl font-semibold text-foreground">120</dd>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Years Heritage</p>
            </div>
            <div>
              <dt className="sr-only">Bespoke commissions</dt>
              <dd className="font-serif text-3xl font-semibold text-foreground">2.4k</dd>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Commissions</p>
            </div>
            <div>
              <dt className="sr-only">Client satisfaction</dt>
              <dd className="font-serif text-3xl font-semibold text-foreground">99%</dd>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Satisfaction</p>
            </div>
          </dl>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to heritage section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
