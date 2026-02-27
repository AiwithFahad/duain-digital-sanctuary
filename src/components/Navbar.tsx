import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Collections", "New Arrivals", "Ritual", "Craft", "About"];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-400 gold-underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
          >
            <Menu size={20} strokeWidth={1} />
          </button>

          {/* Logo */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-editorial text-2xl md:text-3xl tracking-[0.3em] uppercase text-foreground">
              Duain
            </span>
          </a>

          {/* Right nav */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-400 gold-underline"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="text-foreground/60 hover:text-foreground transition-colors duration-300">
                <Search size={18} strokeWidth={1} />
              </button>
              <button className="text-foreground/60 hover:text-foreground transition-colors duration-300 hidden md:block">
                <Heart size={18} strokeWidth={1} />
              </button>
              <button className="text-foreground/60 hover:text-foreground transition-colors duration-300 relative">
                <ShoppingBag size={18} strokeWidth={1} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent text-accent-foreground text-[8px] flex items-center justify-center rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-editorial text-2xl tracking-[0.3em] uppercase text-foreground">
                Duain
              </span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={20} strokeWidth={1} className="text-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="font-editorial text-3xl tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground gold-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
