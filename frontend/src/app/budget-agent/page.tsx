'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Zap, Shield, Rocket, Heart, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '@/lib/api';

const TIERS = [
  { id: 'LAPO', name: 'LAPO Baby', range: '₦10k - 20k', icon: Zap, color: 'bg-yellow-100 text-yellow-600', desc: 'Survival mode. Cheapest alternatives only.' },
  { id: 'YANGA', name: 'Yanga', range: '₦20k - 35k', icon: Heart, color: 'bg-pink-100 text-pink-600', desc: 'Balanced vibes. Quality on a budget.' },
  { id: 'COOL_KIDS', name: 'Cool Kids', range: '₦35k - 50k', icon: Rocket, color: 'bg-blue-100 text-blue-600', desc: 'Lagos living. Leisure and flex.' },
  { id: 'NEPO', name: 'NEPO Babies', range: '₦50k+', icon: Shield, color: 'bg-purple-100 text-purple-600', desc: 'Awoof dey run. Premium everything.' },
];

const BudgetAgent = () => {
  const [step, setStep] = useState(1);
  const [allowance, setAllowance] = useState('');
  const [tier, setTier] = useState('');
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await api.post('/ai/generate-plan', {
        allowance: Number(allowance),
        tier,
        universityId: 'clx...mock...', // In real app, get from user profile
      });
      setPlan({
        items: response.data.planItems.map((item: any) => ({
            name: item.name,
            price: `₦${item.price}`
        })),
        advice: response.data.advice,
        savings: `₦${response.data.savings}`
      });
      setStep(3);
    } catch (error) {
      console.error('Failed to generate plan:', error);
      // Fallback to demo data if backend fails/not seeded
      setPlan({
        items: [
          { name: 'University Cafeteria Meal Plan', price: '₦15,000' },
          { name: 'Bookstore Essentials', price: '₦5,000' },
        ],
        advice: `[Demo Mode] Based on your ${tier} lifestyle, we've optimized your ₦${allowance}.`,
        savings: '₦2,000'
      });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 md:ml-64 pb-20 md:pb-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold gradient-text">Budget My Allowee</h2>
        <p className="text-gray-500">Let the agent optimize your student life.</p>
      </header>

      <div className="mb-8 flex gap-2">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${step >= i ? 'gradient-bg' : 'bg-gray-200'}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-xl font-semibold mb-4">How much is your "Allowee" this week?</h3>
            <input
              type="number"
              placeholder="e.g. 20000"
              className="w-full p-4 text-2xl border-2 border-purple-100 rounded-xl focus:border-purple-500 outline-none mb-6"
              value={allowance}
              onChange={(e) => setAllowance(e.target.value)}
            />
            <button
              disabled={!allowance}
              onClick={() => setStep(2)}
              className="w-full gradient-bg py-4 rounded-xl font-bold text-lg disabled:opacity-50"
            >
              Next: Choose Your Vibe
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-xl font-semibold mb-4">Choose your spending cycle vibe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {TIERS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`p-4 border-2 rounded-xl text-left transition-all ${tier === t.id ? 'border-purple-600 bg-purple-50' : 'border-gray-100 hover:border-purple-200'}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${t.color}`}><t.icon size={20} /></div>
                    <span className="font-bold">{t.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">{t.desc}</p>
                  <p className="text-xs font-bold mt-2 text-purple-600">{t.range}</p>
                </button>
              ))}
            </div>
            <button
              disabled={!tier || loading}
              onClick={handleGenerate}
              className="w-full gradient-bg py-4 rounded-xl font-bold text-lg disabled:opacity-50"
            >
              {loading ? 'Analyzing Campus Prices...' : 'Generate My Spend Plan'}
            </button>
          </motion.div>
        )}

        {step === 3 && plan && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="mb-6 border-2 border-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Your Optimal Spend Plan</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-bold">{tier}</span>
                </div>
                <p className="text-gray-600 mb-6 italic">"{plan.advice}"</p>

                <div className="space-y-3 mb-6">
                  {plan.items.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-bold">{item.price}</span>
                    </div>
                  ))}
                  {plan.items.length === 0 && (
                      <p className="text-center text-gray-400 py-4">No matching items found in your school yet.</p>
                  )}
                </div>

                <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex justify-between items-center">
                  <span className="text-green-700 font-medium">Potential Weekly Savings:</span>
                  <span className="text-2xl font-bold text-green-600">{plan.savings}</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border-2 border-purple-600 text-purple-600 py-4 rounded-xl font-bold"
              >
                Re-calculate
              </button>
              <button className="flex-1 gradient-bg py-4 rounded-xl font-bold">
                Share with Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BudgetAgent;
