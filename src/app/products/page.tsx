'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Custom Fit Skischoen',
      description: 'Professioneel aangepaste skischoen voor optimaal comfort en prestaties',
      price: '€299,99',
      image: '/images/ski-boot.jpg'
    },
    {
      id: 2,
      name: 'Thermaguard Liner',
      description: 'Verwarmde binnenschoen voor maximaal comfort tijdens koude dagen',
      price: '€149,99',
      image: '/images/ski-boot.jpg'
    },
    {
      id: 3,
      name: 'Performance Pack',
      description: 'Complete set met aangepaste skischoen en verwarmde binnenschoen',
      price: '€399,99',
      image: '/images/ski-boot.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header met navigatie terug */}
      <header className="bg-slate-800 text-white p-4">
        <nav className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="text-xl md:text-2xl font-bold">Thermaguard</Link>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/products" className="hover:text-gray-300">Producten</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Onze Producten</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                  <span className="text-xl md:text-2xl font-bold text-primary">{product.price}</span>
                  <Link 
                    href="https://shop.thermaguard.nl"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition w-full md:w-auto text-center"
                  >
                    Meer Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 