import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Users, 
  BarChart3, 
  PieChart, 
  Target,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
  Award,
  Globe,
  Calendar
} from 'lucide-react';
import './App.css';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-professional' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_keyfin-pro/artifacts/95aoz5x6_KeyFin%20Advisors%20Logo_Black%20Font.jpg" 
              alt="KeyFin Advisors" 
              className="h-12 w-auto"
            />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Clients', 'Team', 'Insights', 'Contact'].map((item) => (
              <motion.button
                key={item}
                className="text-charcoal-700 hover:text-primary-900 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-charcoal-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-charcoal-700 mt-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-charcoal-700 mt-1 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4 shadow-professional"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'Clients', 'Team', 'Insights', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-charcoal-700 hover:text-primary-900 font-medium transition-colors text-left"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategic Financial
            <span className="text-gold-500 block mt-2">
              Advisory Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Delivering sophisticated financial advisory services to corporations, investors, 
            and high-net-worth individuals across complex transactions and strategic initiatives.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-gold-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all shadow-elevated group flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions Advisory",
      description: "Comprehensive M&A advisory services including strategic planning, due diligence, valuation analysis, and transaction execution for complex corporate transactions.",
      features: ["Strategic Due Diligence", "Valuation & Modeling", "Transaction Structuring", "Regulatory Compliance"]
    },
    {
      icon: BarChart3,
      title: "Capital Raising & Structuring",
      description: "Expert guidance on capital formation strategies, debt and equity structuring, and investor relations for growth-stage companies and established enterprises.",
      features: ["Equity & Debt Capital", "Investment Banking", "Investor Relations", "Capital Structure Optimization"]
    },
    {
      icon: Target,
      title: "Strategic Advisory & Management Consulting",
      description: "High-level strategic consulting services encompassing business transformation, operational excellence, and growth strategy development.",
      features: ["Strategic Planning", "Business Transformation", "Operational Excellence", "Growth Strategy"]
    },
    {
      icon: PieChart,
      title: "Financial Planning & Analysis",
      description: "Sophisticated financial modeling, forecasting, and analytical services to support critical business decisions and long-term planning initiatives.",
      features: ["Financial Modeling", "Scenario Analysis", "Performance Metrics", "Strategic Forecasting"]
    },
    {
      icon: Building2,
      title: "Virtual CFO & Support Services",
      description: "Executive-level financial leadership and comprehensive business support services including compliance, reporting, and operational finance management.",
      features: ["Executive CFO Services", "Financial Reporting", "Compliance Management", "Operational Support"]
    },
    {
      icon: calculator,
      title: "Tax planning, structuring & Filings",
      description: "Comprehensive tax advisory solutions to optimize liabilities, ensure compliance, and align with business goals through strategic structuring and efficient filing processes.",
      features: ["Income & Corporate Tax Planning", "Business Structuring for Tax Efficiency", "GST, IEC & Other Tax Compliance", "Accurate & Timely Tax Filings"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Delivering exceptional advisory services across the spectrum of corporate finance, 
            strategic planning, and business transformation initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl shadow-professional hover:shadow-elevated transition-all duration-300 hover-lift p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-700" />
                </div>
                
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-charcoal-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.button 
                className="text-primary-700 font-semibold flex items-center group text-sm"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clients Section Component
const ClientsSection = () => {
  const clientCategories = [
    {
      title: "Technology & Innovation",
      description: "Leading technology companies, SaaS platforms, and innovative startups across growth stages."
    },
    {
      title: "Financial Services",
      description: "Investment firms, family offices, and institutional investors seeking strategic advisory."
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Medical device companies, pharmaceutical firms, and healthcare service providers."
    },
    {
      title: "Manufacturing & Industrial",
      description: "Traditional manufacturing, industrial automation, and supply chain enterprises."
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Trusted by leading organizations across diverse industries for critical financial advisory and strategic consulting engagements.
          </p>
        </motion.div>

        {/* Client Logo Placeholder Area */}
        <motion.div 
          className="bg-white rounded-xl shadow-professional p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-charcoal-500 border-2 border-dashed border-charcoal-300 rounded-lg p-12">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-charcoal-400" />
            <h3 className="text-lg font-semibold mb-2">Client Logos Display</h3>
            <p>Professional client logos will be showcased here to demonstrate our trusted partnerships and successful engagements.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-lg shadow-professional p-6 hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3 font-serif">
                {category.title}
              </h3>
              <p className="text-charcoal-600 text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Chartered Accountants & Financial Advisors",
      description: "Experienced professionals with deep expertise in corporate finance, strategic advisory, and complex transaction management.",
      linkedIn: "#",
      achievements: ["CA Qualification", "15+ Years Experience", "200+ Transactions"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Expert <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Our team combines deep technical expertise with strategic business acumen, 
            delivering exceptional results across complex financial advisory engagements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-professional p-8 hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-white" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-charcoal-900 font-serif">
                      {member.name}
                    </h3>
                    <a 
                      href={member.linkedIn}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-lg font-semibold text-gold-600 mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex flex-col">
                        <Award className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                        <span className="text-sm text-charcoal-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Insights/Blog Section Component
const InsightsSection = () => {
  const insights = [
    {
      title: "Market Outlook: Strategic Considerations for 2024",
      summary: "Analysis of current market conditions and strategic implications for M&A activity and capital formation.",
      date: "December 2024",
      category: "Market Analysis"
    },
    {
      title: "Due Diligence Excellence in Complex Transactions",
      summary: "Best practices and methodologies for conducting comprehensive due diligence in sophisticated business combinations.",
      date: "November 2024",
      category: "Transaction Advisory"
    },
    {
      title: "Capital Structure Optimization Strategies",
      summary: "Frameworks for evaluating and optimizing capital structures across different business lifecycles and market conditions.",
      date: "November 2024",
      category: "Capital Markets"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Market <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Industry analysis, research commentary, and strategic perspectives on current market developments and transaction trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              className="bg-white rounded-xl shadow-professional overflow-hidden hover:shadow-elevated transition-all duration-300 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {insight.category}
                  </span>
                  <div className="flex items-center text-charcoal-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3 font-serif">
                  {insight.title}
                </h3>
                
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  {insight.summary}
                </p>
                
                <button className="text-primary-700 font-semibold flex items-center group">
                  Read More
                  <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Connect with our advisory team to discuss your strategic financial requirements and explore how we can support your objectives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-charcoal-900 mb-8 font-serif">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="text-charcoal-900 font-semibold">Phone</div>
                  <div className="text-charcoal-600">+91 9880634234</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="text-charcoal-900 font-semibold">Email</div>
                  <div className="text-charcoal-600">contact@keyfin.in</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="text-charcoal-900 font-semibold">Office Address</div>
                  <div className="text-charcoal-600">
                    No. 1/2-8, 2nd Cross, 18th main,<br />
                    Muneshwara Block, BSK 3rd Stage,<br />
                    Bangalore 560026
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-charcoal-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-charcoal-400" />
                  <h3 className="text-lg font-semibold mb-2">Google Maps Integration</h3>
                  <p>Interactive map showing KeyFin Advisors office location will be embedded here.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-gray-50 rounded-xl p-8 shadow-professional">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6 font-serif">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors">
                  <option value="">Select a service</option>
                  <option value="ma">M&A Advisory</option>
                  <option value="capital">Capital Raising</option>
                  <option value="strategic">Strategic Advisory</option>
                  <option value="financial">Financial Planning</option>
                  <option value="cfo">Virtual CFO Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Please describe your requirements..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="w-full bg-primary-800 text-white py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors shadow-professional"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_keyfin-pro/artifacts/95aoz5x6_KeyFin%20Advisors%20Logo_Black%20Font.jpg" 
              alt="KeyFin Advisors" 
              className="h-10 w-auto mb-4 filter invert"
            />
            <p className="text-gray-400 mb-4">
              Strategic financial advisory services for sophisticated clients seeking exceptional results.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">M&A Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Capital Raising</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 9880634234</li>
              <li>contact@keyfin.in</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-charcoal-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KeyFin Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <HeroSection />
            <ServicesSection />
            <ClientsSection />
            <TeamSection />
            <InsightsSection />
            <ContactSection />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
