import React from 'react';
import TrackingForm from '@/components/TrackingForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header/>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <TrackingForm />
      </div>
      <Footer />
    </main>
  );
}
