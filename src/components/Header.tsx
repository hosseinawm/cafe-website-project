import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Coffee } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface HeaderProps {
  cartItems: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function Header({ cartItems, setIsCartOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2"
          >
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">BrewHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <Link
              to="/"
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link> */}
            <Link
              to="/"
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              Menu
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("reservations")}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              Reservations
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-all duration-200 hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartTotal}
                </span>
              )}
            </button>

            <Link
              to="/login"
              className="hidden md:inline-block text-gray-700 hover:text-amber-600 font-medium transition duration-200"
            >
              Sign in
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t animate-in slide-in-from-top-2">
            <nav className="px-4 py-4 space-y-4">
              <Link
                to="/login"
                className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                Sign in
              </Link>
              <Link
                to="/"
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/"
                onClick={() => scrollToSection("menu")}
                className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                Menu
              </Link>
              <Link
                to="/"
                onClick={() => scrollToSection("reservations")}
                className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                Reservations
              </Link>
              <Link
                to="/"
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
