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
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Thermaguard</Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/products" className="hover:text-gray-300">Producten</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Onze Producten</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Link 
                    href="https://shop.thermaguard.nl"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
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