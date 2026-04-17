import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-stone-50 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Column 1: Address */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-foreground">Location</h3>
            <div className="space-y-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6890577876427!2d77.2082347!3d28.5704158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f68f2c7f7f%3A0x1e8e6e6b5b8e8e6e!2sDilli%20Haat%2C%20INA%20Market%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm"
              />
              <p className="font-sans text-sm text-foreground">
                Dilli Haat INA<br />
                New Delhi
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-foreground">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-xs text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:+919811069033"
                  className="font-sans text-sm text-foreground hover:text-accent transition-colors font-semibold"
                >
                  +91 9811 069 033
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground mb-1">Address</p>
                <p className="font-sans text-sm text-foreground">
                  Stall No: 20<br />
                  Dilli Haat, INA<br />
                  New Delhi - 110023
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Hours & Social */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-foreground">Hours & Connect</h3>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-xs text-muted-foreground mb-2">Opening Hours</p>
                <p className="font-sans text-sm text-foreground leading-relaxed">
                  Mon–Sun<br />
                  11:00 AM – 9:00 PM
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.instagram.com/maharashtrafoodstall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-secondary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.63c-.704.272-1.291.613-1.877 1.2-.586.586-.928 1.173-1.2 1.877-.297.7-.497 1.57-.557 2.848C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.557 2.848.272.703.613 1.29 1.2 1.876.586.587 1.173.928 1.877 1.2.3.297 1.17.497 2.448.557 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.848-.557.703-.272 1.29-.613 1.876-1.2.587-.586.928-1.173 1.2-1.877.297-.7.497-1.57.557-2.848.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.557-2.848-.272-.703-.613-1.29-1.2-1.876-.586-.587-1.173-.928-1.877-1.2-.7-.297-1.57-.497-2.848-.557C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.061 1.264.07 1.645.07 4.849 0 3.203-.009 3.585-.07 4.849-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.264.061-1.645.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.061-1.264-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.264-.061 1.645-.07 4.849-.07z" />
                    <circle cx="12" cy="12" r="3.592" />
                    <circle cx="18.406" cy="5.594" r="0.846" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100070982015018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-secondary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/maharashtra-food"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-secondary transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-foreground">Stay Updated</h3>
            <p className="font-sans text-sm text-foreground mb-4">
              Keep in touch with our journey
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2 bg-background border border-border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-3 py-2 bg-accent text-accent-foreground font-sans text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscribed ? "✓ Received!" : isLoading ? "Sending..." : "Send Email"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            <p className="font-sans text-xs sm:text-sm text-foreground">
              Stall No: 20, Dilli Haat, INA, New Delhi - 110023
            </p>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
              © 2025 Maharashtra Food Stall
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
