'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CustomizeCakes = () => {
  const customOptions = [
    {
      title: "Choose Your Flavor",
      description: "Select from our premium flavors like Vanilla, Chocolate, Red Velvet, and more",
      image: "/Cakes/cake3.jpg",
    },
    {
      title: "Pick Your Size",
      description: "Available in various sizes from 1KG to Medium to fit your celebration",
      image: "/Cakes/cake3.jpg",
    },
    {
      title: "Design Your Cake",
      description: "Add your personal touch with custom decorations, toppings, and messages",
      image: "/Cakes/cake3.jpg",
    },
    {
      title: "Special Occasions",
      description: "Perfect for birthdays, weddings, anniversaries, and special events",
      image: "/Cakes/cake3.jpg",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Customize Your Perfect Cake
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Create your dream cake with our customization options. Every cake is baked with love and crafted to your specifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#e84474] transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizeCakes; 