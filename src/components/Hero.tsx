'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialMediaButtons from './SocialMediaButtons';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const images = [
    {
      src: '/Cakes/cake1.jpg',
      name: 'Classic Vanilla Dream',
      ingredients: 'Vanilla bean, fresh cream, golden layers'
    },
    {
      src: '/Cakes/cake2.jpg',
      name: 'Chocolate Symphony',
      ingredients: 'Dark chocolate, hazelnut, ganache'
    },
    {
      src: '/Cakes/cake3.jpg',
      name: 'Berry Bliss',
      ingredients: 'Mixed berries, white chocolate, cream'
    },
    {
      src: '/Cakes/cake4.jpg',
      name: 'Caramel Delight',
      ingredients: 'Salted caramel, toffee, vanilla'
    },
    {
      src: '/Cakes/cake5.jpg',
      name: 'Red Velvet Romance',
      ingredients: 'Cream cheese, cocoa, vanilla'
    },
    {
      src: '/Cakes/cake6.jpg',
      name: 'Mango Tango',
      ingredients: 'Fresh mango, coconut, passion fruit'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Main Blobs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            
            {/* Additional Small Decorative Elements */}
            <div className="absolute top-20 left-20 w-24 h-24 bg-pink-50 rounded-full mix-blend-multiply filter blur-lg opacity-10 animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-50 rounded-full mix-blend-multiply filter blur-lg opacity-10 animate-blob animation-delay-3000"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-50 rounded-full mix-blend-multiply filter blur-md opacity-10 animate-blob animation-delay-5000"></div>
            
            {/* Floating Dots */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#e84474] rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#e84474] rounded-full opacity-20 animate-float animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#e84474] rounded-full opacity-20 animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#e84474] rounded-full opacity-20 animate-float animation-delay-3000"></div>
          </div>

          {/* Contour Pattern Background */}
          <div className="absolute inset-0 opacity-[0.15]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,200 Q100,170 200,200 T400,200 M0,150 Q100,120 200,150 T400,150 M0,250 Q100,220 200,250 T400,250 M0,100 Q100,70 200,100 T400,100 M0,300 Q100,270 200,300 T400,300 M0,50 Q100,20 200,50 T400,50 M0,350 Q100,320 200,350 T400,350' stroke='%23e84474' fill='none' stroke-width='1.5' opacity='0.6'/%3E%3C/svg%3E")`,
              backgroundSize: '400px 400px'
            }} />
          </div>

          {/* Additional Contour Layer */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,250 Q125,220 250,250 T500,250 M0,200 Q125,170 250,200 T500,200 M0,300 Q125,270 250,300 T500,300 M0,150 Q125,120 250,150 T500,150 M0,350 Q125,320 250,350 T500,350 M0,100 Q125,70 250,100 T500,100 M0,400 Q125,370 250,400 T500,400' stroke='%23e84474' fill='none' stroke-width='1.2' opacity='0.5' transform='rotate(15)'/%3E%3C/svg%3E")`,
              backgroundSize: '500px 500px'
            }} />
          </div>

          {/* Fine Detail Contour Pattern */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,150 Q75,130 150,150 T300,150 M0,120 Q75,100 150,120 T300,120 M0,180 Q75,160 150,180 T300,180 M0,90 Q75,70 150,90 T300,90 M0,210 Q75,190 150,210 T300,210 M0,60 Q75,40 150,60 T300,60 M0,240 Q75,220 150,240 T300,240' stroke='%23e84474' fill='none' stroke-width='0.8' opacity='0.4' transform='rotate(-15)'/%3E%3C/svg%3E")`,
              backgroundSize: '300px 300px'
            }} />
          </div>

          {/* Extra Fine Detail Pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 Q50,85 100,100 T200,100 M0,80 Q50,65 100,80 T200,80 M0,120 Q50,105 100,120 T200,120 M0,60 Q50,45 100,60 T200,60 M0,140 Q50,125 100,140 T200,140' stroke='%23e84474' fill='none' stroke-width='0.5' opacity='0.3' transform='rotate(30)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }} />
          </div>

          {/* Accent Pattern Layer */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,300 Q150,250 300,300 T600,300 M0,200 Q150,150 300,200 T600,200 M0,400 Q150,350 300,400 T600,400' stroke='%23e84474' fill='none' stroke-width='2' opacity='0.2' transform='rotate(-5)'/%3E%3C/svg%3E")`,
              backgroundSize: '600px 600px'
            }} />
          </div>

          {/* Enhanced Gradient Overlay for Contour Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/35"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-50/15 to-transparent"></div>

          {/* Animated Contour Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,300 Q150,200 300,300 T600,300 M0,200 Q150,100 300,200 T600,200 M0,400 Q150,300 300,400 T600,400 M0,100 Q150,0 300,100 T600,100 M0,500 Q150,400 300,500 T600,500' stroke='%23e84474' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,250 Q125,350 250,250 T500,250 M0,150 Q125,250 250,150 T500,150 M0,350 Q125,450 250,350 T500,350 M0,50 Q125,150 250,50 T500,50 M0,450 Q125,550 250,450 T500,450' stroke='%23e84474' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Additional Floating Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-[400px] h-[400px] opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,200 Q100,150 200,200 T400,200 M0,150 Q100,100 200,150 T400,150 M0,250 Q100,200 200,250 T400,250' stroke='%23e84474' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* New Floating Detail Layer */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, -10, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-2/3 left-1/3 w-[300px] h-[300px] opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,150 Q75,100 150,150 T300,150 M0,100 Q75,50 150,100 T300,100 M0,200 Q75,150 150,200 T300,200' stroke='%23e84474' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Top Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -top-10 right-1/4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 left-1/2 w-24 h-24 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          {/* Corner Decorative Elements */}
          <div className="absolute top-8 right-8 flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, backgroundColor: '#e84474' }}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#e84474] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-800 group-hover:text-white transition-colors">Open Daily: 8AM - 10PM</span>
            </motion.div>
            <motion.a
              href="tel:01841941405"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: '#e84474' }}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#e84474] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium text-gray-800 group-hover:text-white transition-colors">01841941405</span>
            </motion.a>
          </div>

          <div className="absolute top-8 left-8 flex flex-col space-y-4">
            <motion.a
              href="https://maps.app.goo.gl/NUQmsFw1Won4dZyy9"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#e84474',
              }}
              className="flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-[#e84474] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-base font-medium text-gray-800 group-hover:text-white transition-colors">Visit Us</span>
            </motion.a>
            <div className="mt-2">
              <SocialMediaButtons />
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="mb-4 relative pl-8"
              >
                <Image
                  src="/logo.png"
                  alt="Éclair Bakery"
                  width={320}
                  height={128}
                  className="relative z-10"
                  priority
                />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-[#e84474]"
                >
                  Slice Of Happiness
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-lg text-gray-600 mb-8"
              >
                Indulge in heavenly delights at Éclair Bakery, where every bite is a taste of perfection.
              </motion.p>
              <Link href="/menu">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#d63d68' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#e84474] text-white px-10 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Menu
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']) }}
              className="relative"
            >
              <div className="relative h-[400px] w-full">
                <motion.div
                  animate={{
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].name}
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                  
                  {/* Cake Description - Adjusted position to overlap with image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -left-32 top-16 flex items-center z-10"
                  >
                    <div className="bg-white/75 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/85 transition-all duration-300">
                      <motion.h3
                        key={currentImageIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-semibold text-gray-800 mb-3"
                      >
                        {images[currentImageIndex].name}
                      </motion.h3>
                      <motion.p
                        key={`ingredients-${currentImageIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-sm text-gray-600/90 leading-relaxed"
                      >
                        {images[currentImageIndex].ingredients}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#e84474]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fresh Daily</p>
                      <p className="text-sm text-gray-500">Baked with love</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/Cakes/cake1.jpg"
                  alt="Our Bakery"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600">
                  Welcome to Éclair Bakery & Pastry, where passion meets perfection in every bite. Since our establishment, we've been crafting delightful pastries and cakes that bring joy to our community.
                </p>
                <p className="text-lg text-gray-600">
                  Our master bakers combine traditional techniques with innovative flavors, ensuring each creation is a masterpiece of taste and presentation. We take pride in using only the finest ingredients and maintaining the highest standards of quality.
                </p>
                <p className="text-lg text-gray-600">
                  At Éclair, we believe in making moments sweeter, one pastry at a time. Whether it's a special celebration or a simple craving, we're here to serve you the very best.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">15 Min Fresh</h3>
                <p className="text-gray-600">Fresh cakes made in just 15 minutes</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Cakes</h3>
                <p className="text-gray-600">Personalized designs for your special occasions</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Printed Cakes</h3>
                <p className="text-gray-600">Photo-perfect edible prints on cakes</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
                <p className="text-gray-600">Premium ingredients and expert craftsmanship</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.a
                    href="https://maps.app.goo.gl/NUQmsFw1Won4dZyy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pink-50/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Visit us at</h3>
                      <p className="text-gray-600">KA/4/1 Jagannathpur</p>
                      <p className="text-gray-600">Bashundhara Road</p>
                    </div>
                  </motion.a>

                  <div className="space-y-4">
                    <motion.a
                      href="tel:01841941405"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pink-50/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600 hover:text-[#e84474] transition-colors">01841941405</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:eclairpastry36@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pink-50/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#e84474]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600 hover:text-[#e84474] transition-colors">eclairpastry36@gmail.com</p>
                      </div>
                    </motion.a>
                  </div>
                </div>

                <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.4241533!3d23.8115308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0x93c6e5809952a84d!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 hover:opacity-90 transition-opacity duration-300"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moving Photo Album */}
      <section className="py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex space-x-4 animate-scroll">
              {[...images, ...images].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[300px] h-[400px] relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.name}</h3>
                      <p className="text-sm">{image.ingredients}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero; 