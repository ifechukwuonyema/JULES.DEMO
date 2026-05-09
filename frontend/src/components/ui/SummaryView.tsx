'use client';

import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Coffee, ShoppingBag, Book, Sparkles, AlertCircle } from 'lucide-react';

const SummaryView = () => {
  const categories = [
    { name: 'Salo & Cafeteria', amount: '₦8,400', color: 'text-orange-500', icon: Coffee, desc: 'Your main food spend' },
    { name: 'Grocery (Ramen-tier)', amount: '₦2,500', color: 'text-yellow-500', icon: ShoppingBag, desc: 'Survival supplies' },
    { name: 'Textbooks & Labs', amount: '₦12,000', color: 'text-blue-500', icon: Book, desc: 'Investment in future' },
  ];

  return (
    <Card className="border-0 shadow-none bg-transparent">
        <div className="flex items-center gap-2 mb-6 text-purple-600">
            <Sparkles size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">Where did my money go?</h3>
        </div>

        <div className="space-y-4">
            {categories.map((cat, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 items-start">
                    <div className={`p-3 rounded-xl bg-gray-50 ${cat.color}`}>
                        <cat.icon size={24} />
                    </div>
                    <div>
                        <div className="flex justify-between w-full mb-1">
                            <span className="font-bold text-gray-900">{cat.name}</span>
                            <span className="font-extrabold text-gray-900">{cat.amount}</span>
                        </div>
                        <p className="text-sm text-gray-500">{cat.desc}</p>
                    </div>
                </div>
            ))}

            <div className="p-4 bg-blue-50 rounded-2xl flex gap-3 border border-blue-100">
                <AlertCircle className="text-blue-600 shrink-0" size={20} />
                <p className="text-sm text-blue-700 leading-relaxed">
                    <strong>Note:</strong> You've spent 15% less on "Flexing" this week than your peers. Great job staying within your <span className="font-bold">Yanga</span> tier!
                </p>
            </div>
        </div>
    </Card>
  );
};

export default SummaryView;
