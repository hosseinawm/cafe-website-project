import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">BrewHaven</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your perfect coffee destination. Crafting exceptional experiences
              one cup at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">
                  123 Coffee Street, Downtown
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">(555) 123-BREW</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">hello@brewhaven.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-gray-300">Monday - Friday</div>
                  <div className="text-sm text-gray-400">
                    6:00 AM - 10:00 PM
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-gray-300">Saturday - Sunday</div>
                  <div className="text-sm text-gray-400">
                    7:00 AM - 11:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#menu"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                Our Menu
              </a>
              <a
                href="#reservations"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                Reservations
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                Catering
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                Gift Cards
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BrewHaven. All rights reserved. Made with ❤️ and lots of
            coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
