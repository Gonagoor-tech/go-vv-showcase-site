
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bikeModels = [
    {
      name: 'Go VV Lite',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      price: '₹45,000',
      range: '50km'
    },
    {
      name: 'Go VV Urban',
      image: 'https://images.unsplash.com/photo-1544191696-15693072b5a5?w=800&h=600&fit=crop',
      price: '₹65,000',
      range: '75km'
    },
    {
      name: 'Go VV Plus',
      image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop',
      price: '₹85,000',
      range: '100km'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bikeModels.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-go-black via-gray-900 to-go-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
            Go Further.
            <br />
            Go <span className="text-gradient">Freely</span>.
            <br />
            Go <span className="text-go-green">VV</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Premium electric bicycles designed for India's urban mobility revolution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/bikes" 
              className="bg-go-green text-go-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-go-green-dark transition-all duration-300 hover-scale flex items-center justify-center gap-2"
            >
              Explore Our Bikes <ArrowRight size={20} />
            </Link>
            <button className="border-2 border-go-green text-go-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-go-green hover:text-go-black transition-all duration-300 hover-scale">
              Pre-Order Now
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Why Choose <span className="text-go-green">Go VV</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Max Speed', value: '25 km/h', icon: '⚡' },
              { title: 'Battery Range', value: 'Up to 100km', icon: '🔋' },
              { title: 'GPS Tracking', value: 'Smart Location', icon: '📍' },
              { title: 'Mobile App', value: 'IoT Connected', icon: '📱' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover-scale">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-montserrat font-bold mb-2 text-go-black">{feature.value}</h3>
                <p className="text-gray-600">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Our <span className="text-go-green">Bike Models</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bikeModels.map((bike, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl p-8 mx-4 shadow-lg">
                      <img 
                        src={bike.image} 
                        alt={bike.name}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                      />
                      <div className="text-center">
                        <h3 className="text-2xl font-montserrat font-bold mb-2">{bike.name}</h3>
                        <p className="text-go-green text-xl font-semibold mb-2">{bike.price}</p>
                        <p className="text-gray-600 mb-4">Range: {bike.range}</p>
                        <Link 
                          to="/bikes"
                          className="inline-block bg-go-green text-go-black px-6 py-2 rounded-full font-semibold hover:bg-go-green-dark transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {bikeModels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-go-green' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-go-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Ready to <span className="text-go-green">Transform</span> Your Commute?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of riders who have already made the switch to smart, sustainable urban mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/bikes"
              className="bg-go-green text-go-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-go-green-dark transition-all duration-300 hover-scale"
            >
              View All Models
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-go-green text-go-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-go-green hover:text-go-black transition-all duration-300 hover-scale"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
