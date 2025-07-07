
import { useState } from 'react';
import { Check, X } from 'lucide-react';

const Bikes = () => {
  const [selectedBike, setSelectedBike] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const bikes = [
    {
      id: 1,
      name: 'Go VV Lite',
      price: '₹45,000',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      specs: {
        topSpeed: '20 km/h',
        range: '50 km',
        batteryType: 'Li-ion 36V 10Ah',
        chargingTime: '4-5 hours',
        frameWeight: '18 kg'
      },
      features: ['LED Headlight', 'Digital Display', 'USB Charging Port'],
      description: 'Perfect for daily commutes and short trips around the city.'
    },
    {
      id: 2,
      name: 'Go VV Urban',
      price: '₹65,000',
      image: 'https://images.unsplash.com/photo-1544191696-15693072b5a5?w=800&h=600&fit=crop',
      specs: {
        topSpeed: '25 km/h',
        range: '75 km',
        batteryType: 'Li-ion 48V 12Ah',
        chargingTime: '5-6 hours',
        frameWeight: '20 kg'
      },
      features: ['GPS Tracking', 'Mobile App', 'Anti-theft Alarm', 'LED Lights'],
      description: 'Advanced features for the modern urban commuter.'
    },
    {
      id: 3,
      name: 'Go VV Plus',
      price: '₹85,000',
      image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop',
      specs: {
        topSpeed: '25 km/h',
        range: '100 km',
        batteryType: 'Li-ion 48V 15Ah',
        chargingTime: '6-7 hours',
        frameWeight: '22 kg'
      },
      features: ['Premium GPS', 'Advanced App Features', 'Anti-theft System', 'Premium LED Package', 'Wireless Charging'],
      description: 'Our flagship model with premium features and maximum range.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-go-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            Our <span className="text-go-green">Electric Bikes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our range of premium electric bicycles designed for every need and budget
          </p>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {bikes.map((bike) => (
              <div key={bike.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-montserrat font-bold text-go-black">{bike.name}</h3>
                    <span className="text-2xl font-bold text-go-green">{bike.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{bike.description}</p>
                  
                  {/* Key Specs */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Top Speed:</span>
                      <span className="font-semibold">{bike.specs.topSpeed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-semibold">{bike.specs.range}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Charging Time:</span>
                      <span className="font-semibold">{bike.specs.chargingTime}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedBike(selectedBike === bike.id ? null : bike.id)}
                      className="flex-1 border-2 border-go-green text-go-green px-4 py-2 rounded-lg font-semibold hover:bg-go-green hover:text-go-black transition-colors"
                    >
                      {selectedBike === bike.id ? 'Hide Details' : 'Learn More'}
                    </button>
                    <button className="flex-1 bg-go-green text-go-black px-4 py-2 rounded-lg font-semibold hover:bg-go-green-dark transition-colors">
                      Pre-Order
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedBike === bike.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3">Complete Specifications</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-600">Battery:</span>
                          <br />
                          <span className="font-semibold">{bike.specs.batteryType}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Frame Weight:</span>
                          <br />
                          <span className="font-semibold">{bike.specs.frameWeight}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-3">Features</h4>
                      <ul className="space-y-1">
                        {bike.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Check size={16} className="text-go-green mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Compare Button */}
          <div className="text-center">
            <button 
              onClick={() => setShowComparison(!showComparison)}
              className="bg-go-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              {showComparison ? 'Hide Comparison' : 'Compare All Models'}
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {showComparison && (
        <section className="py-12 bg-white animate-fade-in">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-montserrat font-bold text-center mb-8">Model Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left font-semibold">Specification</th>
                    {bikes.map((bike) => (
                      <th key={bike.id} className="border border-gray-300 p-4 text-center font-semibold">
                        {bike.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">Price</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center text-go-green font-bold">
                        {bike.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Top Speed</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center">
                        {bike.specs.topSpeed}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">Range</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center">
                        {bike.specs.range}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Battery</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center text-sm">
                        {bike.specs.batteryType}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">Charging Time</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center">
                        {bike.specs.chargingTime}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">Frame Weight</td>
                    {bikes.map((bike) => (
                      <td key={bike.id} className="border border-gray-300 p-4 text-center">
                        {bike.specs.frameWeight}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Bikes;
