import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:inline">
              SADU
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Sản Phẩm
            </a>
            <a href="#story" className="text-foreground hover:text-primary transition-colors">
              Câu Chuyện
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Lợi Ích
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Liên Hệ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Mua Ngay
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản Phẩm
            </a>
            <a
              href="#story"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Câu Chuyện
            </a>
            <a
              href="#benefits"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lợi Ích
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên Hệ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
              Mua Ngay
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
