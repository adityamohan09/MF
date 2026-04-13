import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Subtle Warli art pattern SVG
const WarliDivider = ({ variant = "full" }: { variant?: string }) => (
  <svg viewBox="0 0 1200 120" className="w-full h-auto fill-none stroke-current text-accent opacity-10" strokeWidth="0.5">
    {variant === "corner-tr" ? (
      <g transform="translate(1000, 0)">
        <circle cx="40" cy="40" r="30" />
        <line x1="20" y1="40" x2="60" y2="40" />
        <line x1="40" y1="20" x2="40" y2="60" />
        <circle cx="40" cy="40" r="15" />
      </g>
    ) : variant === "corner-bl" ? (
      <g transform="translate(0, 40)">
        <circle cx="40" cy="40" r="30" />
        <line x1="20" y1="40" x2="60" y2="40" />
        <line x1="40" y1="20" x2="40" y2="60" />
        <circle cx="40" cy="40" r="15" />
      </g>
    ) : (
      <>
        <circle cx="60" cy="60" r="25" />
        <line x1="35" y1="60" x2="85" y2="60" />
        <line x1="60" y1="35" x2="60" y2="85" />
        <circle cx="60" cy="60" r="12" />
        <circle cx="300" cy="60" r="25" />
        <line x1="275" y1="60" x2="325" y2="60" />
        <line x1="300" y1="35" x2="300" y2="85" />
        <circle cx="300" cy="60" r="12" />
        <circle cx="540" cy="60" r="25" />
        <line x1="515" y1="60" x2="565" y2="60" />
        <line x1="540" y1="35" x2="540" y2="85" />
        <circle cx="540" cy="60" r="12" />
        <circle cx="780" cy="60" r="25" />
        <line x1="755" y1="60" x2="805" y2="60" />
        <line x1="780" y1="35" x2="780" y2="85" />
        <circle cx="780" cy="60" r="12" />
        <circle cx="1020" cy="60" r="25" />
        <line x1="995" y1="60" x2="1045" y2="60" />
        <line x1="1020" y1="35" x2="1020" y2="85" />
        <circle cx="1020" cy="60" r="12" />
        <circle cx="1200" cy="60" r="25" />
        <line x1="1175" y1="60" x2="1225" y2="60" />
        <line x1="1200" y1="35" x2="1200" y2="85" />
        <circle cx="1200" cy="60" r="12" />
      </>
    )}
  </svg>
);

export default function Index() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center space-y-8">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground">
            Taste <span className="text-accent">the legacy</span> of authentic Maharashtrian food
          </h1>
          <p className="font-sans text-lg sm:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Serving Delhi since 1994, our stall at Dilli Haat INA carries forward generations of culinary tradition and warmth.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="h-80 sm:h-96 bg-muted rounded-sm flex items-center justify-center text-muted-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <svg className="w-20 h-20 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0H6m0 0H0" />
            </svg>
          </div>
        </div>
      </section>

      {/* LEGACY / STORY SECTION */}
      <section id="story" className="bg-muted py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
          <WarliDivider variant="corner-tr" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl mb-8 text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 font-sans text-foreground leading-relaxed">
                <p>
                  In 1994, we opened our doors at Dilli Haat with a simple mission: to bring the authentic tastes of Maharashtra to Delhi. Three decades later, we remain committed to that promise.
                </p>
                <p>
                  Every dish we prepare is a reflection of our heritage, crafted using time-honored recipes passed down through our family. We believe in the power of tradition to create moments of genuine connection.
                </p>
                <p>
                  From our signature Misal Pav to our beloved Puran Poli, every bite carries the warmth of a home kitchen and the pride of our culinary legacy.
                </p>
              </div>
            </div>
            <div className="h-80 sm:h-96 bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
              <svg className="w-20 h-20 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
          <WarliDivider variant="corner-bl" />
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
            What Makes Us Different
          </h2>
          <p className="font-sans text-lg text-foreground max-w-2xl mx-auto">
            In a world of fleeting trends, we stand for what endures.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Feature 1 */}
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">Authentic Recipes</h3>
            <p className="font-sans text-foreground text-base sm:text-lg leading-relaxed">
              Every dish is prepared using traditional Maharashtrian methods, with no shortcuts or modern substitutions. We believe authentic taste cannot be rushed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">Fresh, Quality Ingredients</h3>
            <p className="font-sans text-foreground text-base sm:text-lg leading-relaxed">
              We source our ingredients thoughtfully, prioritizing freshness and quality. You taste the difference in every bite.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">Consistency Over Time</h3>
            <p className="font-sans text-foreground text-base sm:text-lg leading-relaxed">
              For three decades, we've served the same beloved dishes with unwavering dedication. Consistency is our quiet promise.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="h-12">
            <WarliDivider />
          </div>
        </div>
      </section>

      {/* EXPERIENCE / CULTURAL CONTEXT */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
            Experience Maharashtrian Culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="h-48 bg-muted rounded-sm mb-6 flex items-center justify-center text-muted-foreground">
                <svg className="w-16 h-16 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">Food Heritage</h3>
              <p className="font-sans text-foreground leading-relaxed">
                Maharashtrian cuisine reflects centuries of cultural richness and regional pride, passed through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 bg-muted rounded-sm mb-6 flex items-center justify-center text-muted-foreground">
                <svg className="w-16 h-16 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">Community</h3>
              <p className="font-sans text-foreground leading-relaxed">
                Dilli Haat brings communities together. Food is how we celebrate, connect, and honor our roots.
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 bg-muted rounded-sm mb-6 flex items-center justify-center text-muted-foreground">
                <svg className="w-16 h-16 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">Time Honored</h3>
              <p className="font-sans text-foreground leading-relaxed">
                Thirty years of service is our commitment to quality, trust, and the values we hold dear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / DISCOVERY */}
      <section id="location" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
          Find Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl mb-6 text-foreground">
              Dilli Haat INA
            </h3>
            <div className="space-y-6 font-sans text-foreground">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="text-lg">Dilli Haat, INA Market, New Delhi</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hours</p>
                <p className="text-lg">Mon – Sun<br />11:00 AM – 9:00 PM</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+918826284330" className="text-lg hover:text-accent transition-colors">
                  +91 8826 284 330
                </a>
              </div>
            </div>
          </div>

          <div className="h-80 sm:h-96 bg-muted rounded-sm flex items-center justify-center text-muted-foreground">
            <svg className="w-20 h-20 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* CTA SECTION - WHATSAPP */}
      <section className="bg-muted py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-foreground">
            Have a question?
          </h2>
          <p className="font-sans text-lg text-foreground mb-10 leading-relaxed">
            Planning to visit? We'd love to hear from you. Reach us directly and we'll be happy to help.
          </p>

          <div className="space-y-4">
            <a 
              href="tel:+918826284330"
              className="block font-sans text-lg sm:text-xl text-foreground hover:text-accent transition-colors mb-6"
            >
              Reach us at <span className="font-semibold">8826 284 330</span>
            </a>

            <a
              href="https://wa.me/918826284330?text=Hi%20Maharashtra%20Food%20Stall%2C%20I%20have%20a%20question!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-accent text-accent font-sans font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
