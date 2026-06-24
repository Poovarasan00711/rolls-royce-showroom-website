import { AtSign, Globe, MessageCircle, Send } from "lucide-react"
import { NAV_LINKS } from "@/components/site-data"

const SOCIALS = [
  { icon: AtSign, label: "Instagram", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Send, label: "Newsletter", href: "#" },
]

const COLLECTION = ["Phantom VIII", "Ghost Series II", "Cullinan", "Spectre"]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-semibold text-foreground">Maison Royce</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
              Bespoke Motor Cars
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A private showroom devoted to the world&apos;s most exquisite motor cars and the
              discerning few who own them.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    <social.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collection navigation">
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Collection</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {COLLECTION.map((car) => (
                <li key={car}>
                  <a
                    href="#collection"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {car}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Visit</h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
              1 Berkeley Square
              <br />
              Mayfair, London W1J
              <br />
              United Kingdom
              <br />
              <a href="tel:+442079460820" className="mt-3 inline-block transition-colors hover:text-foreground">
                +44 20 7946 0820
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maison Royce. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
