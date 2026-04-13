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
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Authentic Maharashtrian Food in Delhi, <span className="text-accent">Since 1994</span>
            </h1>
            <div className="space-y-4 font-sans text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              <p>
                Tucked inside Dilli Haat INA, we've been serving the same food, in the same spirit, for over three decades.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                One of the very first food stalls here, inaugurated on 28th March 1994 by Atal Bihari Vajpayee.
              </p>
              <p>
                Just food made the way it always was, for people who value how it feels as much as how it tastes.
              </p>
            </div>
          </div>

          <div className="mt-12 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F66dc36b4ccaf435e998463ff4f8b665b?format=webp&width=800&height=1200"
              alt="Maharashtra Food Stall - Dilli Haat"
              className="w-full h-auto rounded-sm shadow-sm"
            />
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
                Here Since the Beginning
              </h2>
              <div className="space-y-6 font-sans text-foreground leading-relaxed">
                <p>
                  When Dilli Haat first opened its gates in 1994, we were here. Among the first food stalls, representing Maharashtrian cuisine from day one.
                </p>
                <p>
                  Back then, it was about bringing different parts of India together through craft and food. We became the Maharashtrian part of that story, and quietly stayed on.
                </p>
                <p>
                  Years passed. Stalls changed. The city moved faster. But for us, the work remained the same. Showing up every day, doing it properly, and letting the food speak for itself.
                </p>
                <p className="text-muted-foreground italic">
                  For many, this place has been visited across years, sometimes across generations. And that's not something you plan. It just happens when you stay consistent long enough.
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
            We Kept It Simple, On Purpose
          </h2>
          <p className="font-sans text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            There was never a need to turn this into something else. No fusion. No reinvention. No attempt to make it look like more than what it is.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="max-w-3xl mx-auto space-y-6 font-sans text-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Just honest Maharashtrian food, made with care and served without noise. Recipes that have stayed true to their roots, unchanged over the years.
            </p>
            <p>
              The kind people recognise not because it stands out, but because it feels right. And once it feels right, it stays with you.
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
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
              A Familiar Stop in a Changing City
            </h2>
            <p className="font-sans text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Dilli Haat has always been a place people come to when they want to slow down a little. A small pause in the middle of a busy day, that somehow always feels the same.
            </p>
          </div>

          <div className="space-y-10 max-w-3xl mx-auto">
            <div className="border-l-2 border-accent pl-6 sm:pl-8">
              <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">First Time Visitors</h3>
              <p className="font-sans text-foreground leading-relaxed">
                Some hear about us before they arrive. Some discover us while walking through Dilli Haat. Either way, once you know where we are, you tend to come back.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-6 sm:pl-8">
              <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">Those Who Return</h3>
              <p className="font-sans text-foreground leading-relaxed">
                For others, it's something they return to without thinking twice. A familiar stop that feels like coming home, no matter how much time has passed.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-6 sm:pl-8">
              <h3 className="font-serif text-2xl sm:text-3xl mb-3 text-foreground">Across Generations</h3>
              <p className="font-sans text-foreground leading-relaxed">
                For many, this place has been visited across years, sometimes across generations. And that's what we're most proud of—being part of the rhythm of people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / CREDIBILITY */}
      <section className="bg-muted py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
              Built Over Time, Not Overnight
            </h2>
            <p className="font-sans text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              There's a certain trust that only comes with time. We've had the time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">Serving at Dilli Haat INA since 1994</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">Among the first food stalls since its inception</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">Inaugurated during the opening by Atal Bihari Vajpayee</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">Recipes preserved, not altered</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">Known through word of mouth, not advertising</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-sans text-foreground">One of the few authentic Maharashtrian food sources in Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / DISCOVERY */}
      <section id="location" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
            If You're Looking for Maharashtrian Food in Delhi
          </h2>
          <p className="font-sans text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            You'll find us inside Dilli Haat INA. For those searching for something regional, something authentic, something that hasn't been changed along the way, this is where many end up.
          </p>
        </div>

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

      {/* CLOSING SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
            Some Things Don't Need Changing
          </h2>
          <p className="font-sans text-lg text-foreground leading-relaxed">
            Over the years, we've seen trends come and go. But good food, made with care and served honestly, has a way of staying relevant without trying.
          </p>
          <p className="font-sans text-lg text-foreground leading-relaxed">
            That's all we've held on to.
          </p>
          <div className="pt-8 border-t border-border">
            <p className="font-sans text-lg text-foreground leading-relaxed">
              If you're at Dilli Haat, come by.
              <br />
              <span className="text-accent font-semibold">We'll be right where we've always been.</span>
            </p>
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
