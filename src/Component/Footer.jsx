import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4"> 
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-8">
        <div>
          <h3 className="text-red-500 font-bold text-sm mb-2">About Ferrari</h3> 
          <p className="text-gray-400 text-xs"> 
            Ferrari is a global icon of speed, luxury, and automotive excellence. Founded by Enzo Ferrari in 1939, the brand is renowned for crafting the most desirable sports cars and for its legendary presence in motorsports.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            With a relentless pursuit of innovation and a commitment to performance, Ferrari continues to define the art of driving for generations.
          </p>
        </div>
        
        <div>
          <h3 className="text-red-500 font-bold text-sm mb-2">Quick Links</h3> 
          <ul className="space-y-1 text-xs">
            <li><a href="/racing" className="hover:text-red-500 transition">Racing</a></li> 
            <li><a href="/sports-cars" className="hover:text-red-500 transition">Sports Cars</a></li>
            <li><a href="/luxury-experience" className="hover:text-red-500 transition">Luxury Experience</a></li>
            <li><a href="/collections" className="hover:text-red-500 transition">Collections</a></li>
            <li><a href="/events" className="hover:text-red-500 transition">Events</a></li>
            <li><a href="/about-us" className="hover:text-red-500 transition">About Us</a></li>
          </ul>
        </div>
 
        <div>
          <h3 className="text-red-500 font-bold text-sm mb-2">Contact Information</h3> 
          <p className="text-gray-400 text-xs">123 Ferrari Drive, Maranello, Italy</p>
          <p className="text-gray-400 text-xs">Email: info@ferrari.com</p>
          <p className="text-gray-400 text-xs">Phone: +39 123 456 789</p>
          
          <div className="mt-4">
            <h4 className="text-white font-semibold text-xs">Customer Support</h4> 
            <p className="text-gray-400 text-xs">Mon - Fri: 9 AM - 6 PM (CET)</p> 
            <p className="text-gray-400 text-xs">Sat - Sun: Closed</p>
          </div>
        </div>
    
        <div>
          <h3 className="text-red-500 font-bold text-sm mb-2">Follow Us</h3>
          <p className="text-gray-400 mb-2 text-xs">Connect with us on social media and stay updated with the latest news, events, and exclusive offers.</p>
          <div className="flex space-x-3">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition text-sm">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition text-sm">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition text-sm">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition text-sm">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-700 pt-2 text-gray-500 text-xs text-center">
        <p>&copy; 2024 Ferrari. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:text-white mx-1 text-xs">Terms & Conditions</a> | 
          <a href="/privacy" className="hover:text-white mx-1 text-xs">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
