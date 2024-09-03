import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Our Mission Section */}
      <section className="py-16 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="md:text-5xl text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We aim to revolutionize the industry with innovative solutions that
            empower our customers to achieve unprecedented success.
          </motion.p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="md:text-5xl text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <motion.div
              className="team-member bg-gray-50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://i.imgur.com/lMyULeZ.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="md:text-2xl text-xl font-semibold mb-2">
                John Doe
              </h3>
              <p className="text-gray-500 mb-4">CEO</p>
              <p className="text-gray-600">
                John leads our company with vision and determination.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="team-member bg-gray-50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://i.imgur.com/fJO9x4d.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-500 mb-4">CTO</p>
              <p className="text-gray-600">
                Jane is the tech brain behind our innovations.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="team-member bg-gray-50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <img
                src="https://i.imgur.com/IGyOoVg.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Sarah Brown</h3>
              <p className="text-gray-500 mb-4">COO</p>
              <p className="text-gray-600">
                Sarah ensures our operations run smoothly every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="md:text-5xl text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What began as a small startup has now blossomed into a leading
            company, driven by our unwavering passion, innovation, and a
            commitment to our clients.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
