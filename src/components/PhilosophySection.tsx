import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-[900px] mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Geometric divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-px bg-accent/40" />
            <svg
              viewBox="0 0 40 40"
              className="w-6 h-6 mx-4 text-accent/50"
              strokeWidth={0.5}
            >
              <polygon
                points="20,2 38,20 20,38 2,20"
                fill="none"
                stroke="currentColor"
              />
              <polygon
                points="20,8 32,20 20,32 8,20"
                fill="none"
                stroke="currentColor"
              />
            </svg>
            <div className="w-12 h-px bg-accent/40" />
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
            Our Philosophy
          </p>

          <h2 className="font-editorial text-2xl md:text-4xl lg:text-5xl leading-[1.3] text-foreground tracking-wide mb-10">
            We believe devotion deserves
            <br />
            <span className="italic">the highest form of design.</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-[1.9] tracking-wide max-w-xl mx-auto">
            Every object in the Duain collection is born from a single conviction —
            that spiritual practice and material beauty are not in opposition. They
            are companions. When craft meets intention, the everyday becomes sacred.
          </p>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mt-12 text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground gold-underline transition-colors duration-300"
          >
            Discover Our Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
