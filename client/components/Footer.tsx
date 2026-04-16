import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
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
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm3.6 5.2c-.56 0-1.2.64-1.2 1.2s.64 1.2 1.2 1.2c.56 0 1.2-.64 1.2-1.2s-.64-1.2-1.2-1.2zm-3.6 1.6c-2.64 0-4.8 2.16-4.8 4.8s2.16 4.8 4.8 4.8 4.8-2.16 4.8-4.8-2.16-4.8-4.8-4.8zm0 1.6c1.76 0 3.2 1.44 3.2 3.2s-1.44 3.2-3.2 3.2-3.2-1.44-3.2-3.2 1.44-3.2 3.2-3.2z" />
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
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333s3.738 8.333 8.333 8.333 8.333-3.738 8.333-8.333-3.738-8.333-8.333-8.333zm2 2a1.667 1.667 0 110 3.334 1.667 1.667 0 010-3.334zm-2 1.333c-1.841 0-3.333 1.492-3.333 3.333s1.492 3.333 3.333 3.333 3.333-1.492 3.333-3.333-1.492-3.333-3.333-3.333z" />
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
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 9.5h2V16h-2v-6.5zm1-2.082c.637 0 1.152-.515 1.152-1.152 0-.637-.515-1.152-1.152-1.152-.637 0-1.152.515-1.152 1.152 0 .637.515 1.152 1.152 1.152zM16 16h-2.5v-3.5c0-.831-.3-1.4-1.04-1.4-.567 0-.904.383-.954 1.152h-.017v3.748H9v-6.5h2.416v.888h.035c.3-.452.977-1.168 2.411-1.168 2.269 0 3.961 1.492 3.961 4.701V16z" />
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
                placeholder="Your email"
                className="w-full px-3 py-2 bg-background border border-border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-accent text-accent-foreground font-sans text-sm font-medium hover:bg-secondary transition-colors"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
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
