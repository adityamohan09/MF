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
                  href="tel:+918826284330"
                  className="font-sans text-sm text-foreground hover:text-accent transition-colors"
                >
                  +91 8826 284 330
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:info@maharashtrafoodstall.com"
                  className="font-sans text-sm text-foreground hover:text-accent transition-colors"
                >
                  info@mfs.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Hours & Social */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-foreground">Hours & Social</h3>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-xs text-muted-foreground mb-2">Opening Hours</p>
                <p className="font-sans text-sm text-foreground leading-relaxed">
                  Mon–Sun<br />
                  11:00 AM – 9:00 PM
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-accent hover:text-secondary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-accent hover:text-secondary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.26 7.195c.005.118.008.237.008.356 0 3.645-2.776 7.852-7.852 7.852-1.559 0-3.008-.456-4.234-1.244.216.025.435.038.656.038 1.294 0 2.486-.44 3.43-1.181-1.207-.022-2.223-.82-2.574-1.916.169.032.341.049.518.049.252 0 .497-.033.731-.097-1.261-.253-2.212-1.366-2.212-2.703v-.034c.371.206.796.33 1.251.345-.741-.495-1.229-1.338-1.229-2.294 0-.505.136-.979.373-1.387 1.36 1.668 3.39 2.768 5.68 2.884-.047-.2-.07-.407-.07-.619 0-1.5 1.215-2.715 2.715-2.715.781 0 1.486.33 1.98.857.618-.122 1.2-.348 1.725-.659-.202.633-.632 1.164-1.192 1.5.549-.066 1.071-.211 1.557-.428-.363.542-.823 1.017-1.351 1.401z" />
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
              Serving authentic Maharashtrian food in Delhi since 1994 • Dilli Haat INA
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
