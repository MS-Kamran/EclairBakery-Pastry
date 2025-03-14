'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CakeGallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    // For now, we'll hardcode the images from the Cakes folder
    setImages([
      '/Cakes/cake1.jpg',
      '/Cakes/cake2.jpg',
      '/Cakes/cake3.jpg',
      '/Cakes/cake4.jpg',
      '/Cakes/cake5.jpg',
      '/Cakes/cake6.jpg',
    ]);
  }, []);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signature Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each cake is a masterpiece, crafted with love and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={image}
                  alt={`Cake ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Signature Cake {index + 1}
                </h3>
                <p className="text-gray-600">
                  Handcrafted with premium ingredients
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeGallery; 