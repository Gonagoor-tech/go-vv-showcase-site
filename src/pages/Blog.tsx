
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Benefits of Using an E-Bike in Indian Cities',
      excerpt: 'Discover how electric bicycles are transforming urban commuting in India with these key advantages.',
      author: 'Priya Sharma',
      date: 'December 15, 2024',
      readTime: '5 min read',
      tags: ['Commuting', 'Benefits', 'Urban Mobility'],
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=400&fit=crop',
      content: `
        Electric bicycles are revolutionizing the way Indians commute in urban areas. Here are the top 5 benefits:

        1. **Cost-Effective Transportation**: Save thousands on fuel costs annually
        2. **Beat Traffic Congestion**: Navigate through traffic with ease
        3. **Zero Emissions**: Contribute to cleaner air in our cities
        4. **Health Benefits**: Get exercise while commuting
        5. **Parking Convenience**: No more searching for parking spots

        The adoption of e-bikes in Indian cities has grown by 200% in the last two years, making them the smart choice for modern commuters.
      `
    },
    {
      id: 2,
      title: 'The Future of Urban Mobility in 2025',
      excerpt: 'Exploring emerging trends and technologies that will shape how we move around cities in the coming year.',
      author: 'Arjun Patel',
      date: 'December 10, 2024',
      readTime: '7 min read',
      tags: ['Future Tech', 'Smart Cities', 'Mobility'],
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=400&fit=crop',
      content: `
        As we approach 2025, urban mobility is undergoing a dramatic transformation. Several key trends are emerging:

        **Connected Infrastructure**: Smart traffic lights and IoT-enabled transportation networks are creating more efficient urban mobility systems.

        **Micro-Mobility Growth**: E-bikes, e-scooters, and other micro-mobility solutions are becoming the preferred choice for first and last-mile connectivity.

        **Integrated Mobility Platforms**: Apps that combine multiple transportation modes are making it easier to plan and execute multimodal journeys.

        **Sustainable Solutions**: Cities are prioritizing green transportation options to meet their carbon neutrality goals.

        The future of urban mobility is electric, connected, and sustainable.
      `
    },
    {
      id: 3,
      title: 'How Smart Tech is Transforming Commuting',
      excerpt: 'From GPS tracking to mobile app integration, discover how technology is making commuting smarter and safer.',
      author: 'Rahul Kumar',
      date: 'December 5, 2024',
      readTime: '6 min read',
      tags: ['Technology', 'Smart Features', 'IoT'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
      content: `
        Smart technology is revolutionizing the commuting experience in ways we couldn't imagine just a few years ago:

        **GPS and Navigation**: Real-time route optimization helps riders avoid traffic and find the fastest paths to their destinations.

        **Mobile App Integration**: Comprehensive apps provide ride analytics, battery monitoring, and remote bike controls.

        **Anti-Theft Protection**: Advanced alarm systems and GPS tracking ensure your bike stays secure.

        **Predictive Maintenance**: IoT sensors monitor bike health and alert riders to maintenance needs before issues occur.

        **Community Features**: Connect with other riders, share routes, and participate in challenges through integrated social features.

        This technological revolution is making commuting not just more efficient, but also more enjoyable and secure.
      `
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-go-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            Go VV <span className="text-go-green">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and updates from the world of electric mobility and sustainable transportation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span key={index} className="bg-go-green text-go-black px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl font-montserrat font-bold mb-4 text-go-black hover:text-go-green transition-colors">
                  <Link to={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="bg-go-green text-go-black px-6 py-2 rounded-full font-semibold hover:bg-go-green-dark transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16 text-go-black">
            Latest <span className="text-go-green">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-bold mb-3 text-go-black hover:text-go-green transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-go-green font-semibold hover:text-go-green-dark transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-go-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Stay <span className="text-go-green">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on electric mobility, technology trends, and Go VV updates.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-go-green focus:outline-none"
            />
            <button className="bg-go-green text-go-black px-8 py-3 rounded-lg font-semibold hover:bg-go-green-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
