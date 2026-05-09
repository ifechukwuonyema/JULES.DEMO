'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Package, Plus, DollarSign, Edit, Trash2 } from 'lucide-react';

const MerchantPortal = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Student Jollof Special', price: 1200, category: 'Cafeteria' },
    { id: 2, name: 'White Rice & Beans', price: 1000, category: 'Cafeteria' },
    { id: 3, name: 'Cold Zobo (Large)', price: 400, category: 'Cafeteria' },
  ]);

  return (
    <div className="p-4 md:p-8 md:ml-64 pb-20 md:pb-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Merchant Portal</h2>
          <p className="text-gray-500">Manage your listings for UNILAG Cafeteria</p>
        </div>
        <button className="gradient-bg flex items-center gap-2 px-6 py-3 rounded-xl font-bold">
            <Plus size={20} /> Add Item
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
            <CardContent className="pt-6">
                <p className="text-gray-500 text-sm">Total Views</p>
                <h3 className="text-2xl font-bold">12,405</h3>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="pt-6">
                <p className="text-gray-500 text-sm">Active Listings</p>
                <h3 className="text-2xl font-bold">{items.length}</h3>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="pt-6">
                <p className="text-gray-500 text-sm">Estimated Reach</p>
                <h3 className="text-2xl font-bold">~45k students</h3>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Package size={20} /> Current Listings
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-50">
                            <th className="pb-4 font-semibold text-gray-400">Item Name</th>
                            <th className="pb-4 font-semibold text-gray-400">Category</th>
                            <th className="pb-4 font-semibold text-gray-400">Price</th>
                            <th className="pb-4 font-semibold text-gray-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {items.map(item => (
                            <tr key={item.id} className="group">
                                <td className="py-4 font-medium">{item.name}</td>
                                <td className="py-4">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{item.category}</span>
                                </td>
                                <td className="py-4 font-bold text-purple-600">₦{item.price}</td>
                                <td className="py-4">
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MerchantPortal;
