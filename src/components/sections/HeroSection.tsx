import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text"
          >
            Revolutionize Hotel Email Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            AI-powered solution to automate reservations, payments, and guest
            communication directly from your inbox
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105">
              Schedule Demo
              <ChevronRightIcon className="h-5 w-5 inline-block ml-2 -mr-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
