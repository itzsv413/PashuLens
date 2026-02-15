import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@pashulens.com',
      subtitle: 'support@pashulens.com',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      subtitle: '+91 98765 43211',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Agricultural Tech Hub',
      subtitle: 'Mumbai, Maharashtra, India',
      color: 'orange'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      subtitle: 'Sunday: 10:00 AM - 4:00 PM',
      color: 'purple'
    }
  ];

  const supportTopics = [
    'Breed Detection Issues',
    'Account Support',
    'Technical Problems',
    'Feature Requests',
    'Farmer Training',
    'Partnership Inquiries',
    'General Questions',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'Mumbai (Head Office)',
      address: 'Agricultural Technology Hub, Andheri East, Mumbai - 400069',
      phone: '+91 98765 43210',
      email: 'mumbai@pashulens.com'
    },
    {
      city: 'Bangalore (Tech Center)',
      address: 'Electronic City, Phase 1, Bangalore - 560100',
      phone: '+91 98765 43220',
      email: 'bangalore@pashulens.com'
    },
    {
      city: 'Delhi (Regional Office)',
      address: 'Connaught Place, New Delhi - 110001',
      phone: '+91 98765 43230',
      email: 'delhi@pashulens.com'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about PashuLens? Need technical support? Want to partner with us? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`text-${info.color}-600`} size={32} />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900">{info.details}</p>
                    <p className="text-gray-600 mt-1">{info.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-2" size={28} />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a topic</option>
                      {supportTopics.map((topic, index) => (
                        <option key={index} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder & Office Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Our Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h3 className="font-semibold text-gray-900 mb-2">{office.city}</h3>
                        <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="text-gray-600">📞 {office.phone}</span>
                          <span className="text-gray-600">✉️ {office.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How accurate is the breed detection?',
                answer: 'Our AI model achieves 95%+ accuracy for Indian cattle and buffalo breeds, trained on thousands of images and validated by agricultural experts.'
              },
              {
                question: 'Is PashuLens free to use?',
                answer: 'We offer a free tier with basic breed detection. Premium features like detailed analytics and expert consultation require a subscription.'
              },
              {
                question: 'Which breeds are supported?',
                answer: 'We support 50+ Indian breeds including Gir, Sahiwal, Red Sindhi, Murrah, Nili-Ravi, and many more. Our database is continuously expanding.'
              },
              {
                question: 'Do you provide training for farmers?',
                answer: 'Yes! We offer free training programs, workshops, and webinars to help farmers make the most of our technology.'
              },
              {
                question: 'How can I partner with PashuLens?',
                answer: 'We welcome partnerships with agricultural organizations, NGOs, and government agencies. Contact us through the form above to discuss opportunities.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait! Start using PashuLens today and join thousands of farmers who are already benefiting from our AI-powered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Try Breed Detection
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