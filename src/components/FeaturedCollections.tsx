import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";

const collections = [
  {
    title: "The Prayer Collection",
    subtitle: "Elevating the sacred ritual",
    image: collection1,
    span: "md:col-span-2 md:row-span-2",
    height: "min-h-[300px] md:min-h-[600px]",
  },
  {
    title: "Home & Sanctuary",
    subtitle: "Architectural calm for modern spaces",
    image: collection2,
    span: "md:col-span-1",
    height: "min-h-[280px] md:min-h-[290px]",
  },
  {
    title: "The Craft Series",
    subtitle: "Artisan heritage, refined",
    image: collection3,
    span: "md:col-span-1",
    height: "min-h-[280px] md:min-h-[290px]",
  },
  {
    title: "Sacred Reading",
    subtitle: "Wisdom in elevated form",
    image: collection4,
    span: "md:col-span-1",
    height: "min-h-[280px] md:min-h-[350px]",
  },
  {
    title: "Fragrance & Ritual",
    subtitle: "Scented devotion",
    image: collection5,
    span: "md:col-span-1",
    height: "min-h-[280px] md:min-h-[350px]",
  },
  {
    title: "Art & Calligraphy",
    subtitle: "Sacred expression, modern form",
    image: collection6,
    span: "md:col-span-1",
    height: "min-h-[280px] md:min-h-[350px]",
  },
];

const CollectionCard = ({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className={`${collection.span}`}
    >
      <Link
        to="/shop"
        className={`group relative overflow-hidden block ${collection.height}`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/70 mb-2">
            {collection.subtitle}
          </p>
          <h3 className="font-editorial text-xl md:text-2xl text-ivory tracking-wide gold-underline">
            {collection.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedCollections = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Curated Worlds
        </p>
        <h2 className="font-editorial text-3xl md:text-5xl tracking-wide text-foreground">
          Featured Collections
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {collections.map((collection, i) => (
          <CollectionCard key={collection.title} collection={collection} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
