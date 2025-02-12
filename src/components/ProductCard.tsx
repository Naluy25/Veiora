import React from 'react';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // إنشاء رابط واتساب مع نص الرسالة المخصص
  const whatsappLink = `https://wa.me/201068146190?text=${encodeURIComponent(
    `مرحبًا، أنا مهتم بشراء المنتج: ${product.name}`
  )}`;

  return (
    <div className="gaming-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-500">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      <div className="p-6 text-right">
        <h3 className="text-xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {product.name}
        </h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 font-bold"
          >
            <MessageCircle className="h-5 w-5" />
            اطلب الآن
          </a>
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            !{product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
