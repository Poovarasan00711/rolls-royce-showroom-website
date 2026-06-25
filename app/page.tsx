import { Navbar } from "@/components/navbar"
import {<h1>Rolls-Royce Showroom</h1> Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedCars } from "@/components/featured-cars"
import { Gallery } from "@/components/gallery"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedCars />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
