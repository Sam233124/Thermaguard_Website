'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackFormSubmit } from '@/utils/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    trackFormSubmit('Contact Form');
    // Hier komt de logica voor het versturen van het formulier
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Informatie */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">ThermaGuard - Experts in Skischoen Warmhouden</h2>
              <div className="space-y-4">
                <p>
                  <strong>Adres:</strong><br />
                  Rachelsmolen 1<br />
                  5612 MA Eindhoven
                </p>
                <p className="text-gray-600">
                  Email: thermaguardnl@gmail.com
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Heeft u vragen over onze waterdichte overschoenen voor skischoenen of warmte-isolerende hoes voor skischoenen? 
                  Neem contact met ons op voor tips voor warme voeten tijdens skiën en de beste oplossing voor koude voeten skiën.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Formulier */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">Stuur ons een bericht</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 