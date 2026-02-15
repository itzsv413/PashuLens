import { Target, Globe, HeartHandshake, Database, Smartphone, Award, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function WhyUs() {
  const mainReasons = [
    {
      icon: Target,
      title: 'Unmatched Accuracy',
      description: 'Our AI model achieves 95%+ accuracy in breed identification, trained on thousands of images of Indian cattle and buffalo breeds.',
      stats: '95%+ Accuracy Rate',
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Designed for rural farmers with simple, intuitive mobile interface that works even with slow internet connections.',
      stats: 'Works on 2G Networks',
      color: 'blue'
    },
    {
      icon: HeartHandshake,
      title: 'Farmer-First Approach',
      description: 'Built by understanding real challenges faced by Indian farmers. Every feature is designed with farmer feedback and needs in mind.',
      stats: '10,000+ Farmers Served',
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Extensive database covering 50+ Indian breeds with detailed information on characteristics, milk yield, and care requirements.',
      stats: '50+ Indian Breeds',
      color: 'purple'
    }
  ];

  const additionalBenefits = [
    {
      icon: Globe,
      title: 'Regional Language Support',
      description: 'Available in multiple Indian languages including Hindi, Telugu, Tamil, Marathi, and more.'
    },
    {
      icon: Award,
      title: 'Scientifically Validated',
      description: 'Our algorithms are validated by agricultural universities and livestock research institutes.'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Access to veterinarians, livestock experts, and experienced farmers for guidance and support.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'AI model continuously learns and improves with every photo uploaded by our farming community.'
    }
  ];

  const testimonials = [
    {
      name: 'Ravi Kumar',
      location: 'Haryana',
      text: 'PashuLens helped me identify the exact breed of my buffalo and get the right price at the market. Very accurate!',
      occupation: 'Dairy Farmer'
    },
    {
      name: 'Priya Sharma',
      location: 'Gujarat',
      text: 'The app is so simple to use. I can now keep proper records of all my cattle and their breeding history.',
      occupation: 'Livestock Owner'
    },
    {
      name: 'Manjesh Patil',
      location: 'Maharashtra',
      text: 'Expert consultation feature saved my cattle from a disease. The veterinarian guidance was spot on.',
      occupation: 'Progressive Farmer'
    }
  ];

  const comparisonData = [
    { feature: 'Breed Detection Accuracy', us: '95%+', others: '70-80%' },
    { feature: 'Indian Breed Coverage', us: '50+ Breeds', others: '10-15 Breeds' },
    { feature: 'Language Support', us: '8 Languages', others: 'English Only' },
    { feature: 'Offline Capability', us: 'Yes', others: 'No' },
    { feature: 'Expert Support', us: '24/7', others: 'Limited' },
    { feature: 'Farmer Training', us: 'Free', others: 'Paid' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose PashuLens?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another tech company. We're farmers' partners, dedicated to revolutionizing 
            livestock management through AI-powered solutions built specifically for India.
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-${reason.color}-600 rounded-full flex items-center justify-center`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{reason.title}</CardTitle>
                        <div className={`text-${reason.color}-600 font-semibold mt-1`}>{reason.stats}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Reasons to Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond accuracy, we offer comprehensive support and continuously evolving technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <Card key={index} className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See why PashuLens stands out from other livestock management solutions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">PashuLens</th>
                  <th className="px-6 py-4 text-center">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Farmers Say About Us
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from farmers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 h-full">
                <CardContent className="space-y-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                    <p className="text-sm text-green-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Revolution in Livestock Management
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Try PashuLens today and experience the difference yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">10,000+</div>
              <div className="text-gray-300">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-gray-300">Breeds Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}