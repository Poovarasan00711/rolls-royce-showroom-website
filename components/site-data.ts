export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Heritage", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const

export interface Car {
  name: string
  tagline: string
  image: string
  price: string
  specs: { power: string; topSpeed: string; acceleration: string }
}

export const CARS: Car[] = [
  {
    name: "Phantom VIII",
    tagline: "The pinnacle of presence",
    image: "/images/car-phantom.png",
    price: "From $498,000",
    specs: { power: "563 hp", topSpeed: "155 mph", acceleration: "5.1s 0–60" },
  },
  {
    name: "Ghost Series II",
    tagline: "Effortless, understated luxury",
    image: "/images/car-ghost.png",
    price: "From $343,000",
    specs: { power: "563 hp", topSpeed: "155 mph", acceleration: "4.6s 0–60" },
  },
  {
    name: "Cullinan",
    tagline: "Luxury without boundaries",
    image: "/images/car-cullinan.png",
    price: "From $375,000",
    specs: { power: "563 hp", topSpeed: "155 mph", acceleration: "4.9s 0–60" },
  },
  {
    name: "Spectre",
    tagline: "Electric, in its purest form",
    image: "/images/car-spectre.png",
    price: "From $422,000",
    specs: { power: "577 hp", topSpeed: "155 mph", acceleration: "4.4s 0–60" },
  },
]

export interface GalleryItem {
  src: string
  alt: string
  span: string
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/gallery-interior.png",
    alt: "Hand-stitched leather interior with starlight headliner",
    span: "md:row-span-2",
  },
  {
    src: "/images/gallery-detail.png",
    alt: "Polished chrome grille and bonnet ornament detail",
    span: "",
  },
  {
    src: "/images/gallery-night.png",
    alt: "Silver motor car driving through the city at night",
    span: "",
  },
  {
    src: "/images/gallery-wheel.png",
    alt: "Close-up of a polished alloy wheel",
    span: "",
  },
  {
    src: "/images/gallery-rear.png",
    alt: "Rear three-quarter view of a black flagship sedan",
    span: "md:row-span-2",
  },
  {
    src: "/images/hero-car.png",
    alt: "Black flagship sedan under dramatic studio lighting",
    span: "",
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "From the private viewing to the bespoke commission, every detail was orchestrated with extraordinary care. Maison Royce redefined what ownership should feel like.",
    name: "Alexander Whitmore",
    role: "Phantom VIII Owner",
  },
  {
    quote:
      "The team understood my vision before I could fully articulate it. My Ghost arrived flawless, tailored to the last stitch. Simply unmatched.",
    name: "Isabella Laurent",
    role: "Ghost Series II Owner",
  },
  {
    quote:
      "Discretion, expertise, and genuine passion. The concierge service has made every mile a pleasure. I would never go anywhere else.",
    name: "Reginald Hawthorne",
    role: "Cullinan Owner",
  },
]
