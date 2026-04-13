import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-6xl sm:text-7xl text-accent mb-6">
            404
          </h1>
          <p className="font-sans text-xl sm:text-2xl text-foreground mb-4">
            Oops! This page seems to have wandered off.
          </p>
          <p className="font-sans text-foreground mb-8 leading-relaxed">
            The page you're looking for isn't here. Let's get you back on track.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 border-2 border-accent text-accent font-sans font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
