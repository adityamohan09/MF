import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <Link to="/" className="flex-shrink-0 flex flex-col">
            <div className="font-serif font-bold text-lg sm:text-xl text-accent leading-tight">
              MAHARASHTRA<br className="hidden sm:block" />
              <span className="text-accent">FOOD STALL</span>
            </div>
            <p className="font-sans text-xs text-muted-foreground">Since 1994</p>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex gap-8 lg:gap-12 items-center">
            <Link
              to="/"
              className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <a
              href="#story"
              className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Story
            </a>
            <a
              href="#location"
              className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Visit
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex gap-3 items-center">
            <a
              href="https://itl.ink/WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent font-sans text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors rounded"
            >
              Contact Us
            </a>
            <a
              href="https://itl.ink/websitezomato"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-accent-foreground font-sans text-sm font-medium hover:bg-secondary transition-colors rounded"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-foreground hover:text-accent transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors block py-2"
              >
                Home
              </Link>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors block py-2"
              >
                Story
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-medium text-foreground hover:text-accent transition-colors block py-2"
              >
                Visit
              </a>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <a
                  href="https://itl.ink/WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-accent text-accent font-sans text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors rounded text-center"
                >
                  Contact Us
                </a>
                <a
                  href="https://itl.ink/websitezomato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-accent-foreground font-sans text-sm font-medium hover:bg-secondary transition-colors rounded text-center"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
