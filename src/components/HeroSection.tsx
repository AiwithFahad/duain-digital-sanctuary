import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Duain — Refined Islamic living"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      {/* Floating geometric motif */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-40 h-40 opacity-[0.06]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="100,10 190,60 190,140 100,190 10,140 10,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground"
          />
          <polygon
            points="100,30 170,70 170,130 100,170 30,130 30,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-ivory/70 mb-6"
        >
          A Luxury Spiritual Design House
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-editorial text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] leading-[1.1] text-ivory max-w-4xl"
        >
          Refined Essentials
          <br />
          <span className="italic font-light">for Elevated Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-sm md:text-base tracking-[0.08em] text-ivory/70 max-w-lg leading-relaxed"
        >
          Designed with intention. Crafted with devotion.
          <br />
          Made for a conscious world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#collections"
            className="gold-shimmer px-10 py-4 border border-gold text-ivory text-xs tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-400"
          >
            Explore Collection
          </a>
          <a
            href="#bestsellers"
            className="px-10 py-4 border border-ivory/30 text-ivory/70 text-xs tracking-[0.2em] uppercase hover:border-ivory/50 hover:text-ivory transition-all duration-400"
          >
            Discover New Arrivals
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-ivory/20"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
