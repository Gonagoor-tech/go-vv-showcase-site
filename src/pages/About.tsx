
const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-go-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            About <span className="text-go-green">Go VV</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering India's electric mobility revolution with innovative, sustainable, and smart transportation solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" 
                alt="Mission"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-4 text-go-black">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  To revolutionize urban mobility in India by providing premium, eco-friendly electric bicycles 
                  that combine cutting-edge technology with Indian engineering excellence. We aim to make sustainable 
                  transportation accessible, smart, and stylish for every Indian commuter.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-4 text-go-black">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  To become India's leading electric bicycle brand by 2030, creating a cleaner, smarter future 
                  where every urban journey is powered by innovation and sustainability. We envision cities 
                  where Go VV bikes are the preferred choice for conscious commuters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-6 text-go-black">
              Our <span className="text-go-green">Story</span>
            </h2>
            <p className="text-lg text-gray-600">
              Born from the vision of creating India's next-generation e-mobility company
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold text-go-black">Building India's E-Mobility Future</h3>
              <p className="text-gray-600">
                Go VV was founded in 2023 with a simple yet ambitious goal: to transform how Indians commute in urban areas. 
                Recognizing the growing need for sustainable transportation solutions in India's rapidly expanding cities, 
                our team of engineers and designers set out to create electric bicycles that would meet the unique needs of Indian riders.
              </p>
              <p className="text-gray-600">
                Our journey began in Bengaluru, India's Silicon Valley, where we assembled a team of passionate engineers, 
                designers, and mobility experts. Drawing inspiration from global best practices while keeping Indian roads, 
                weather, and riding conditions at the center of our design philosophy.
              </p>
              <p className="text-gray-600">
                Today, Go VV stands as a testament to Indian innovation, combining advanced technology with practical design 
                to create electric bicycles that are not just modes of transport, but companions for the modern Indian commuter.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop" 
                alt="Story"
                className="w-full h-96 object-cover rounded-2xl shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Our <span className="text-go-green">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-go-green hidden md:block"></div>
              
              {[
                {
                  year: '2023',
                  title: 'Company Founded',
                  description: 'Go VV was established with a vision to revolutionize urban mobility in India.',
                  side: 'left'
                },
                {
                  year: '2023',
                  title: 'Product Development',
                  description: 'Intensive R&D phase focusing on Indian road conditions and user requirements.',
                  side: 'right'
                },
                {
                  year: '2024',
                  title: 'Prototype Testing',
                  description: 'Extensive testing of our first prototypes across different Indian cities.',
                  side: 'left'
                },
                {
                  year: '2024',
                  title: 'Pre-Launch Phase',
                  description: 'Preparing for market launch with our three flagship models.',
                  side: 'right'
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${milestone.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-5/12 ${milestone.side === 'right' ? 'md:text-right' : ''}`}>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="text-go-green font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-montserrat font-bold mb-2 text-go-black">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-go-green rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Meet Our <span className="text-go-green">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Arjun Patel',
                role: 'Founder & CEO',
                bio: 'Former automotive engineer with 15+ years in electric vehicle technology.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
              },
              {
                name: 'Priya Sharma',
                role: 'CTO',
                bio: 'IoT and mobility expert, leading our technology and innovation initiatives.',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b84b4e4b?w=400&h=400&fit=crop&crop=face'
              },
              {
                name: 'Rahul Kumar',
                role: 'Head of Design',
                bio: 'Award-winning designer focused on creating beautiful and functional products.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover-scale">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-montserrat font-bold mb-2 text-go-black">{member.name}</h3>
                <p className="text-go-green font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-go-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16">
            Our <span className="text-go-green">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌱', title: 'Sustainability', desc: 'Committed to eco-friendly transportation solutions' },
              { icon: '💡', title: 'Innovation', desc: 'Continuous innovation in electric mobility technology' },
              { icon: '🏆', title: 'Quality', desc: 'Uncompromising quality in every product we create' },
              { icon: '🤝', title: 'Community', desc: 'Building a community of conscious commuters' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-montserrat font-bold mb-3 text-go-green">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
