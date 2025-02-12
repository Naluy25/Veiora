export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'steam-accounts' | 'steam-gifts' | 'game-credits' | 'discord' | 'other';
  image: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  arabicName: string;
  icon: string;
}