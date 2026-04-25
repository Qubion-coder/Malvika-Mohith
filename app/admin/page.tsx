'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Link as LinkIcon, Sparkles, User, Settings } from 'lucide-react';

export default function AdminPage() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('Mr');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const titles = ['Mr', 'Mrs', 'Miss', 'Family', 'Mr & Mrs', 'Dr', 'Prof'];

  const generateLink = () => {
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    if (name) params.set('to', name);
    if (title) params.set('t', title);
    
    const url = `${baseUrl}?${params.toString()}`;
    setGeneratedLink(url);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f110e] text-white selection:bg-primary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Link Generator
          </h1>
          <p className="text-white/60 text-center max-w-md">
            Create personalized invitation links for your guests. Choose their title and enter their name.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Salutation
                </label>
                <div className="relative">
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                  >
                    {titles.map((t) => (
                      <option key={t} value={t} className="bg-[#1a1c1a]">
                        {t}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Guest Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <button
                onClick={generateLink}
                disabled={!name}
                className="w-full group relative overflow-hidden rounded-xl bg-primary px-6 py-4 font-bold text-[#0f110e] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Generate Invitation Link
                </span>
              </button>
            </div>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            {generatedLink ? (
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-xl h-full flex flex-col justify-between border-dashed">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Your Personalized Link</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/60 border border-white/5 break-all text-sm font-mono text-white/80 leading-relaxed">
                    {generatedLink}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 text-primary" />
                        <span className="text-primary">Copy Link</span>
                      </>
                    )}
                  </button>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/40 italic leading-relaxed">
                    Preview: To {title} {name}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl h-full flex flex-col items-center justify-center text-center opacity-50 grayscale">
                <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-6">
                  <LinkIcon className="w-6 h-6 text-white/20" />
                </div>
                <p className="text-sm">Link will appear here after generation</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span>Confidential Admin Access</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Secure Generator</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
