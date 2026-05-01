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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* LEFT COLUMN - TEXT CONTENT */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 w-fit">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <p className="font-sans text-xs sm:text-sm text-accent font-semibold tracking-wider">SINCE 1994</p>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-foreground">
                  Maharashtra on<br /><span className="text-accent">a Plate</span>
                </h1>
                <p className="font-sans text-lg sm:text-xl text-muted-foreground font-light">
                  In the Heart of Delhi
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="font-sans text-base sm:text-lg text-foreground leading-relaxed max-w-lg font-light">
                  Serving authentic Maharashtrian cuisine with pride and passion. A culinary heritage spanning three decades, unchanged and timeless.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-sm text-foreground">30+ Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-sm text-foreground">Authentic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-sm text-foreground">Heritage</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <a
                  href="https://share.google/ucRbokyY4t54wyqke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-accent to-secondary text-accent-foreground font-sans font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Visit Us at Dilli Haat</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <p className="font-sans text-xs text-muted-foreground mt-3">
                  📍 Stall No: 20, Dilli Haat INA, New Delhi
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div className="relative animate-fade-in-right order-1 lg:order-2">
              {/* Background Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-2xl blur-3xl" />

              {/* Image Container */}
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F66dc36b4ccaf435e998463ff4f8b665b?format=webp&width=800&height=1200"
                  alt="Maharashtra Food Stall - Dilli Haat"
                  className="w-full h-auto rounded-xl shadow-2xl relative z-10 hover:shadow-3xl transition-all duration-500 object-cover"
                  loading="lazy"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY SECTION */}
      <section data-section="founder" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
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
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-lg blur-2xl" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Faf03adb24251416b91a4f43841b93384%2F4b1c230bea9c4238b36e53eb009bc03a?format=webp&width=800&height=1200"
                alt="Vibhavari N. Chiplunkar - Founder of Maharashtra Food Stall"
                className="relative w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section data-section="story" id="story" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
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
      <section data-section="values" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
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

      {/* AWARDS & RECOGNITION */}
      <section data-section="awards" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-stone-50 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${isScrolled['awards'] ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <p className="font-sans text-sm text-accent font-semibold tracking-wider">RECOGNITION</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              Honoured Along the Way
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
          </div>

          {/* Infinite Scroll Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex gap-4 sm:gap-6 animate-scroll-left py-6">
              {/* Original items */}
              {[
                { year: "1998", award: "Best Vegetarian Stall", event: "Dilli Haat (Hindustan Times & ITC)" },
                { year: "2008", award: "Best Authentic State Food", event: "Surajkund Mela" },
                { year: "2012", award: "Gold Award for Food", event: "IITF New Delhi" },
                { year: "2015", award: "Maharashtrian Lady Entrepreneur", event: "Amhi Udyogini, Mumbai" },
                { year: "2016", award: "Felicitation by the Chief Minister", event: "State of Maharashtra" }
              ].map((item, i) => (
                <div
                  key={`original-${i}`}
                  className="group relative flex-shrink-0 w-80 p-6 rounded-xl border border-border bg-background hover:border-accent hover:shadow-lg hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <p className="font-sans text-sm text-accent font-semibold tracking-wide">{item.year}</p>
                    <div>
                      <p className="font-serif text-lg text-foreground font-semibold mb-2">{item.award}</p>
                      <p className="font-sans text-sm text-foreground/70">{item.event}</p>
                    </div>
                    <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              ))}

              {/* Duplicate items for infinite loop */}
              {[
                { year: "1998", award: "Best Vegetarian Stall", event: "Dilli Haat (Hindustan Times & ITC)" },
                { year: "2008", award: "Best Authentic State Food", event: "Surajkund Mela" },
                { year: "2012", award: "Gold Award for Food", event: "IITF New Delhi" },
                { year: "2015", award: "Maharashtrian Lady Entrepreneur", event: "Amhi Udyogini, Mumbai" },
                { year: "2016", award: "Felicitation by the Chief Minister", event: "State of Maharashtra" }
              ].map((item, i) => (
                <div
                  key={`duplicate-${i}`}
                  className="group relative flex-shrink-0 w-80 p-6 rounded-xl border border-border bg-background hover:border-accent hover:shadow-lg hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <p className="font-sans text-sm text-accent font-semibold tracking-wide">{item.year}</p>
                    <div>
                      <p className="font-serif text-lg text-foreground font-semibold mb-2">{item.award}</p>
                      <p className="font-sans text-sm text-foreground/70">{item.event}</p>
                    </div>
                    <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-sans text-center text-foreground mt-12 leading-relaxed text-lg font-light">
            Each award reflects the <span className="text-accent font-semibold">trust and love</span> of our customers.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section data-section="philosophy" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
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

      {/* CATERING SECTION */}
      <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
                  Have Catering Needs?
                </h2>
                <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                  We do that too. Bring authentic Maharashtrian cuisine to your events, celebrations, and special occasions. From intimate gatherings to grand celebrations, we've got you covered.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-foreground mb-1">Customizable Menus</p>
                    <p className="font-sans text-sm text-foreground/70">Choose from our signature dishes or create a menu tailored to your taste</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-foreground mb-1">Consistent Taste, Every Time</p>
                    <p className="font-sans text-sm text-foreground/70">Same recipes, same flavors you love, served just the way you remember</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-foreground mb-1">Perfect for Every Gathering</p>
                    <p className="font-sans text-sm text-foreground/70">Whether it's an intimate group or a large celebration, we cater to it all</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gradient-to-br from-muted to-background border border-border rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-serif text-2xl text-foreground mb-6">Get a Quote</h3>

              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData);

                try {
                  const response = await fetch("/api/catering", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    alert('Thank you! We will contact you soon with a quote.');
                    (e.currentTarget as HTMLFormElement).reset();
                  } else {
                    alert('There was an error submitting your request. Please try again.');
                  }
                } catch (error) {
                  console.error('Catering form error:', error);
                  alert('There was an error submitting your request. Please try again.');
                }
              }}>
                {/* Name */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Venue name or address"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Number of People */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Expected Number of Guests *
                  </label>
                  <select
                    name="guests"
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select number of guests</option>
                    <option value="10-25">10 - 25 people</option>
                    <option value="25-50">25 - 50 people</option>
                    <option value="50-100">50 - 100 people</option>
                    <option value="100-200">100 - 200 people</option>
                    <option value="200-500">200 - 500 people</option>
                    <option value="500+">500+ people</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Event Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your event, preferences, or any special requirements..."
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent to-secondary text-accent-foreground font-sans font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 mt-6"
                >
                  Request a Quote
                </button>

                <p className="font-sans text-xs text-muted-foreground text-center mt-4">
                  We'll contact you within 24 hours with a personalized quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
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
