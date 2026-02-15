import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const teamMembers = [
    {
      name: 'Dr. Amit Sharma',
      role: 'Founder & CEO',
      expertise: 'AI/ML, Agricultural Technology',
      bio: '15+ years in agricultural technology with PhD in Computer Science from IIT Delhi.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'CTO & Co-founder',
      expertise: 'Computer Vision, Deep Learning',
      bio: 'Former Google AI researcher specializing in computer vision applications for agriculture.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Product',
      expertise: 'Product Strategy, Farmer Engagement',
      bio: 'Rural development expert with 20+ years of grassroots farming experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Meera Singh',
      role: 'Veterinary Advisor',
      expertise: 'Livestock Health, Indian Breeds',
      bio: 'Veterinary expert with specialization in Indian cattle and buffalo breeds.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Farmer-Centric',
      description: 'Every decision we make puts Indian farmers at the center. We build solutions that truly serve their needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in AI accuracy, user experience, and customer service.'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'We believe in empowering farmers through knowledge sharing and continuous learning opportunities.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of progressive farmers who support and learn from each other.'
    }
  ];

  const milestones = [
    { year: '2021', event: 'PashuLens founded with vision to revolutionize livestock management' },
    { year: '2022', event: 'First AI model launched with 85% accuracy for 25 Indian breeds' },
    { year: '2023', event: 'Reached 5,000+ farmers across 10 states in India' },
    { year: '2024', event: '95%+ accuracy achieved, 50+ breeds supported, 10,000+ farmers served' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About PashuLens
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to empower Indian farmers with AI-powered livestock management solutions. 
            From breed identification to farm analytics, we're revolutionizing agriculture technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize access to advanced livestock management technology for Indian farmers, 
                helping them make informed decisions that improve productivity, profitability, and 
                animal welfare through AI-powered solutions.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">What drives us:</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Bridging the technology gap in rural India</li>
                  <li>• Making AI accessible to every farmer</li>
                  <li>• Preserving indigenous livestock breeds</li>
                  <li>• Building sustainable farming communities</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To become India's leading agricultural technology platform, transforming rural livelihoods 
                through innovative AI solutions that make precision farming accessible to farmers of all scales, 
                from smallholders to large dairy operations.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Our goals by 2030:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Serve 1 million+ farmers across India</li>
                  <li>• Support 100+ livestock breeds</li>
                  <li>• Establish regional service centers</li>
                  <li>• Partner with agricultural universities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines deep agricultural knowledge with cutting-edge technology expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.expertise}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <Card key={index} className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-green-600" size={32} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform Indian agriculture
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </Card>
                  </div>
                  
                  <div className="relative">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Our commitment to Indian agriculture in numbers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">10,000+</div>
              <div className="text-gray-300">Farmers Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Breeds Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15</div>
              <div className="text-gray-300">States Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}