'use client';

import { motion } from 'framer-motion';

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,250 Q125,220 250,250 T500,250 M0,200 Q125,170 250,200 T500,200 M0,300 Q125,270 250,300 T500,300 M0,150 Q125,120 250,150 T500,150 M0,350 Q125,320 250,350 T500,350' stroke='%23e84474' fill='none' stroke-width='1.2' opacity='0.5' transform='rotate(15)'/%3E%3C/svg%3E")`,
          backgroundSize: '500px 500px'
        }} />
      </div>

      {/* Fine Detail Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,150 Q75,130 150,150 T300,150 M0,120 Q75,100 150,120 T300,120 M0,180 Q75,160 150,180 T300,180' stroke='%23e84474' fill='none' stroke-width='0.8' opacity='0.4' transform='rotate(-15)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px'
        }} />
      </div>

      {/* Gradient Overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/35"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-50/15 to-transparent"></div>
      </motion.div>
    </div>
  );
} 