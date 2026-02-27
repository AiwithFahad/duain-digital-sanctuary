const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-editorial text-2xl tracking-[0.3em] uppercase text-foreground">
              Duain
            </span>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed tracking-wide max-w-xs">
              A luxury spiritual design house creating refined Islamic essentials
              for modern global living.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Collections",
              links: ["Prayer Essentials", "Home Ritual", "Sacred Texts", "New Arrivals"],
            },
            {
              title: "House",
              links: ["Our Philosophy", "Craftsmanship", "Journal", "Stores"],
            },
            {
              title: "Support",
              links: ["Contact", "Shipping", "Returns", "Care Guide"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-foreground mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground tracking-wide transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
            © 2026 Duain. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
