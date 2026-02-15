import { Link } from "react-router-dom";
import { ArrowRight, Camera, BarChart3, Users, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-20">

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-tight">
              PashuLens
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Intelligent AI-powered breed detection system designed specially
              for Indian cattle and buffaloes. Upload a photo and get instant
              breed insights with high accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-2xl shadow-lg transition-all duration-300"
              >
                <Link to="/breed-detection" className="flex items-center">
                  <Camera className="mr-2" size={20} />
                  Detect Breed
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* IMAGE SIDE - THEMED OVERLAY */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-md h-[350px]">
              {/* Green overlay tint */}
              <div className="absolute inset-0 bg-green-700/30 mix-blend-multiply z-10"></div>

              <ImageWithFallback
                src="/photo2.jpg"
                alt="Indian cattle grazing"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-green-700 mb-14">
            Why Choose PashuLens?
          </h2><br/><br />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera size={24} />,
                title: "Instant Detection",
                desc: "Upload an image and get breed identification in seconds.",
              },
              {
                icon: <BarChart3 size={24} />,
                title: "High Accuracy",
                desc: "Advanced AI trained on Indian cattle datasets.",
              },
              {
                icon: <Users size={24} />,
                title: "Farmer Friendly",
                desc: "Simple interface built for rural usability.",
              },
              {
                icon: <Shield size={24} />,
                title: "Secure Platform",
                desc: "Your data remains protected and private.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green-600 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - FIXED VISIBILITY */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-700 text-amber-200 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-amber-100">
            Ready to Identify Your Livestock?
          </h2>

          <p className="text-md mb-6 text-green-100">
            Join thousands of farmers using smart AI detection.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-200 text-lg px-8 py-6 rounded-2xl shadow-lg"
          >
            <Link to="/breed-detection">Start Detection</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}