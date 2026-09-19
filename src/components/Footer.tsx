import React from 'react';
import { Globe, MessageCircle, Camera, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Lumina Cards</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Crafting perfect invitations and custom cards for all your special occasions. Elegance, quality, and creativity in every design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Messages">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Photos">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Birthday Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Invitations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reception Invites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">House Warming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Designs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>123 Celebration Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>hello@luminacards.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {currentYear} Lumina Cards. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
