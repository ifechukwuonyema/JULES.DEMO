'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const Onboarding = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeen) {
      setShow(true);
    }
  }, []);

  const close = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden"
          >
            <div className="gradient-bg p-8 text-center text-white relative">
                <button onClick={close} className="absolute top-4 right-4 text-white/60 hover:text-white"><X size={20}/></button>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome to Allowee!</h3>
                <p className="text-white/80 text-sm">Your financial companion for university life.</p>
            </div>
            <div className="p-8 space-y-6">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">1</div>
                    <p className="text-sm text-gray-600">Track every kobo of your allowance automatically or manually.</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">2</div>
                    <p className="text-sm text-gray-600">Use the <strong>Budget Agent</strong> to find the best student prices on campus.</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">3</div>
                    <p className="text-sm text-gray-600">Compete on the leaderboard for the most efficient budget plan!</p>
                </div>
                <button
                    onClick={close}
                    className="w-full gradient-bg py-4 rounded-xl font-bold text-white shadow-lg mt-4"
                >
                    Got it, let's go!
                </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Onboarding;
