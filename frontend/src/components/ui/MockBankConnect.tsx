'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '../ui/Card';
import { Landmark, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const MockBankConnect = ({ onConnect }: { onConnect: () => void }) => {
  const [step, setStep] = useState(1);
  const [selectedBank, setSelectedBank] = useState('');

  const BANKS = [
    { name: 'Kuda Bank', logo: 'K' },
    { name: 'GTBank', logo: 'GT' },
    { name: 'Zenith Bank', logo: 'Z' },
    { name: 'Access Bank', logo: 'A' },
    { name: 'Moniepoint', logo: 'M' },
    { name: 'Opay', logo: 'O' },
  ];

  const handleConnect = () => {
    setStep(3);
    setTimeout(onConnect, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="gradient-bg p-6 text-center">
            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                <Lock size={20} /> Secure Bank Link
            </h3>
            <p className="text-white/80 text-sm mt-1">Powered by Allowee x Mono</p>
        </div>

        <CardContent className="p-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-gray-600 mb-6 text-center">Select your bank to securely sync your student account transactions.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {BANKS.map(bank => (
                        <button
                            key={bank.name}
                            onClick={() => { setSelectedBank(bank.name); setStep(2); }}
                            className="p-4 border border-gray-100 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all flex flex-col items-center gap-2"
                        >
                            <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">{bank.logo}</div>
                            <span className="text-xs font-bold">{bank.name}</span>
                        </button>
                    ))}
                </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">{selectedBank.charAt(0)}</div>
                    <span className="font-bold">{selectedBank}</span>
                    <button onClick={() => setStep(1)} className="ml-auto text-xs text-purple-600 font-bold">Change</button>
                </div>
                <div className="space-y-4 mb-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase">Phone Number / Email</label>
                        <input type="text" className="w-full p-3 bg-gray-50 border-0 rounded-lg mt-1 outline-none focus:ring-2 ring-purple-500" placeholder="08012345678" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase">Online Banking Password</label>
                        <input type="password" className="w-full p-3 bg-gray-50 border-0 rounded-lg mt-1 outline-none focus:ring-2 ring-purple-500" placeholder="••••••••" />
                    </div>
                </div>
                <button
                    onClick={handleConnect}
                    className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                    Link Account <ArrowRight size={20} />
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-4">Your credentials are encrypted and never stored by Allowee.</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="py-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                <p className="text-gray-500">Your {selectedBank} account is now linked to Allowee.</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MockBankConnect;
