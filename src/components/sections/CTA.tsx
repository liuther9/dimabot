import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Hotel Operations?
          </h2>
          <p className="mt-4 text-lg text-blue-50 max-w-2xl mx-auto">
            Join hundreds of hotels already automating their reservation
            management and guest communication
          </p>
          <div className="mt-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
