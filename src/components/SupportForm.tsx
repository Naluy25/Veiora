import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/201068146190?text=${whatsappMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-right">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="button-glow bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 font-bold mr-auto"
      >
        <MessageCircle className="h-5 w-5" />
        إرسال
      </button>
    </form>
  );
}