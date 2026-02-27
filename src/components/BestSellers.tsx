import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export const allProducts = [
  { id: "1", name: "Ivory & Gold Tasbih", category: "Prayer Essentials", price: "€185", image: product1, collection: "Prayer" },
  { id: "2", name: "The Sanctuary Rug", category: "Prayer Collection", price: "€320", image: product2, collection: "Prayer" },
  { id: "3", name: "Noir Oud Burner", category: "Home Ritual", price: "€145", image: product3, collection: "Home" },
  { id: "4", name: "Embossed Quran", category: "Sacred Texts", price: "€275", image: product4, collection: "Sacred Texts" },
  { id: "5", name: "Artisan Attar Set", category: "Fragrance", price: "€210", image: product5, collection: "Fragrance" },
  { id: "6", name: "Oak Quran Stand", category: "Home Ritual", price: "€165", image: product6, collection: "Home" },
];

export const ProductCard = ({
  product,
  index,
}: {
  product: (typeof allProducts)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-secondary mb-5 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
            <span className="px-8 py-3 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              Quick View
            </span>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground/60 hover:text-accent"
          >
            <Heart size={18} strokeWidth={1} />
          </button>
        </div>
      </Link>

      <div className="space-y-1.5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-editorial text-lg tracking-wide text-foreground gold-underline">
          {product.name}
        </h3>
        <p className="text-sm text-olive tracking-wide">{product.price}</p>
      </div>
    </motion.div>
  );
};

const BestSellers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bestsellers" className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Considered Selections
        </p>
        <h2 className="font-editorial text-3xl md:text-5xl tracking-wide text-foreground">
          Best Sellers
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {allProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
