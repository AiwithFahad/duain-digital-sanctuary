import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts, ProductCard } from "@/components/BestSellers";

const tabs = ["Description", "Craftsmanship", "Materials", "Reviews"];

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id) || allProducts[0];
  const [activeTab, setActiveTab] = useState("Description");
  const [qty, setQty] = useState(1);

  const otherProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {product.category}
              </p>
              <h1 className="font-editorial text-3xl md:text-4xl tracking-wide text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-wide mb-6">
                A refined object of intention, designed to elevate your daily
                practice with uncompromising craftsmanship and considered form.
              </p>
              <p className="text-lg text-olive tracking-wide mb-10">
                {product.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Quantity
                </span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <Minus size={14} strokeWidth={1} />
                  </button>
                  <span className="px-4 py-2 text-sm text-foreground min-w-[40px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <Plus size={14} strokeWidth={1} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <button className="flex-1 py-4 bg-primary text-accent text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 active:scale-[0.98]">
                  Add to Cart
                </button>
                <button className="px-5 py-4 border border-border text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors duration-300">
                  <Heart size={18} strokeWidth={1} />
                </button>
              </div>

              {/* Tabs */}
              <div className="border-t border-border pt-8">
                <div className="flex gap-6 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs tracking-[0.15em] uppercase pb-2 border-b-[1.5px] transition-colors duration-300 ${
                        activeTab === tab
                          ? "border-accent text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-[1.9] tracking-wide">
                  {activeTab === "Description" &&
                    "Each piece in the Duain collection embodies our commitment to sacred minimalism — objects that serve the spirit through considered design, natural materials, and artisan craftsmanship passed through generations."}
                  {activeTab === "Craftsmanship" &&
                    "Handcrafted by master artisans in heritage workshops across Morocco, Turkey, and Indonesia. Each object passes through human hands dozens of times, ensuring every detail meets our exacting standards."}
                  {activeTab === "Materials" &&
                    "Sourced with intention — natural stone, sustainably harvested wood, vegetable-tanned leather, hand-thrown ceramic, and ethically mined precious metals. Every material tells a story of conscious creation."}
                  {activeTab === "Reviews" &&
                    "Our community speaks of Duain objects as companions in their daily practice — pieces that transform routine into ritual and bring calm, elevated beauty to sacred moments."}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cross-sell */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-border">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 text-center">
            Styled in Life
          </p>
          <h2 className="font-editorial text-2xl md:text-3xl tracking-wide text-foreground text-center mb-16">
            Complete the Ritual
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
