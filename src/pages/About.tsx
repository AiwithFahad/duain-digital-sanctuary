import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutCraft from "@/assets/about-craft.jpg";
import collection1 from "@/assets/collection-1.jpg";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const GoldDivider = () => (
  <div className="flex items-center justify-center my-16 md:my-24">
    <div className="w-16 h-px bg-accent/30" />
    <svg viewBox="0 0 40 40" className="w-5 h-5 mx-4 text-accent/40" strokeWidth={0.5}>
      <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="currentColor" />
    </svg>
    <div className="w-16 h-px bg-accent/30" />
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8 }}
            src={aboutHero}
            alt="Duain — Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-ivory/70 mb-4">
                Our Story
              </p>
              <h1 className="font-editorial text-4xl md:text-7xl text-ivory tracking-wide">
                The House of Duain
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 md:py-36 px-6 md:px-12 max-w-[900px] mx-auto">
          <Section className="text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
              Our Philosophy
            </p>
            <h2 className="font-editorial text-3xl md:text-5xl leading-[1.3] text-foreground tracking-wide mb-10">
              Where devotion meets
              <br />
              <span className="italic">the highest form of design.</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-[2] tracking-wide max-w-xl mx-auto">
              Duain was founded on a singular belief: that the objects which accompany
              our most sacred moments deserve the same care, beauty, and intelligence
              that defines the greatest design houses in the world. We don't decorate
              tradition — we elevate it. Every material is sourced with conscience.
              Every form is considered with reverence. Every detail exists for a reason.
            </p>
          </Section>
        </section>

        <GoldDivider />

        {/* Craft & Materials */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Section>
              <img
                src={aboutCraft}
                alt="Artisan craftsmanship"
                className="w-full h-[400px] md:h-[550px] object-cover"
                loading="lazy"
              />
            </Section>
            <Section>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
                Craft & Material
              </p>
              <h2 className="font-editorial text-3xl md:text-4xl tracking-wide text-foreground mb-8 leading-[1.3]">
                The hand behind
                <br />
                <span className="italic">every object.</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-[2] tracking-wide mb-6">
                Our artisans work with materials that honour both earth and intention —
                hand-thrown ceramics, vegetable-tanned leathers, sustainably sourced
                woods, and natural stone. Each piece passes through human hands dozens
                of times before it reaches yours.
              </p>
              <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
                We partner with workshops in Morocco, Turkey, and Indonesia, preserving
                centuries-old techniques while infusing them with contemporary design
                intelligence. This is slow craft for a fast world.
              </p>
            </Section>
          </div>
        </section>

        <GoldDivider />

        {/* Spiritual Intention */}
        <section className="py-24 md:py-36 bg-secondary/50">
          <Section className="max-w-[800px] mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
              Spiritual Intention
            </p>
            <h2 className="font-editorial text-3xl md:text-5xl leading-[1.3] text-foreground tracking-wide mb-10 italic">
              "The beauty of a thing is a reflection
              <br />
              of the intention behind it."
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-[2] tracking-wide max-w-lg mx-auto">
              Every Duain creation begins with a moment of reflection. We ask: how
              does this object serve the spirit? How does it honour the ritual? How
              does it elevate the moment? Only when these questions are answered does
              the making begin.
            </p>
          </Section>
        </section>

        {/* Global Vision */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={collection1}
            alt="Global vision"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Section className="text-center px-6">
              <p className="text-[10px] tracking-[0.4em] uppercase text-ivory/70 mb-4">
                Global Vision
              </p>
              <h2 className="font-editorial text-3xl md:text-5xl text-ivory tracking-wide mb-6">
                For the Conscious World
              </h2>
              <p className="text-sm text-ivory/70 tracking-wide max-w-lg mx-auto leading-relaxed">
                From London to Dubai, Toronto to Istanbul — Duain serves a global
                community that refuses to choose between spiritual depth and modern
                elegance.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
