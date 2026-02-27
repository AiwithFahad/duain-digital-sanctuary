import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Duain transformed my daily practice into something truly sacred. Every object feels intentional.",
    author: "Amira K.",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "The craftsmanship is unlike anything I've experienced. This is what devotion deserves.",
    author: "Yusuf A.",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "Finally, a brand that understands modern Islamic living without compromise on aesthetics.",
    author: "Fatima R.",
    location: "Toronto, Canada",
    rating: 5,
  },
  {
    quote: "Each piece from Duain is a conversation starter. Elegant, refined, and deeply meaningful.",
    author: "Omar S.",
    location: "Istanbul, Turkey",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Faint Arabic watermark texture */}
      <div className="absolute inset-0 opacity-[0.02] text-center flex items-center justify-center pointer-events-none select-none">
        <span className="font-editorial text-[20rem] leading-none text-foreground">﷽</span>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-16">
          Voices of Our Community
        </p>

        <div className="relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: i === current ? 1 : 0,
                y: i === current ? 0 : 10,
              }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 flex flex-col items-center justify-center ${
                i === current ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} strokeWidth={1} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="font-editorial text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground italic mb-8">
                "{t.quote}"
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/70">
                {t.author}
              </p>
              <p className="text-[10px] tracking-[0.15em] text-muted-foreground mt-1">
                {t.location}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-3 justify-center mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-400 ${
                i === current ? "bg-accent w-6" : "bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
