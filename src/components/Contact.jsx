import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Twitch } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neon-yellow mb-12 titles ">
          Find Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <div className="h-[400px] rounded-xl overflow-hidden border border-neon-cyan/20">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744947!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834456695!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              
              loading="lazy"
            ></iframe>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 titles">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-neon-yellow mt-1" />
                  <div>
                    <p className="text-white   "> oxyl avenue</p>
                    <p className="text-gray-400   ">Algeria, Algiers 16094</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-neon-yellow" />
                  <p className="text-white ">+213 661 123 456</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-neon-yellow" />
                  <p className="text-white   ">contact@chillspot.com</p>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-neon-yellow mt-1" />
                  <div>
                    <p className="text-white   ">Monday - Friday: 10AM - 12AM</p>
                    <p className="text-white   ">Saturday - Sunday: 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 ">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors">
                  <Twitch className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;