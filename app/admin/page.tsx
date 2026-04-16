'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Link, MapPin, User, Users } from 'lucide-react';

export default function AdminPage() {
  const [title, setTitle] = useState('Mr. & Mrs.');
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const generateLink = () => {
    if (!name) return;
    
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const params = new URLSearchParams();
    params.set('u', `${title} ${name}`);
    if (table) params.set('t', table);
    
    const fullUrl = `${baseUrl}/?${params.toString()}`;
    setGeneratedLink(fullUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] p-4 md:p-12 font-sans text-neutral-800">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227] text-white shadow-lg mb-4">
            <Users size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">Invitation Manager</h1>
          <p className="text-neutral-500">Generate personalized wedding links for your guests</p>
        </header>

        <main className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-neutral-200/50 border border-neutral-100">
          <div className="space-y-8">
            {/* Title Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Guest Title</label>
              <select 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-14 px-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-[#C9A227] outline-none transition-all"
              >
                <option>Mr. & Mrs.</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss.</option>
                <option>Family</option>
                <option>Dr.</option>
                <option>Rev.</option>
              </select>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Guest Name(s)</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={20} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe / Perera Family"
                  className="w-full h-14 pl-12 pr-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-[#C9A227] outline-none transition-all"
                />
              </div>
            </div>

            {/* Table Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Table Number (Optional)</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={20} />
                <input 
                  type="text" 
                  value={table}
                  onChange={(e) => setTable(e.target.value)}
                  placeholder="e.g. 5"
                  className="w-full h-14 pl-12 pr-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-[#C9A227] outline-none transition-all"
                />
              </div>
            </div>

            {/* Action */}
            <button 
              onClick={generateLink}
              disabled={!name}
              className="w-full h-16 bg-[#C9A227] text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-[#C9A227]/30 hover:bg-[#b08d20] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
            >
              Generate Personal Link
            </button>
          </div>

          {/* Output */}
          {generatedLink && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-6 bg-neutral-900 rounded-3xl text-white overflow-hidden relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Link size={16} className="text-[#C9A227]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Personal Link Ready</span>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Copy size={20} className="text-[#C9A227]" />
                </button>
              </div>
              <p className="break-all text-sm font-mono opacity-80 mb-2">{generatedLink}</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Preview Detail</p>
                <p className="text-sm">Guest: <span className="text-[#C9A227]">{title} {name}</span></p>
                {table && <p className="text-sm">Table: <span className="text-[#C9A227]">{table}</span></p>}
              </div>
            </motion.div>
          )}
        </main>

        <footer className="mt-12 text-center text-neutral-400 text-xs">
          <p>Links are generated based on the current URL. No database required.</p>
        </footer>
      </div>
    </div>
  );
}
