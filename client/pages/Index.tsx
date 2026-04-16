import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
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
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground mb-4">
                Maharashtra on a <span className="text-accent">Plate</span>
              </h1>
              <p className="font-sans text-lg text-foreground">
                In the Heart of Delhi
              </p>
            </div>

            <p className="font-sans text-base text-foreground leading-relaxed">
              Serving authentic Maharashtrian cuisine at Dilli Haat since 1994
            </p>

            <a
              href="https://share.google/ucRbokyY4t54wyqke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-sans font-semibold hover:bg-secondary transition-colors"
            >
              Visit Us at Dilli Haat
            </a>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F66dc36b4ccaf435e998463ff4f8b665b?format=webp&width=800&height=1200"
              alt="Maharashtra Food Stall - Dilli Haat"
              className="w-full h-auto rounded-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* FOUNDER STORY SECTION */}
      <section id="founder" className="bg-muted py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl mb-8 text-foreground">
                The Woman Behind the Legacy
              </h2>
              <div className="space-y-6 font-sans text-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Vibhavari N. Chiplunkar is a Maharashtrian entrepreneur who brought the flavors of her roots to Delhi at a time when regional cuisines were still finding their space.
                </p>
                <p>
                  Born and raised in Delhi, she grew up in a family deeply connected to Maharashtrian culture and traditions. Her early education at Nutan Marathi Vidyalaya, one of the only Marathi schools in the city at the time, shaped her cultural foundation.
                </p>
                <p>
                  Her journey into food was not accidental. It was a calling. A natural extension of her passion for preserving and sharing her heritage.
                </p>
              </div>
            </div>
            <div className="h-80 sm:h-96 bg-background rounded-sm flex items-center justify-center text-muted-foreground">
              <svg className="w-20 h-20 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
          From Passion to Purpose
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 font-sans text-foreground leading-relaxed text-base sm:text-lg">
          <p>
            In 1994, Vibhavari started the Maharashtra Food Stall at Dilli Haat. What began as a small initiative soon became a cultural landmark.
          </p>
          
          <p>
            Over the years, the stall has served not just food, but stories. Recipes passed down through generations. Techniques refined through memory, not measurements.
          </p>
          
          <p>
            Alongside her husband, a trained artist who chose to support this vision, she built something rare. A space where food and culture exist together.
          </p>
        </div>
      </section>

      {/* ABOUT DILLI HAAT */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
            A Space That Celebrates India
          </h2>

          <div className="max-w-3xl mx-auto space-y-8 font-sans text-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Dilli Haat is a unique initiative by the Delhi Tourism and Transport Development Corporation.
            </p>
            
            <p>
              It brings together crafts, culture, and regional cuisines from across India in one place.
            </p>
            
            <p>
              With 26 dedicated food stalls, it offers a rotating showcase of authentic state cuisines. Maharashtra Food Stall has proudly represented the state here for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
          More Than Just Food
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Preserve & Promote</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              Committed to preserving and promoting Maharashtrian cuisine and culture.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Cultural Events</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              Organized Ganpati Utsav celebrations, creating deeper community connections.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Maha Jatra 2016</h3>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              15-day celebration of Maharashtra's food, crafts, and culture.
            </p>
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-muted py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-16 text-foreground">
            Loved Beyond Borders
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <p className="font-sans text-xl sm:text-2xl font-semibold text-accent mb-2">95%+</p>
              <p className="font-sans text-lg text-foreground">
                of our customers are non-Maharashtrians
              </p>
            </div>

            <p className="font-sans text-lg text-foreground leading-relaxed italic">
              Yet, they return. Again and again.
            </p>

            <p className="font-sans text-foreground leading-relaxed">
              Because authenticity speaks for itself.
            </p>

            <p className="font-sans text-foreground leading-relaxed">
              Over 22+ years, we have built trust, familiarity, and a loyal customer base that values real, home-style Maharashtrian food.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS & PRESENCE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
          Across India
        </h2>

        <p className="font-sans text-lg text-foreground text-center mb-12 max-w-2xl mx-auto">
          Our journey has taken us beyond Dilli Haat to some of the most prestigious fairs and festivals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {[
            "India International Trade Fair (New Delhi)",
            "Surajkund Crafts Mela (Haryana)",
            "Dastakar (Delhi, Pune, Bengaluru)",
            "Dastkaari Haat",
            "Taj Utsav (Agra)",
            "Tourism Mela (Gwalior)",
            "Lucknow Mahotsav",
            "MTDC Resort, Ganpatipule (Maharashtra)"
          ].map((event, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-sans text-foreground">{event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-foreground text-center">
            Honoured Along the Way
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: "1998", award: "Best Vegetarian Stall", event: "Dilli Haat (Hindustan Times & ITC)" },
              { year: "2008", award: "Best Authentic State Food", event: "Surajkund Mela" },
              { year: "2012", award: "Gold Award for Food", event: "IITF New Delhi" },
              { year: "2015", award: "Maharashtrian Lady Entrepreneur", event: "Amhi Udyogini, Mumbai" },
              { year: "2016", award: "Felicitation by the Chief Minister", event: "State of Maharashtra" }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-accent pl-6 py-2">
                <p className="font-sans text-sm text-muted-foreground mb-1">{item.year}</p>
                <p className="font-serif text-lg text-foreground mb-1">{item.award}</p>
                <p className="font-sans text-sm text-foreground">{item.event}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-center text-foreground mt-12 max-w-2xl mx-auto leading-relaxed">
            Each award reflects the trust and love of our customers.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl mb-8 text-foreground">
          Simple Food. Deep Roots.
        </h2>
        
        <div className="space-y-8 max-w-2xl mx-auto font-sans text-foreground leading-relaxed text-base sm:text-lg">
          <p>
            We believe food is more than taste.
          </p>
          <p>
            It is memory. It is identity. It is culture.
          </p>
          <p>
            For us, every plate is a way to bring Maharashtra closer to you.
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-muted py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-foreground">
            Come Experience It Yourself
          </h2>
          <p className="font-sans text-lg text-foreground mb-10 leading-relaxed">
            Visit us at Dilli Haat and experience authentic Maharashtrian food, made the way it has always been.
          </p>

          <a
            href="https://share.google/ucRbokyY4t54wyqke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-sans font-semibold hover:bg-secondary transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
