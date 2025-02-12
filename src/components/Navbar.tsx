import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

interface NavbarProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export default function Navbar({ onCategorySelect, selectedCategory }: NavbarProps) {
  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'steam-accounts', name: 'حسابات ستيم' },
    { id: 'steam-gifts', name: 'بطاقات ستيم' },
    { id: 'game-credits', name: 'شحن ألعاب' },
    { id: 'discord', name: 'ديسكورد' }
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                <GameController className="h-8 w-8 text-purple-400" />
                فيورا ستور
              </h1>
            </div>
            <div className="hidden md:block mr-10 flex-1">
              <div className="flex items-baseline justify-center space-x-4 space-x-reverse">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategorySelect(category.id)}
                    className={`nav-item px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                      selectedCategory === category.id
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}