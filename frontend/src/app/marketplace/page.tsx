'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, MapPin, Coffee, BookOpen, Scissors, ShoppingBag, Filter } from 'lucide-react';

const SCHOOLS = [
  "University of Lagos (UNILAG)",
  "Covenant University",
  "Afe Babalola University (ABUAD)",
  "Pan-Atlantic University",
  "University of Ibadan (UI)",
];

const ITEMS = [
  {
    name: 'Korede Spaghetti',
    price: '₦1,500',
    cat: 'Cafeteria',
    shop: 'Cafeteria 1',
    uni: 'UNILAG',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Engineering Textbook',
    price: '₦8,500',
    cat: 'Bookstore',
    shop: 'Main Library',
    uni: 'UNILAG',
    img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Low Cut + Dye',
    price: '₦3,000',
    cat: 'Hair and Beauty',
    shop: 'Campus Saloon',
    uni: 'Covenant',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Allowee T-Shirt',
    price: '₦6,000',
    cat: 'Fashion',
    shop: 'Student Union Mall',
    uni: 'ABUAD',
    img: 'https://images.unsplash.com/photo-1523381235312-da59b932166a?auto=format&fit=crop&q=80&w=400'
  },
];

const Marketplace = () => {
  const [selectedUni, setSelectedUni] = useState(SCHOOLS[0]);
  const [search, setSearch] = useState('');

  return (
    <div className="p-4 md:p-8 md:ml-64 pb-20 md:pb-8">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">School Marketplace</h2>
          <p className="text-gray-500">Explore listings and prices at {selectedUni}</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {SCHOOLS.map(s => (
            <button
              key={s}
              onClick={() => setSelectedUni(s)}
              className={`px-4 py-2 rounded-full whitespace-nowrap border transition-all ${selectedUni === s ? 'gradient-bg border-transparent' : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'}`}
            >
              {s.split('(')[0]}
            </button>
          ))}
        </div>
      </header>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search items, cafeteria or bookstores..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:border-purple-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ITEMS.filter(i => i.uni.includes(selectedUni.split('(')[0].trim()) || i.uni === selectedUni).map((item, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer group">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
               {item.img ? (
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               ) : (
                   <div className="flex items-center justify-center h-full text-gray-400">
                       {item.cat === 'Cafeteria' && <Coffee size={40} />}
                       {item.cat === 'Bookstore' && <BookOpen size={40} />}
                       {item.cat === 'Hair and Beauty' && <Scissors size={40} />}
                       {item.cat === 'Fashion' && <ShoppingBag size={40} />}
                   </div>
               )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm truncate">{item.name}</h4>
                <span className="text-purple-600 font-bold text-sm">{item.price}</span>
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={12} /> {item.shop}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{item.cat}</span>
                <button className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">View Details</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-purple-50 border border-purple-100 text-center">
        <h3 className="text-xl font-bold text-purple-900 mb-2">Are you a school vendor?</h3>
        <p className="text-purple-700 mb-6">List your products and reach thousands of students daily.</p>
        <button className="gradient-bg px-8 py-3 rounded-xl font-bold">Switch to Merchant Mode</button>
      </div>
    </div>
  );
};

export default Marketplace;
