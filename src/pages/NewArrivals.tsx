import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts, ProductCard } from "@/components/BestSellers";
import heroImg from "@/assets/new-arrivals-hero.jpg";

const NewArrivals = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero with Ken Burns */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src={heroImg}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-ivory/70 mb-4">
                Spring 2026
              </p>
              <h1 className="font-editorial text-4xl md:text-7xl text-ivory tracking-wide">
                New Arrivals
              </h1>
              <p className="mt-6 text-sm text-ivory/60 tracking-wide max-w-md mx-auto">
                Objects of intention for the season ahead.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 px-6 max-w-[700px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-muted-foreground leading-[2] tracking-wide"
          >
            This season's collection draws from the architectural stillness of
            Andalusian courtyards and the quiet power of natural materials. Each
            piece is an invitation to slow down, reflect, and reconnect.
          </motion.p>
        </section>

        {/* Grid */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24 md:pb-36" ref={gridRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
