import React from 'react';
import { Plus, Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  popular?: boolean;
}

interface MenuProps {
  addToCart: (item: MenuItem) => void;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Rich, bold espresso with a perfect crema',
    price: 3.50,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.9,
    popular: true
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description: 'Vanilla syrup, steamed milk, espresso, and caramel drizzle',
    price: 5.25,
    image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.8,
    popular: true
  },
  {
    id: 3,
    name: 'Artisan Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and foam',
    price: 4.75,
    image: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Coffee',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Iced Vanilla Latte',
    description: 'Smooth espresso with vanilla and cold milk over ice',
    price: 4.95,
    image: 'https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cold Drinks',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Fresh Croissant',
    description: 'Buttery, flaky pastry baked fresh daily',
    price: 3.25,
    image: 'https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pastries',
    rating: 4.5
  },
  {
    id: 6,
    name: 'Chocolate Muffin',
    description: 'Rich chocolate muffin with chocolate chips',
    price: 3.75,
    image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pastries',
    rating: 4.4
  }
];

const categories = ['All', 'Coffee', 'Cold Drinks', 'Pastries'];

export default function Menu({ addToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with love, served with passion. Every cup tells a story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="group bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}