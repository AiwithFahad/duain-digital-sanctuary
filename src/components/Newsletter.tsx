import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 bg-olive/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto px-6 text-center"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          An Invitation
        </p>
        <h2 className="font-editorial text-3xl md:text-4xl tracking-wide text-foreground mb-6">
          Join the Sanctuary
        </h2>
        <p className="text-sm text-muted-foreground tracking-wide leading-relaxed mb-12">
          Receive curated reflections, early access to new collections, and
          invitations to our world — delivered with intention.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-editorial text-lg text-foreground italic"
          >
            Welcome to the sanctuary.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-accent/40 text-foreground text-sm tracking-wide placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
            />
            <button
              type="submit"
              className="gold-shimmer px-10 py-4 border border-accent text-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent/10 transition-all duration-400"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Newsletter;
