'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppLock = ({ children }: { children: React.ReactNode }) => {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  // In a real app, this would check against a hashed value in local storage or backend
  const CORRECT_PIN = "1234";

  const handleUnlock = () => {
    if (pin === CORRECT_PIN) {
      setIsLocked(false);
      setError(false);
    } else {
      setPin('');
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
        handleUnlock();
    }
  }, [pin]);

  if (!isLocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-8 font-sans">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
            scale: 1,
            opacity: 1,
            x: error ? [0, -10, 10, -10, 10, 0] : 0
        }}
        className="text-center w-full max-w-xs"
      >
        <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Lock size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Allowee Secure</h2>
        <p className="text-gray-500 mb-12">Protecting your financial privacy</p>

        <div className="flex gap-4 justify-center mb-12">
            {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className={`h-4 w-4 rounded-full border-2 transition-all ${pin.length > i ? 'bg-purple-600 border-purple-600' : 'bg-transparent border-gray-200'}`} />
            ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8 place-items-center">
            {[1,2,3,4,5,6,7,8,9].map(num => (
                <button
                    key={num}
                    onClick={() => pin.length < 4 && setPin(pin + num)}
                    className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center text-xl font-bold hover:bg-gray-100 active:scale-90 transition-all focus:ring-2 ring-purple-200 outline-none"
                >
                    {num}
                </button>
            ))}
            <div />
            <button
                onClick={() => pin.length < 4 && setPin(pin + 0)}
                className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center text-xl font-bold hover:bg-gray-100 active:scale-90 transition-all focus:ring-2 ring-purple-200 outline-none"
            >
                0
            </button>
            <button
                onClick={() => setPin('')}
                className="h-16 w-16 rounded-full flex items-center justify-center text-xs font-bold text-gray-400 hover:text-red-500"
            >
                CLR
            </button>
        </div>

        <button className="mt-8 flex items-center gap-2 mx-auto text-gray-400 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg">
            <Fingerprint size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Use Face ID</span>
        </button>
      </motion.div>
    </div>
  );
};

export default AppLock;
