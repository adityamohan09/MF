import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F6d82ba8dea76472ebed51e54b7f4fbf1?format=webp&width=800&height=1200" 
              alt="Maharashtra Food Stall"
              className="h-12 sm:h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex gap-12 lg:gap-16">
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

          {/* Mobile menu indicator */}
          <div className="sm:hidden text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
