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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
                Authentic <span className="text-accent">Maharashtrian</span> Food
              </h1>
              <p className="font-sans text-lg text-foreground leading-relaxed">
                Serving Delhi for over 30 years with the same recipes, same spirit.
              </p>
            </div>

            <p className="font-sans text-base text-foreground leading-relaxed">
              Tucked inside Dilli Haat INA, we bring authentic Maharashtrian cuisine made the way it always was—for people who value how it feels as much as how it tastes.
            </p>

            <a
              href="https://share.google/ucRbokyY4t54wyqke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-sans font-semibold hover:bg-secondary transition-colors"
            >
              Visit Our Stall Today
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F66dc36b4ccaf435e998463ff4f8b665b?format=webp&width=800&height=1200"
              alt="Maharashtra Food Stall - Dilli Haat"
              className="w-full h-auto rounded-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* HERITAGE BADGE SECTION */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-base text-foreground text-center leading-relaxed">
            Among the very first food stalls when Dilli Haat opened in 1994, inaugurated by Atal Bihari Vajpayee. A place that's stayed true to its roots.
          </p>
        </div>
      </section>

      {/* LEGACY / STORY SECTION */}
      <section id="story" className="bg-background py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
          <WarliDivider variant="corner-tr" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
            Here Since the Beginning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">30+ Years</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Serving with the same recipes and spirit since 1994.
              </p>
            </div>

            {/* Point 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">First of Its Kind</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Among the first food stalls at Dilli Haat from day one.
              </p>
            </div>

            {/* Point 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">Consistent</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                The same quality, same care, every single day.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
          <WarliDivider variant="corner-bl" />
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-16 text-foreground text-center">
          We Kept It Simple, On Purpose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">No Fusion</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              Pure, authentic Maharashtrian recipes unchanged over the years.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Made with Care</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              Every dish prepared the traditional way, never rushed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Feels Right</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              People recognize it because it's honest and real.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / CULTURAL CONTEXT */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl mb-16 text-foreground text-center">
            A Familiar Stop in a Changing City
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Time */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">First Discovery</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Some hear about us, others find us walking through Dilli Haat.
              </p>
            </div>

            {/* Those Who Return */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">Regular Returns</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                A familiar place people come back to without thinking twice.
              </p>
            </div>

            {/* Across Generations */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10h.01M11 10h.01M9 20H3v-2a6 6 0 0112 0v2zm0-12a3 3 0 11-6 0 3 3 0 016 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">Generations</h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Visited across years, sometimes across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / CREDIBILITY */}
      <section className="bg-muted py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl mb-16 text-foreground text-center">
            Trust Built Over Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">30+ years of service</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">Word of mouth known</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">Recipes unchanged</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">First stalls at Dilli Haat</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">Authentic Maharashtrian food</p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-sm text-foreground">Generations of returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / DISCOVERY */}
      <section id="location" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
          Find Us at Dilli Haat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Address</p>
                  <p className="font-sans text-foreground">Stall No: 20<br />Dilli Haat, INA<br />New Delhi - 110023</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919811069033" className="font-sans text-foreground hover:text-accent transition-colors font-semibold">
                    +91 9811 069 033
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Hours</p>
                  <p className="font-sans text-foreground">Mon – Sun<br />11:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 sm:h-96 bg-muted rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6890577876427!2d77.2082347!3d28.5704158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f68f2c7f7f%3A0x1e8e6e6b5b8e8e6e!2sDilli%20Haat%2C%20INA%20Market%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl mb-8 text-foreground">
          Some Things Don't Need Changing
        </h2>
        <p className="font-sans text-lg text-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Good food, made with care and served honestly, speaks for itself.
        </p>
        <p className="font-sans text-xl text-foreground">
          If you're at Dilli Haat, come by.
          <br />
          <span className="text-accent font-semibold">We'll be right where we've always been.</span>
        </p>
      </section>

      {/* CTA SECTION - WHATSAPP */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 text-foreground">
            Have a question?
          </h2>
          <p className="font-sans text-foreground mb-8">
            Reach us at <span className="font-semibold">+91 9811 069 033</span>
          </p>

          <a
            href="https://wa.me/919811069033?text=Hi%20Maharashtra%20Food%20Stall%2C%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent text-accent font-sans font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
