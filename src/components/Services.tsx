import { Camera, Users, FileText, BarChart3, Shield, Smartphone, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'AI Breed Detection',
      description: 'Advanced computer vision technology to identify cattle and buffalo breeds with 95%+ accuracy. Simply upload a photo and get instant results with detailed breed information.',
      features: [
        'Instant breed identification',
        'Support for 50+ Indian breeds',
        'Confidence scoring',
        'Detailed breed characteristics'
      ],
      image: 'https://images.unsplash.com/photo-1739066111699-e482c322b2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXR0bGUlMjBidWZmYWxvJTIwZmFybXxlbnwxfHx8fDE3NTkxNjUyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Farmer Support',
      description: 'Comprehensive support system for Indian farmers including expert consultations, best practices, and community forums to help maximize livestock productivity.',
      features: [
        '24/7 expert consultation',
        'Best practice guidelines',
        'Community forums',
        'Regional language support'
      ],
      image: 'https://images.unsplash.com/photo-1636738176887-8a89e64479d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsaXZlc3RvY2slMjByZWNvcmQlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTE2NTM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Record Management',
      description: 'Digital livestock record keeping system to track breeding history, health records, milk production, and vaccination schedules for better farm management.',
      features: [
        'Digital health records',
        'Breeding history tracking',
        'Milk production logs',
        'Vaccination reminders'
      ],
      image: 'https://images.unsplash.com/photo-1591178780433-0f06a1b5f878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsaXZlc3RvY2slMjByZWNvcmQlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTE2NTM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven insights and analytics to help farmers make informed decisions about breeding, feeding, and overall livestock management for improved profitability.',
      features: [
        'Performance analytics',
        'Breeding recommendations',
        'Feed optimization',
        'Market price trends'
      ],
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdGVjaG5vbG9neSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTkxNjUzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'purple'
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones and tablets, allowing farmers to access services anywhere in the field.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock access to breed detection and support services whenever you need them.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your livestock data is protected and confidential.'
    },
    {
      icon: Award,
      title: 'Proven Accuracy',
      description: 'Validated by agricultural universities and trusted by thousands of farmers across India.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed specifically for Indian livestock farmers. 
            From breed identification to farm management, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-${service.color}-600 rounded-full flex items-center justify-center`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${service.color}-600 rounded-full`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`bg-${service.color}-600 hover:bg-${service.color}-700`}>
                      Learn More
                    </Button>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PashuLens?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology and deep understanding of Indian agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <Card key={index} className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-green-600" size={32} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of progressive farmers who are already using PashuLens to improve their livestock management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}