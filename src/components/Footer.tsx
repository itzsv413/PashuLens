import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">PashuLens</span>
            </div>
            <p className="text-gray-300 text-sm">
              Intelligent breed detection for Indian cattle and buffaloes, 
              empowering farmers with AI-powered livestock management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/breed-detection" className="text-gray-300 hover:text-green-400 transition-colors">Breed Detection</a></li>
              {/* <li><a href="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Breed Identification</li>
              <li className="text-gray-300">Farmer Support</li>
              <li className="text-gray-300">Record Management</li>
              <li className="text-gray-300">Analytics & Insights</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">info@pashulens.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>&copy; 2024 PashuLens. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>for Indian farmers. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}