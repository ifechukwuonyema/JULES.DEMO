'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ThumbsUp, MessageCircle, Share2, Award, TrendingUp } from 'lucide-react';

const Community = () => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      user: 'Tunde from UNILAG',
      title: 'Optimal Yanga Plan for Akoka',
      upvotes: 452,
      tier: 'YANGA',
      content: 'Focus on ₦500 meals at Salo and saving for weekend groove...',
      tags: ['Savings', 'UNILAG', 'Foodie']
    },
    {
      id: 2,
      user: 'Chidi from Covenant',
      title: 'Lapo Survival Guide (Week 10)',
      upvotes: 891,
      tier: 'LAPO',
      content: 'When the allowee is almost gone, this is how I survived on ₦5k...',
      tags: ['Survival', 'Budget', 'CU']
    },
    {
      id: 3,
      user: 'Amaka from ABUAD',
      title: 'Cool Kid Lifestyle at Afe',
      upvotes: 234,
      tier: 'COOL_KIDS',
      content: 'Best spots to flex without breaking the bank in Ado-Ekiti...',
      tags: ['Flex', 'Lifestyle', 'ABUAD']
    },
  ]);

  return (
    <div className="p-4 md:p-8 md:ml-64 pb-20 md:pb-8">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Community Feed</h2>
        <p className="text-gray-500">See how other students are budgeting across Nigeria.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {plans.map(plan => (
            <Card key={plan.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{plan.title}</h4>
                    <p className="text-sm text-gray-500">{plan.user}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    plan.tier === 'LAPO' ? 'bg-yellow-100 text-yellow-600' :
                    plan.tier === 'YANGA' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {plan.tier}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{plan.content}</p>
                <div className="flex gap-2 mb-6">
                  {plan.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <ThumbsUp size={18} />
                    <span className="font-bold">{plan.upvotes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <MessageCircle size={18} />
                    <span>24</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="gradient-bg">
             <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Award size={20} /> Semester Leaderboard
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                {[
                    { name: 'Chidi E.', points: '2.4k upvotes', prize: '₦50k Voucher' },
                    { name: 'Tunde W.', points: '1.9k upvotes', prize: '₦20k Voucher' },
                    { name: 'Sade A.', points: '1.2k upvotes', prize: '₦10k Voucher' },
                ].map((top, i) => (
                    <div key={i} className="flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-xl opacity-50">#{i+1}</span>
                            <div>
                                <p className="font-bold text-sm">{top.name}</p>
                                <p className="text-[10px] opacity-80">{top.points}</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded">{top.prize}</span>
                    </div>
                ))}
             </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp size={20} /> Trending Schools
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {['UNILAG', 'Covenant', 'ABUAD', 'UI'].map((school, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <span className="font-medium text-sm">{school}</span>
                            <span className="text-xs text-gray-400">{100 - i * 15} active plans</span>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
