'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

const MenuPage = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>('1 KG');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cakeCategories: Record<string, MenuItem[]> = {
    '1 KG': [
      { name: 'Vanilla', price: 1800, image: '/Cakes/cake3.jpg' },
      { name: 'Chocolate', price: 1900, image: '/Cakes/cake3.jpg' },
      { name: 'Black Forest', price: 1900, image: '/Cakes/cake3.jpg' },
      { name: 'White Forest', price: 1900, image: '/Cakes/cake3.jpg' },
      { name: 'Fantasy', price: 1900, image: '/Cakes/cake3.jpg' },
      { name: 'Eclair', price: 2000, image: '/Cakes/cake3.jpg' },
      { name: 'Red Velvet', price: 2100, image: '/Cakes/cake3.jpg' },
      { name: 'Nutella', price: 2400, image: '/Cakes/cake3.jpg' },
      { name: 'Tiramisu cheese', price: 2500, image: '/Cakes/cake3.jpg' },
      { name: 'Melted', price: 2000, image: '/Cakes/cake3.jpg' },
      { name: 'Strawberry', price: 2000, image: '/Cakes/cake3.jpg' },
    ],
    '600 GM': [
      { name: 'Fantasy', price: 1100, image: '/Cakes/cake3.jpg' },
      { name: 'Black Forest', price: 1100, image: '/Cakes/cake3.jpg' },
      { name: 'Eclair', price: 1150, image: '/Cakes/cake3.jpg' },
      { name: 'Melted', price: 1200, image: '/Cakes/cake3.jpg' },
      { name: 'Nutella', price: 1450, image: '/Cakes/cake3.jpg' },
    ],
    '500 GM': [
      { name: 'Vanilla', price: 900, image: '/Cakes/cake3.jpg' },
      { name: 'Chocolate', price: 950, image: '/Cakes/cake3.jpg' },
      { name: 'Strawberry', price: 1000, image: '/Cakes/cake3.jpg' },
      { name: 'Red Velvet', price: 1100, image: '/Cakes/cake3.jpg' },
    ],
    'Medium': [
      { name: 'Vanilla', price: 650, image: '/Cakes/cake3.jpg' },
      { name: 'Chocolate', price: 700, image: '/Cakes/cake3.jpg' },
      { name: 'Black Forest', price: 750, image: '/Cakes/cake3.jpg' },
      { name: 'White Forest', price: 700, image: '/Cakes/cake3.jpg' },
      { name: 'Fantasy', price: 750, image: '/Cakes/cake3.jpg' },
      { name: 'Red Velvet', price: 800, image: '/Cakes/cake3.jpg' },
      { name: 'Eclair', price: 800, image: '/Cakes/cake3.jpg' },
      { name: 'Nutella', price: 850, image: '/Cakes/cake3.jpg' },
      { name: 'Melted', price: 900, image: '/Cakes/cake3.jpg' },
    ],
  };

  const otherCategories: Record<string, MenuItem[]> = {
    'Pastry': [
      { name: 'Vanilla Pastry', price: 110, image: '/Cakes/cake3.jpg' },
      { name: 'Black Forest Pastry', price: 120, image: '/Cakes/cake3.jpg' },
      { name: 'Eclair Chocolate Pastry', price: 130, image: '/Cakes/cake3.jpg' },
      { name: 'Fantasy Pastry', price: 130, image: '/Cakes/cake3.jpg' },
      { name: 'Red Velvet Pastry', price: 140, image: '/Cakes/cake3.jpg' },
      { name: 'Nutella Pastry', price: 170, image: '/Cakes/cake3.jpg' },
      { name: 'Tiramisu Cheese Pastry', price: 220, image: '/Cakes/cake3.jpg' },
    ],
    'Dessert': [
      { name: 'Chocolate Ball', price: 50, image: '/Cakes/cake3.jpg' },
      { name: 'Chocolate Muffin', price: 60, image: '/Cakes/cake3.jpg' },
      { name: 'Donut', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Special Muffin', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Chocolate Mouss', price: 100, image: '/Cakes/cake3.jpg' },
      { name: 'Brownies', price: 120, image: '/Cakes/cake3.jpg' },
      { name: 'Special Mouss', price: 120, image: '/Cakes/cake3.jpg' },
      { name: 'Tiramisu Mouss', price: 140, image: '/Cakes/cake3.jpg' },
      { name: 'Jar Cake', price: 170, image: '/Cakes/cake3.jpg' },
    ],
    'FAST FOOD': [
      { name: 'Chicken Roll', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Pizza Ban', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Chicken Ban', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Irani Roll', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Chicken Patties', price: 80, image: '/Cakes/cake3.jpg' },
      { name: 'Korean Sandwich', price: 100, image: '/Cakes/cake3.jpg' },
      { name: 'Pizza Mini', price: 100, image: '/Cakes/cake3.jpg' },
      { name: 'Sausage Delight', price: 110, image: '/Cakes/cake3.jpg' },
      { name: 'Club Sandwich', price: 150, image: '/Cakes/cake3.jpg' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Our Menu
          </motion.h1>

          {/* Cakes Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-[#e84474] mb-12 text-center"
            >
              Cakes
            </motion.h2>

            {/* Size Selector Dropdown */}
            <div className="relative w-full max-w-md mx-auto mb-12">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{selectedSize || 'Select Cake Size'}</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#e84474]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden z-50"
                  >
                    {Object.keys(cakeCategories).map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-[#e84474] hover:text-white transition-colors duration-200"
                        whileHover={{ backgroundColor: '#e84474', color: 'white' }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cakes Grid */}
            <AnimatePresence mode="wait">
              {selectedSize && (
                <motion.div
                  key={selectedSize}
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {cakeCategories[selectedSize].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-col space-y-3">
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#e84474] transition-colors duration-300">
                            {item.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-[#e84474] font-bold text-2xl">৳{item.price}</span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-[#e84474] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#ff6b6b] transition-colors duration-300"
                            >
                              Order Now
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Categories */}
          {Object.entries(otherCategories).map(([category, items]) => (
            <div key={category} className="max-w-7xl mx-auto mb-20">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-[#e84474] mb-12 text-center"
              >
                {category}
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <span className="text-[#e84474] font-semibold">৳{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}

          {/* Contact Information Section */}
          <div className="max-w-7xl mx-auto mt-32 mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-[#e84474] mb-12 text-center"
            >
              Contact Us
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto text-[#e84474]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Bakery Street
                  <br />
                  Dhaka, Bangladesh
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto text-[#e84474]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +880 1234-567890
                  <br />
                  +880 9876-543210
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto text-[#e84474]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday
                  <br />
                  9:00 AM - 10:00 PM
                </p>
              </motion.div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center space-x-6 mt-12"
            >
              <a
                href="https://www.facebook.com/eclairpastry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e84474] hover:text-[#ff6b6b] transition-colors duration-300"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/eclair_delicacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e84474] hover:text-[#ff6b6b] transition-colors duration-300"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Floating Images */}
          <div className="fixed -z-10 opacity-20">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-20 left-10 w-40 h-40"
            >
              <Image src="/bread-hero.jpg" alt="Floating bread" fill className="rounded-full object-cover" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-60 right-20 w-32 h-32"
            >
              <Image src="/cookies.jpg" alt="Floating cookies" fill className="rounded-full object-cover" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute bottom-40 left-1/4 w-24 h-24"
            >
              <Image src="/cake.jpg" alt="Floating cake" fill className="rounded-full object-cover" />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuPage; 