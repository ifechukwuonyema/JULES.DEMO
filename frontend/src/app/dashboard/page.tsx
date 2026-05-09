'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { PlusCircle, ArrowUpRight, ArrowDownRight, Zap, Link as LinkIcon, Eye, EyeOff } from 'lucide-react';
import MockBankConnect from '@/components/ui/MockBankConnect';
import SummaryView from '@/components/ui/SummaryView';
import { useState } from 'react';

const data = [
  { name: 'Mon', income: 4000, expense: 2400 },
  { name: 'Tue', income: 3000, expense: 1398 },
  { name: 'Wed', income: 2000, expense: 9800 },
  { name: 'Thu', income: 2780, expense: 3908 },
  { name: 'Fri', income: 1890, expense: 4800 },
  { name: 'Sat', income: 2390, expense: 3800 },
  { name: 'Sun', income: 3490, expense: 4300 },
];

const Dashboard = () => {
  const [showBankLink, setShowBankLink] = useState(false);
  const [isLinked, setIsLinked] = useState(false);
  const [hideBalances, setHideBalances] = useState(false);

  return (
    <div className="p-4 md:p-8 md:ml-64 pb-20 md:pb-8">
      {showBankLink && <MockBankConnect onConnect={() => { setIsLinked(true); setShowBankLink(false); }} />}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Welcome back, Student 👋</h2>
          <p className="text-gray-500">Your finances at a glance.</p>
        </div>
        {!isLinked && (
          <button
            onClick={() => setShowBankLink(true)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <LinkIcon size={16} /> Link Bank
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="gradient-bg relative group">
          <button
            onClick={() => setHideBalances(!hideBalances)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            {hideBalances ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <CardContent className="pt-6">
            <p className="text-white/80 text-sm">Total Balance</p>
            <h3 className="text-3xl font-bold text-white">
                {hideBalances ? '₦ ••••••••' : '₦45,200.00'}
            </h3>
            <div className="mt-4 flex items-center gap-2 text-white/90 text-sm">
                <ArrowUpRight size={16} />
                <span>+12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm">Monthly Allowance</p>
                    <h3 className="text-2xl font-bold">₦120,000</h3>
                </div>
                <div className="p-2 bg-green-100 text-green-600 rounded-full">
                    <ArrowUpRight size={20} />
                </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm">Monthly Spend</p>
                    <h3 className="text-2xl font-bold">₦74,800</h3>
                </div>
                <div className="p-2 bg-red-100 text-red-600 rounded-full">
                    <ArrowDownRight size={20} />
                </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Spending Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="expense" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorExp)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-none bg-transparent">
          <SummaryView />
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <button className="text-purple-600 text-sm font-medium">See all</button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Korede Spaghetti', cat: 'Cafeteria', price: '-₦1,200', color: 'bg-orange-100 text-orange-600' },
                { name: 'Uber to UI Gate', cat: 'Transport', price: '-₦2,500', color: 'bg-blue-100 text-blue-600' },
                { name: 'Monthly Allowance', cat: 'Income', price: '+₦50,000', color: 'bg-green-100 text-green-600' },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${tx.color}`}>
                      <Zap size={18} />
                    </div>
                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <p className="text-xs text-gray-500">{tx.cat}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${tx.price.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.price}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
