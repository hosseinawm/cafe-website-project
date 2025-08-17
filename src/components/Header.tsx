import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, Coffee, User, LogOut } from "lucide-react";

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
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("access"));

  const handleLogOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsProfileOpen(false);
    navigate("/");
  };

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

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 text-gray-700 hover:text-amber-600 transition-all duration-200 hover:scale-110"
                >
                  <User className="h-6 w-6" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-block text-gray-700 hover:text-amber-600 font-medium transition duration-200"
              >
                Sign in
              </Link>
            )}

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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t animate-in slide-in-from-top-2 ">
            <nav className="px-4 py-4 space-y-4 ">
              {!isLoggedIn && (
                <Link
                  to="/login"
                  className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                >
                  Sign in
                </Link>
              )}
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
