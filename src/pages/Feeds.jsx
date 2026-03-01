import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';

const Feeds = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-purple-800 py-20 px-4 pb-10 md:pt-25">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Feeds</h1>
          <p className="text-xl text-white/90">
            Stay updated with our latest content and resources
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="text-6xl mb-4">📰</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">COMING SOON!</h2>
            <p className="text-gray-600">We're working on bringing you the latest feeds. Stay tuned!</p>
          </div>
        </div>
      </div>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Feeds;
