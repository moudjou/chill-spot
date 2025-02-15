import React from 'react';
import { Calendar, Trophy, Users, Star } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "League of Legends Tournament",
      date: "March 15, 2024",
      time: "6:00 PM",
      prize: "10,000 DA Prize Pool",
      type: "Tournament",
      icon: <Trophy className="h-6 w-6" />
    },
    {
      title: "Community Game Night",
      date: "March 20, 2024",
      time: "7:00 PM",
      description: "Mario Kart & Super Smash Bros",
      type: "Community",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Valorant Championship",
      date: "April 1, 2024",
      time: "2:00 PM",
      prize: "15,000 DA Prize Pool",
      type: "Tournament",
      icon: <Trophy className="h-6 w-6" />
    },
    {
      title: "Retro Gaming Night",
      date: "April 5, 2024",
      time: "5:00 PM",
      description: "Classic Console Games",
      type: "Special",
      icon: <Star className="h-6 w-6" />
    }
  ];
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
     
    }
  };


  return (
    <section id="events" className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neon-yellow mb-12 titles">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              className="bg-cyber-dark rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-yellow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                </div>
                <div className="text-neon-pink">
                  {event.icon}
                </div>
              </div>

              <div className="space-y-2">
                {event.prize && (
                  <p className="text-neon-yellow font-semibold">{event.prize}</p>
                )}
                {event.description && (
                  <p className="text-gray-400">{event.description}</p>
                )}
              </div>

              <button onClick={()=> scrollToSection('contact')} className="mt-4 w-full bg-cyber-darker hover:bg-neon-yellow hover:text-cyber-black text-white py-2 rounded-lg transition-colors border border-neon-cyan/50 hover:border-neon-yellow font-bold">
                Register Now
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Events;
