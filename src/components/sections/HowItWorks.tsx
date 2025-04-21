import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple Integration, Instant Results
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 left-1/2 -ml-2 h-full w-0.5 bg-gray-200" />
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {["Connect Email", "AI Processing", "Automate Workflows"].map(
              (step, idx) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative md:text-center p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex md:block items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-blue-600 rounded-full text-white flex items-center justify-center">
                        <span className="text-xl font-bold">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4 md:ml-0 md:mt-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {idx === 0 &&
                          "Secure connection to your existing email provider"}
                        {idx === 1 &&
                          "Natural language processing extracts key reservation details"}
                        {idx === 2 &&
                          "Automated document generation and payment processing"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
