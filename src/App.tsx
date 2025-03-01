import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { TowerControl as GameController, Gift, MessageSquare, Gamepad2, Zap, Trophy } from 'lucide-react';

const allProducts = [

  // Game Credits
   // VALORANT
   {
    id: '1',
    name: '475 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 260,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },
  {
    id: '2',
    name: '1,000 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 500,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },
  {
    id: '3',
    name: '2,050 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 1000,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },
  {
    id: '4',
    name: '3,650 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 1750,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },
  {
    id: '5',
    name: '5,350 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 2500,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },
  {
    id: '6',
    name: '11,000 Points',
    description: 'شحن رصيد VALORANT Points',
    price: 5000,
    category: 'game-credits',
    image: 'https://j.top4top.io/p_3347fe8ov4.jpg',
    inStock: true
  },

  // PUBG Mobile
  {
    id: '7',
    name: '60 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 75,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },
  {
    id: '8',
    name: '325 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 300,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },
  {
    id: '9',
    name: '660 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 545,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },
  {
    id: '10',
    name: '1,800 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 1350,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },
  {
    id: '11',
    name: '3,850 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 2650,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },
  {
    id: '12',
    name: '8,100 UC',
    description: 'شحن رصيد UC للعبة PUBG Mobile',
    price: 5250,
    category: 'game-credits',
    image: 'https://k.top4top.io/p_3347y7tq85.jpg',
    inStock: true
  },

  // League of Legends
  {
    id: '13',
    name: '575 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 250,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },
  {
    id: '14',
    name: '1,380 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 570,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },
  {
    id: '15',
    name: '2,800 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 1105,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },
  {
    id: '16',
    name: '4,500 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 1745,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },
  {
    id: '17',
    name: '6,500 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 2450,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },
  {
    id: '18',
    name: '13,500 RP',
    description: 'شحن رصيد RP للعبة League of Legends',
    price: 4950,
    category: 'game-credits',
    image: 'https://i.top4top.io/p_3347edypq3.jpg',
    inStock: true
  },

  // Call of Duty®: Mobile
  {
    id: '19',
    name: '30 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 25,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '20',
    name: '80 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 60,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '21',
    name: '420 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 245,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '22',
    name: '880 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 480,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '23',
    name: '2,400 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 1165,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '24',
    name: '5,000 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 2295,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '25',
    name: '10,800 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 4560,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '26',
    name: '21,600 CP',
    description: 'شحن رصيد CP للعبة Call of Duty®: Mobile',
    price: 8845,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },
  {
    id: '27',
    name: 'For More Contact Us',
    description: 'تواصل معنا للحصول على عروض خاصة أو كميات أكبر من CP',
    price: null,
    category: 'game-credits',
    image: 'https://h.top4top.io/p_3347sb11e2.jpg',
    inStock: true
  },

  // Mobile Legends: Bang Bang
  {
    id: '28',
    name: '31 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 33,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '29',
    name: '155 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 150,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '30',
    name: '311 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 298,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '31',
    name: '949 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 855,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '32',
    name: '1,617 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 1420,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '33',
    name: '3,331 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 2815,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '34',
    name: '4,997 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 4200,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '35',
    name: '6,718 Diamonds',
    description: 'شحن رصيد Diamonds للعبة Mobile Legends: Bang Bang',
    price: 5585,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
    inStock: true
  },
  {
    id: '36',
    name: 'For More Contact Us',
    description: 'تواصل معنا للحصول على عروض خاصة أو كميات أكبر من Diamonds',
    price: null,
    category: 'game-credits',
    image: 'https://g.top4top.io/p_33479vj8z1.jpg',
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
  },
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
