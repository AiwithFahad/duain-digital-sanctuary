import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts, ProductCard } from "@/components/BestSellers";

const categories = ["All", "Prayer", "Home", "Sacred Texts", "Fragrance"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>("Collection");

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return allProducts;
    return allProducts.filter((p) => p.collection === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Curated Selection
            </p>
            <h1 className="font-editorial text-4xl md:text-6xl tracking-wide text-foreground">
              The Collection
            </h1>
          </motion.div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <div className="flex gap-12">
            {/* Desktop Filters */}
            <aside className="hidden md:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                <FilterGroup
                  title="Collection"
                  options={categories}
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                  expanded={expandedFilter === "Collection"}
                  onToggle={() =>
                    setExpandedFilter(expandedFilter === "Collection" ? null : "Collection")
                  }
                />
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden fixed bottom-6 right-6 z-40">
              <button
                onClick={() => setFiltersOpen(true)}
                className="p-4 bg-primary text-primary-foreground shadow-lg"
              >
                <SlidersHorizontal size={18} strokeWidth={1} />
              </button>
            </div>

            {/* Mobile Filter Panel */}
            <AnimatePresence>
              {filtersOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed inset-y-0 right-0 z-50 w-80 bg-background/95 backdrop-blur-xl border-l border-border p-8 shadow-2xl md:hidden"
                >
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-foreground">
                      Filters
                    </h3>
                    <button onClick={() => setFiltersOpen(false)}>
                      <X size={18} strokeWidth={1} className="text-foreground" />
                    </button>
                  </div>
                  <FilterGroup
                    title="Collection"
                    options={categories}
                    selected={selectedCategory}
                    onSelect={(c) => {
                      setSelectedCategory(c);
                      setFiltersOpen(false);
                    }}
                    expanded={true}
                    onToggle={() => {}}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-24 font-editorial text-lg">
                  No products in this collection yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const FilterGroup = ({
  title,
  options,
  selected,
  onSelect,
  expanded,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  expanded: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-border pb-6 mb-6">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full mb-4"
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-foreground">
        {title}
      </span>
      <ChevronDown
        size={14}
        strokeWidth={1}
        className={`text-foreground/50 transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className="flex items-center gap-3 w-full group"
              >
                <div
                  className={`w-4 h-4 border transition-colors duration-300 flex items-center justify-center ${
                    selected === opt
                      ? "border-accent bg-accent/10"
                      : "border-border group-hover:border-foreground/40"
                  }`}
                >
                  {selected === opt && (
                    <div className="w-1.5 h-1.5 bg-accent" />
                  )}
                </div>
                <span className="text-xs tracking-wide text-foreground/70 group-hover:text-foreground transition-colors">
                  {opt}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Shop;
