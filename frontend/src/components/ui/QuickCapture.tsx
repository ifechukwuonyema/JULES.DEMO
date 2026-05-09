'use client';

import React, { useState } from 'react';
import { Plus, X, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickCapture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('EXPENSE');

  const handleSubmit = () => {
    console.log('Logging:', { amount, type });
    setAmount('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 w-72"
          >
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold">Quick Log</h4>
                <button onClick={() => setIsOpen(false)}><X size={20} className="text-gray-400" /></button>
            </div>

            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setType('EXPENSE')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 ${type === 'EXPENSE' ? 'bg-red-100 text-red-600' : 'bg-gray-50 text-gray-400'}`}
                >
                    <ArrowDownCircle size={14} /> Out
                </button>
                <button
                    onClick={() => setType('INCOME')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 ${type === 'INCOME' ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400'}`}
                >
                    <ArrowUpCircle size={14} /> In
                </button>
            </div>

            <input
                type="number"
                autoFocus
                placeholder="₦0.00"
                className="w-full text-3xl font-bold text-center mb-6 outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="w-full gradient-bg py-3 rounded-xl font-bold text-sm shadow-lg shadow-purple-100"
            >
                Log Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full gradient-bg shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95"
      >
        <Plus size={32} />
      </button>
    </div>
  );
};

export default QuickCapture;
