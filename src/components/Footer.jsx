import React, { useState } from 'react';


const Footer = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
    
    if (submitted) {
      setError({});
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = {};
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      errors.email = "Please enter a valid email address";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", form);
      
      setForm({ email: "" });
      setSubmitted(false);
    }
  };
  const partners = [
    'NVIDIA', 'AMD', 'Intel', 'Logitech', 'Razer', 'HyperX'
  ];

  return (
    <footer className="bg-cyber-black pt-12 pb-6">
      <div className="container mx-auto px-4">
      
        <div className="mb-12">
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-6  ">
            Our Gaming Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <span
               
                className="text-gray-500 font-semibold text-lg hover:text-[#FFF700] transition-colors cursor-pointer font-mono"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <img 
                  src="/logo.png" 
                  className="w-40" 
                  alt="ChillSpot Logo"
                 />
             </div>

          </div>
            <p className="text-gray-400  ">
              Your premium destination for gaming and esports in Algeria.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFF700] font-bold mb-4 text-center  ">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#services" className="text-gray-400 hover:text-[#FFF700] transition-colors  ">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#FFF700] transition-colors  ">Pricing</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-[#FFF700] transition-colors  ">Events</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FFF700] transition-colors  ">Contact</a></li>
            </ul>
          </div>

          <div id="newsletter">
            <h4 className="text-[#FFF700] font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 ">Subscribe to get updates about events and promotions.</p>
            <form onSubmit={handleSubmit}>
                <div className="flex">
              <input
                type="email" id='email' name='email' value={form.email} onChange={handleChange}
                placeholder="Enter your email"
                className="bg-cyber-darker text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FFF700] border border-[#FFF700]/20 "
                />
                {submitted && error.email && <p className="text-red-500 text-sm">{error.email}</p>}
              <button  type='submit' className="bg-[#FFF700] text-cyber-black px-4 py-2 rounded-r-lg hover:bg-[#070172] hover:text-[#FFF700] transition-colors font-bold ">
                Subscribe
                </button>
                </div>
            </form>
           
            
          </div>
        </div>

       
        <div className="border-t border-[#FFF700]/10 pt-6">
          <p className="text-center text-gray-500 ">
            © {new Date().getFullYear()} Chill Spot 2077. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;