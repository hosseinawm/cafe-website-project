import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Perfect Coffee,
            <span className="text-amber-400 block">Perfect Moment</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Experience the finest artisanal coffee in a cozy atmosphere. Order
            online or reserve your perfect table.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <button
              onClick={scrollToMenu}
              className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Order Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={scrollToReservations}
              className="group bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Reserve Table
            </button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-amber-400" />
              <span>Open 6AM - 10PM</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span>Downtown Location</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-amber-400" />
              <span>(555) 123-BREW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
