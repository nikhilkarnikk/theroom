import React, { useState, useEffect } from 'react';
import { MapPin, Users, Calendar, Compass, ChevronDown } from 'lucide-react';


// Add the LearnMoreSection component here
const LearnMoreSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#faf9f5] pt-1">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-center">
          <img 
            src="/assets/djroom.png" 
            alt="DJ Room"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
      
      {/* Learn More Button */}
      <div className="absolute bottom-4 flex flex-col items-center gap-2">
        <button 
          onClick={scrollToNextSection}
          className="text-black text-xl hover:text-gray-600 transition-colors duration-200 flex flex-col items-center gap-2"
        >
          Learn More
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const checkOrientation = () => {
      setIsVertical(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkOrientation);
    };
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-black">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#faf9f5]/90 backdrop-blur-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <button className="text-gray-600 text-lg hover:text-black transition-colors">
            Features
          </button>
          <div className="text-4xl font-bold">The Room</div>
          <button className="text-gray-600 text-lg hover:text-black transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* How It Works - Check-ins */}
      <LearnMoreSection />



      {/* Features Section */}
<div id="features-section" className="h-[50vh] flex items-center bg-black text-[#faf9f5]">
  <div className="max-w-7xl mx-auto px-4 py-16 w-full">
    <div className={`grid gap-4 w-full ${isVertical ? 'grid-cols-2' : 'grid-cols-4'}`}>
      {/* The Room Box */}
      <div className="aspect-square w-full">
        <img 
          src="/assets/theroombox.png" 
          alt="The Room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Check Ins Box */}
      <div className="bg-black border border-[#faf9f5] aspect-square flex flex-col items-center justify-center p-4">
        <MapPin size={32} className="text-[#faf9f5] mb-3" />
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">Check Ins</h3>
        <p className="text-gray-300 text-sm md:text-base text-center">See where your friends are hanging out and join them with just a tap.</p>
      </div>

      {/* Connect Box */}
      <div className="bg-black border border-[#faf9f5] aspect-square flex flex-col items-center justify-center p-4">
        <Users size={32} className="text-[#faf9f5] mb-3" />
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">Connect</h3>
        <p className="text-gray-300 text-sm md:text-base text-center">Find and connect with mutuals who share your favorite spots and vibes.</p>
      </div>

      {/* Explore Box */}
      <div className="bg-black border border-[#faf9f5] aspect-square flex flex-col items-center justify-center p-4">
        <Compass size={32} className="text-[#faf9f5] mb-3" />
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">Explore</h3>
        <p className="text-gray-300 text-sm md:text-base text-center">Discover new places and experiences in your area.</p>
      </div>
    </div>
  </div>
</div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 pt-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="max-w-xl">
              <h1 className="text-7xl font-bold mb-6">Your Digital Nametag Anywhere, Anytime</h1>
              <p className="text-2xl mb-1 text-gray-600">Connect with friends and discover where the night takes you. See which bars are buzzing and join your mutuals in real-time.</p>
              <div className="flex gap-8 items-start">
                <img 
                  src="/assets/appStore.png" 
                  alt="Download on App Store" 
                  className="h-48 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img 
                  src="/assets/googlePlay.png" 
                  alt="Get it on Google Play" 
                  className="h-56 -mt-4 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="relative h-full flex items-start justify-center -mt-8">
              <img 
                src="/assets/overview1.png" 
                alt="The Room app overview"
                className="w-[120%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      


    <div className="min-h-screen flex items-center bg-black text-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="flex gap-12">
          {/* Left side - Images (3/4 width) */}
          <div className="w-3/4 flex gap-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className="relative group cursor-pointer flex-1"
              >
                <div className="h-[80vh]">
                  <img 
                    src={`/assets/explore${num}.png`} 
                    alt={`Explore ${num}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0000fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Text (1/4 width) */}
          <div className="w-1/4 flex items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Explore Your City</h2>
              <ul className="space-y-6 text-xl text-gray-300">
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Find hotspots in your area
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Search by people and places
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Save your check-ins and favorite spots
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="min-h-screen flex items-center bg-[#faf9f5] text-black">
      <div className="max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="flex gap-12">
          {/* Left side - Text (1/3 width) */}
          <div className="w-1/3 flex items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Connect With Others</h2>
              <ul className="space-y-6 text-xl text-gray-600">
                <li className="flex items-center gap-2 hover:text-black transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Add new connects
                </li>
                <li className="flex items-center gap-2 hover:text-black transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Look through your current connections and find mutuals
                </li>
                <li className="flex items-center gap-2 hover:text-black transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Find common interests and conversation starters
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Images (2/3 width) */}
          <div className="w-2/3 flex gap-6">
            {['connect2', 'connect3'].map((imageName) => (
              <div 
                key={imageName} 
                className="relative group cursor-pointer flex-1"
              >
                <div className="h-[80vh]">
                  <img 
                    src={`/assets/${imageName}.png`} 
                    alt={`Connect ${imageName}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0000fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* How It Works - Rooms */}
    <div className="min-h-screen flex items-center bg-black text-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="flex gap-12">
          {/* Left side - Images (3/4 width) */}
          <div className="w-3/4 flex gap-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className="relative group cursor-pointer flex-1"
              >
                <div className="h-[80vh]">
                  <img 
                    src={`/assets/create${num}.png`} 
                    alt={`Create Room ${num}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0000fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Text (1/4 width) */}
          <div className="w-1/4 flex items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Create Your Space</h2>
              <ul className="space-y-6 text-xl text-gray-300">
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Invite friends to events
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Create rooms and events
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <span className="text-2xl">•</span>
                  Edit your rooms and events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    


      {/* Try The Room Today */}
      <div className="bg-black py-32 text-center">
        <div className="bg-white mx-auto max-w-4xl rounded-2xl p-16">
          <h2 className="text-7xl font-bold mb-8">Try The Room today.</h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">Your next great night out is just a tap away.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-900 transition-colors duration-200"
          >
            Download
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} The Room. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;