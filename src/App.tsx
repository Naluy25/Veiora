import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { TowerControl as GameController, Gift, MessageSquare, Gamepad2, Zap, Trophy } from 'lucide-react';

const allProducts = [
  // Steam Products
  {
    id: '1',
    name: 'حساب ستيم مميز',
    description: 'حساب ستيم يحتوي على العديد من الألعاب الشهيرة',
    price: 49.99,
    category: 'steam-accounts',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338909414098472991/steam-platform_2.png?ex=67accc10&is=67ab7a90&hm=c8aa5e13b36a8ae3e0e0d8ce2bb20d5fa510ce2957185e769d82f4d3a323f199&',
    inStock: true
  },
  {
    id: '2',
    name: 'بطاقة ستيم 50$',
    description: 'بطاقة ستيم بقيمة 50 دولار للشراء من متجر Steam',
    price: 52.99,
    category: 'steam-gifts',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338909414098472991/steam-platform_2.png?ex=67accc10&is=67ab7a90&hm=c8aa5e13b36a8ae3e0e0d8ce2bb20d5fa510ce2957185e769d82f4d3a323f199&',
    inStock: true
  },
  // Game Credits
  {
    id: '3',
    name: 'شحن يوسي ببجي موبايل',
    description: 'شحن رصيد UC مباشر للعبة ببجي موبايل',
    price: 9.99,
    category: 'game-credits',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338905118116024390/1-2.png?ex=67acc80f&is=67ab768f&hm=7dfd1eb50ddc9a4d9ea1c6308c460c3bbaf40e789547b1b419c4dc33d4d28779&',
    inStock: true
  },
  {
    id: '4',
    name: 'فالورانت بوينتس',
    description: 'شحن نقاط فالورانت VP مباشر للحساب',
    price: 19.99,
    category: 'game-credits',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338905159786565693/960x0.png?ex=67acc819&is=67ab7699&hm=0739360cfb456a267498c881312b42241a2e42484e0943a17eea6ddf2a33a233&',
    inStock: true
  },
  // Discord Services
  {
    id: '5',
    name: 'ديسكورد نيترو',
    description: 'اشتراك نيترو لمدة شهر',
    price: 9.99,
    category: 'discord',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338909669602885652/121050718_342094887209425_3960567362709536854_n.png?ex=67accc4c&is=67ab7acc&hm=70fef593d071552e898565906afa7d2563f36243b7c17d8d491cdbc3c221c9c6&',
    inStock: true
  },
  {
    id: '6',
    name: 'بوست سيرفر ديسكورد',
    description: 'بوست لسيرفر الديسكورد الخاص بك',
    price: 4.99,
    category: 'discord',
    image: 'https://cdn.discordapp.com/attachments/1140732041957220463/1338909669602885652/121050718_342094887209425_3960567362709536854_n.png?ex=67accc4c&is=67ab7acc&hm=70fef593d071552e898565906afa7d2563f36243b7c17d8d491cdbc3c221c9c6&',
    inStock: true
  }
];

const categories = [
  {
    id: 'all',
    name: 'جميع المنتجات',
    description: 'تصفح جميع منتجاتنا المميزة',
    icon: Trophy
  },
  {
    id: 'steam-accounts',
    name: 'حسابات ستيم',
    description: 'حسابات ستيم مميزة بأفضل الأسعار',
    icon: GameController
  },
  {
    id: 'steam-gifts',
    name: 'بطاقات ستيم',
    description: 'بطاقات هدايا ستيم بجميع الفئات',
    icon: Gift
  },
  {
    id: 'game-credits',
    name: 'شحن ألعاب',
    description: 'شحن رصيد لجميع الألعاب الشهيرة',
    icon: Gamepad2
  },
  {
    id: 'discord',
    name: 'خدمات ديسكورد',
    description: 'نيترو، بوستات وخدمات متنوعة',
    icon: MessageSquare
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      
      {/* Hero Section */}
      <div className="relative gaming-gradient py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-6xl font-black mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-glow">
            متجر فيورا
          </h1>
          <p className="text-2xl text-center text-gray-300 font-bold">
            وجهتك الأولى لجميع الخدمات الرقمية
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-glow">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {categories.filter(cat => cat.id !== 'all').map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="gaming-card rounded-lg p-6 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center"
            >
              <category.icon className="h-12 w-12 text-purple-400 group-hover:text-purple-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{category.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-glow">
          {categories.find(cat => cat.id === selectedCategory)?.name || 'جميع المنتجات'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;