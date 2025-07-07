
const Technology = () => {
  const technologies = [
    {
      title: 'Smart Battery System',
      description: 'Removable Li-ion battery pack with advanced BMS for optimal performance and safety.',
      features: ['Quick Release Mechanism', 'Smart Charging', 'Temperature Management', 'Long Lifespan'],
      image: 'https://images.unsplash.com/photo-1609285807019-b5fc3c6e8155?w=600&h=400&fit=crop'
    },
    {
      title: 'Efficient Motor',
      description: '250W brushless hub motor delivering smooth, silent, and powerful performance.',
      features: ['Brushless Design', 'Low Maintenance', 'High Efficiency', 'Silent Operation'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop'
    },
    {
      title: 'IoT Connectivity',
      description: 'Stay connected with our advanced IoT features and mobile app integration.',
      features: ['GPS Tracking', 'Anti-theft Alarm', 'Ride Analytics', 'Remote Diagnostics'],
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop'
    },
    {
      title: 'Lightweight Frame',
      description: 'Aircraft-grade aluminum alloy frame combining strength with minimal weight.',
      features: ['Corrosion Resistant', 'Lightweight Design', 'High Strength', 'Modern Geometry'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
    },
    {
      title: 'Advanced Braking',
      description: 'Dual disc brake system with optional regenerative braking for enhanced safety.',
      features: ['Disc Brakes', 'Regenerative System', 'All-Weather Performance', 'Easy Maintenance'],
      image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-go-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            Advanced <span className="text-go-green">Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technology that powers every Go VV electric bicycle
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-6 text-go-black">
              Innovation at Every <span className="text-go-green">Level</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our electric bicycles are engineered with the latest technology to provide an unmatched riding experience. 
              From smart connectivity to efficient power systems, every component is designed for performance and reliability.
            </p>
          </div>

          {/* Technology Cards */}
          <div className="space-y-20">
            {technologies.map((tech, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg hover-scale"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-montserrat font-bold text-go-black">{tech.title}</h3>
                  <p className="text-lg text-gray-600">{tech.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-go-green rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Technical <span className="text-go-green">Specifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Motor', specs: ['250W Brushless Hub Motor', 'Max Torque: 35 Nm', 'Efficiency: >85%', 'Noise Level: <45dB'] },
              { category: 'Battery', specs: ['Li-ion 48V 15Ah', 'Range: Up to 100km', 'Charging: 6-7 hours', 'Lifecycle: 800+ cycles'] },
              { category: 'Frame', specs: ['Aluminum Alloy 6061', 'Weight: 18-22kg', 'Size: Multiple options', 'Warranty: 2 years'] },
              { category: 'Connectivity', specs: ['GPS Tracking', 'Bluetooth 5.0', '4G LTE Module', 'Mobile App Control'] },
              { category: 'Safety', specs: ['LED Lighting System', 'Disc Brakes', 'Anti-theft Alarm', 'Reflective Elements'] },
              { category: 'Display', specs: ['LCD Color Display', 'Speed & Distance', 'Battery Level', 'Navigation Assistance'] }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-montserrat font-bold mb-4 text-go-green">{item.category}</h3>
                <ul className="space-y-2">
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-gray-600 flex items-start">
                      <span className="text-go-green mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-go-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold mb-6">
              Smart <span className="text-go-green">Mobile App</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Control and monitor your Go VV bike with our intuitive mobile application
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '📱', title: 'Remote Control', desc: 'Lock/unlock your bike remotely' },
                { icon: '📍', title: 'GPS Tracking', desc: 'Real-time location tracking' },
                { icon: '📊', title: 'Ride Analytics', desc: 'Track your rides and performance' },
                { icon: '🔧', title: 'Diagnostics', desc: 'Monitor bike health and maintenance' }
              ].map((app, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-400 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-go-green text-go-black px-8 py-3 rounded-full font-semibold hover:bg-go-green-dark transition-colors flex items-center justify-center">
                Download for iOS
              </button>
              <button className="border-2 border-go-green text-go-green px-8 py-3 rounded-full font-semibold hover:bg-go-green hover:text-go-black transition-colors flex items-center justify-center">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
