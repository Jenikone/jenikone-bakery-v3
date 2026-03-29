import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-amber-900 to-amber-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#E0DCAA' }}>
            Jenikone Bakery
            <span className="text-3xl block mt-2" style={{ color: '#CCE3C2' }}>
              じゃニコーンベーカリー
            </span>
          </h1>
          <p className="text-lg opacity-90">
            🍵 Traditional Japanese Bakery Aesthetic ✨
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 flex-wrap">
          <a
            href="/"
            className="px-6 py-2 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: '#8B5633',
              color: '#E0DCAA',
            }}
          >
            Home
          </a>
          <a
            href="/meet-baker"
            className="px-6 py-2 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: '#A37B47',
              color: '#E0DCAA',
            }}
          >
            Meet the Baker
          </a>
          <a
            href="/order"
            className="px-6 py-2 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: '#9DB496',
              color: '#1a1a1a',
            }}
          >
            Order
          </a>
          <a
            href="/limited-shelf"
            className="px-6 py-2 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: '#CCE3C2',
              color: '#1a1a1a',
            }}
          >
            Limited Shelf
          </a>
        </nav>
      </div>
    </header>
  );
}