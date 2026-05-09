'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wallet, PieChart, Users, Store, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-bold text-sm mb-6 border border-purple-100">
              #1 Finance App for Nigerian Students 🇳🇬
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Manage your <span className="gradient-text italic">Allowee</span> <br /> the smart way.
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              Track expenses, optimize your spending with AI, and discover student-friendly prices across Nigerian universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard" className="w-full sm:w-auto gradient-bg px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-purple-200">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link href="/marketplace" className="w-full sm:w-auto border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors">
                Explore Marketplace
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Budget My Allowee</h3>
              <p className="text-gray-500">Our AI agent scans your school's marketplace to build the most efficient spend plan for your budget tier.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Store size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Campus Marketplace</h3>
              <p className="text-gray-500">Real-time prices from cafeterias, bookstores, and salons at UNILAG, CU, UI, and 15+ other schools.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Banking</h3>
              <p className="text-gray-500">Connect your Kuda, GTB, or Zenith account securely to track your student expenses automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What's your spending vibe?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['LAPO Baby', 'Yanga', 'Cool Kids', 'NEPO Babies'].map((tier, i) => (
              <span key={i} className="px-6 py-3 rounded-2xl bg-white border border-gray-200 font-bold text-gray-700 shadow-sm">
                {tier}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Allowee Finance. Built for Nigerian University Students.</p>
      </footer>
    </div>
  );
}
