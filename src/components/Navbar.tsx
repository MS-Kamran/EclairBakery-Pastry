'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY, isScrollingUp } = useScrollAnimation();
  const { scrollYProgress } = useScroll();

  const backdropBlur = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['blur(0px)', 'blur(8px)']
  );

  const background = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.7)']
  );

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Menu', href: '/menu' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        backgroundColor: background,
      }}
      className={`fixed w-full z-50 transition-transform duration-300 ${
        !isScrollingUp && scrollY > 50 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Éclair Bakery"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-white hover:bg-[#e84474] transition-all duration-300 px-6 py-3 text-lg font-medium rounded-full backdrop-blur-md bg-white/80 shadow-lg hover:shadow-xl"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#e84474] p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          },
          open: {
            opacity: 1,
            height: 'auto',
            transition: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          },
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navItems.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                closed: { opacity: 0, x: -20 },
                open: { opacity: 1, x: 0 },
              }}
            >
              <Link
                href={item.href}
                className="text-gray-800 hover:text-[#e84474] block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 