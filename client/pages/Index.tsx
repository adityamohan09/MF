import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState<{[key: string]: boolean}>({});

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

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        if (rect.top < window.innerHeight * 0.75) {
          setIsScrolled(prev => ({ ...prev, [sectionId!]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section data-section="hero" className="relative min-h-screen flex items-center bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground mb-4">
                  Maharashtra on a <span className="text-accent">Plate</span>
                </h1>
                <p className="font-sans text-xl text-muted-foreground font-light">
                  In the Heart of Delhi
                </p>
              </div>

              <p className="font-sans text-lg text-foreground leading-relaxed max-w-md">
                Serving authentic Maharashtrian cuisine at Dilli Haat since 1994
              </p>

              <a
                href="https://share.google/ucRbokyY4t54wyqke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Visit Us at Dilli Haat
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-lg blur-2xl" />
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F66dc36b4ccaf435e998463ff4f8b665b?format=webp&width=800&height=1200"
                alt="Maharashtra Food Stall - Dilli Haat"
                className="w-full h-auto rounded-lg shadow-2xl relative z-10 hover:shadow-accent/20 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY SECTION */}
      <section data-section="founder" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isScrolled['founder'] ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`}>
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                  <p className="font-sans text-sm text-accent font-semibold tracking-wider">FOUNDER'S LEGACY</p>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
                  The Woman Behind the Legacy
                </h2>
              </div>

              <div className="space-y-6 font-sans text-foreground leading-relaxed text-base sm:text-lg">
                <p className="text-lg font-light">
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

            <div className={`relative transition-all duration-1000 ${isScrolled['founder'] ? 'animate-fade-in-right opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-muted to-background border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <svg className="w-16 h-16 text-accent/30 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-serif text-3xl text-foreground font-light">A Vision Born From</p>
                <p className="font-serif text-xl text-accent mt-2">Passion & Culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section data-section="story" id="story" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isScrolled['story'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <p className="font-sans text-sm text-accent font-semibold tracking-wider">OUR JOURNEY</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              From Passion to Purpose
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
          </div>

          <div className={`max-w-3xl mx-auto space-y-8 font-sans text-foreground leading-relaxed text-lg transition-all duration-1000 delay-200 ${isScrolled['story'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300">
              <p className="text-base text-accent font-semibold mb-2">1994</p>
              <p className="font-light">
                In 1994, Vibhavari started the Maharashtra Food Stall at Dilli Haat. What began as a small initiative soon became a cultural landmark.
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300">
              <p className="text-base text-accent font-semibold mb-2">Building Legacy</p>
              <p className="font-light">
                Over the years, the stall has served not just food, but stories. Recipes passed down through generations. Techniques refined through memory, not measurements.
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300">
              <p className="text-base text-accent font-semibold mb-2">Partnership & Vision</p>
              <p className="font-light">
                Alongside her husband, a trained artist who chose to support this vision, she built something rare. A space where food and culture exist together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section data-section="values" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isScrolled['values'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <p className="font-sans text-sm text-accent font-semibold tracking-wider">OUR MISSION</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              More Than Just Food
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isScrolled['values'] ? 'opacity-100' : 'opacity-0'}`}>
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Preserve & Promote",
                desc: "Committed to preserving and promoting Maharashtrian cuisine and culture."
              },
              {
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Cultural Events",
                desc: "Organized Ganpati Utsav celebrations, creating deeper community connections."
              },
              {
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                title: "Maha Jatra 2016",
                desc: "15-day celebration of Maharashtra's food, crafts, and culture."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative"
                style={{ animation: isScrolled['values'] ? `fadeInUp 0.8s ease-out forwards` : 'none', animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8 rounded-xl border border-border bg-background hover:border-accent hover:shadow-lg transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS & PRESENCE */}
      <section data-section="events" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-background to-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isScrolled['events'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <p className="font-sans text-sm text-accent font-semibold tracking-wider">BEYOND DILLI HAAT</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              Across India
            </h2>
            <p className="font-sans text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
              Our journey has taken us to some of the most prestigious fairs and festivals
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isScrolled['events'] ? 'opacity-100' : 'opacity-0'}`}>
            {[
              "India International Trade Fair",
              "Surajkund Crafts Mela",
              "Dastakar",
              "Dastkaari Haat",
              "Taj Utsav",
              "Tourism Mela",
              "Lucknow Mahotsav",
              "MTDC Resort, Ganpatipule"
            ].map((event, i) => (
              <div 
                key={i}
                className="group p-6 rounded-lg border border-border bg-background hover:border-accent hover:shadow-lg hover:bg-accent/5 transition-all duration-300"
                style={{ animation: isScrolled['events'] ? `fadeInUp 0.8s ease-out forwards` : 'none', animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sans text-sm text-foreground leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section data-section="awards" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-stone-50 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isScrolled['awards'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <p className="font-sans text-sm text-accent font-semibold tracking-wider">RECOGNITION</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              Honoured Along the Way
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
          </div>

          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isScrolled['awards'] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4">
              {[
                { year: "1998", award: "Best Vegetarian Stall", event: "Dilli Haat (Hindustan Times & ITC)" },
                { year: "2008", award: "Best Authentic State Food", event: "Surajkund Mela" },
                { year: "2012", award: "Gold Award for Food", event: "IITF New Delhi" },
                { year: "2015", award: "Maharashtrian Lady Entrepreneur", event: "Amhi Udyogini, Mumbai" },
                { year: "2016", award: "Felicitation by the Chief Minister", event: "State of Maharashtra" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative p-6 rounded-lg border border-border bg-background/50 hover:border-accent hover:bg-accent/5 transition-all duration-300"
                  style={{ animation: isScrolled['awards'] ? `fadeInUp 0.8s ease-out forwards` : 'none', animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-sans text-sm text-accent font-semibold mb-1 tracking-wide">{item.year}</p>
                      <p className="font-serif text-lg text-foreground font-semibold mb-1">{item.award}</p>
                      <p className="font-sans text-sm text-foreground/70">{item.event}</p>
                    </div>
                    <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-center text-foreground mt-12 leading-relaxed text-lg font-light">
              Each award reflects the <span className="text-accent font-semibold">trust and love</span> of our customers.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section data-section="philosophy" className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`space-y-8 transition-all duration-1000 ${isScrolled['philosophy'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight">
              Simple Food.<br />
              <span className="text-accent">Deep Roots.</span>
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto font-sans text-foreground leading-relaxed text-lg sm:text-xl font-light">
              <p>We believe food is more than taste.</p>
              <p>It is memory. It is identity. It is culture.</p>
              <p className="font-semibold text-foreground">
                For us, every plate is a way to bring Maharashtra closer to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              Come Experience It Yourself
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              Visit us at Dilli Haat and experience authentic Maharashtrian food, made the way it has always been.
            </p>

            <a
              href="https://share.google/ucRbokyY4t54wyqke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-sans font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
