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
  Calculator,
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
            {['Home', 'Services', 'Clients', 'About', 'Team', 'Insights', 'Contact'].map((item) => (
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
              {['Home', 'Services', 'Clients', 'About', 'Team', 'Insights', 'Contact'].map((item) => (
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
            Driving Growth Through
            <span className="text-gold-500 block mt-2">
              Financial Intelligence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We partner with founders, investors, and businesses to deliver expert M&A, fundraising,  
            and CFO solutions that accelerate growth and ensure lasting value.
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
      title: "M&A, Capital Raising & Transaction Advisory",
      description: "End-to-end advisory for mergers, acquisitions, and fundraising, covering everything from strategy to successful deal closure",
      features: ["Equity & Debt Fundraising", "Valuation & Financial Modelling", "Transaction Structuring & Negotiation", "Due Diligence & Regulatory Compliance", "Investor Relations & Communications"]
    },
    {
      icon: Target,
      title: "Strategic Advisory & Management Consulting",
      description: "In-depth strategic and financial consulting to accelerate business transformation, enhance operational efficiency, and ensure sustainable growth.",
      features: ["Strategic Planning & Growth Initiatives", "Business Transformation & Process Efficiency", "Financial Modelling & Scenario Planning", "Market Research & Competitive Analysis", "Board & Executive-Level Reporting"]
    },
    {
      icon: Building2,
      title: "Virtual CFO & Business Support Services",
      description: "Complete Virtual CFO services and tax advisory to ensure compliance, optimize structures, and strengthen financial operations.",
      features: ["Virtual CFO & Financial Leadership", "Budgeting, Forecasting & Cash Flow Management", "Financial Reporting, Compliance & Operations", "Tax Planning & Structuring", "Investor & Stakeholder Communication"]
    },
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
                            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clients Section Component - FIXED JSX SYNTAX
const ClientsSection = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const clients = [
    {
      name: "ABM Respiratory Care",
      sector: "Healthcare",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/hg996il4_ABM.png",
      website: "https://www.abmrc.com"
    },
    {
      name: "Animo Tech",
      sector: "Technology",
      services: ["Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/yfm31ck6_Animo%20tech.jpg",
      website: "https://getanimo.io"
    },
    {
      name: "The Stree Co.",
      sector: "Consumer",
      services: ["Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/y3qzvss0_The%20Stree%20Co.png",
      website: "https://thestreeco.com"
    },
    {
      name: "Jar",
      sector: "Financial Services",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/uxzpg0a5_Jar.png",
      website: "https://myjar.app"
    },
    {
      name: "Detectwell Security",
      sector: "Others",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/axxhiu8c_DSS.png",
      website: "https://detectwellsecurity.com"
    },
    {
      name: "DrinkPrime",
      sector: "Consumer",
      services: ["Transaction Advisory Services", "Management Consulting"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/g8dcpkmy_Drinkprime.png",
      website: "https://drinkprime.in"
    },
    {
      name: "Genetic Nutrition",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/va68iptj_Genetic%20Nutrition.jpg",
      website: "https://geneticnutrition.in"
    },
    {
      name: "Gilly's",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/94ttcy8b_Gillys.jpg",
      website: "https://gillys.in"
    },
    {
      name: "Hotelzify",
      sector: "Technology",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/42d78i4s_Hotelzify.png",
      website: "https://hotelzify.com"
    },
    {
      name: "The Editorial Institute",
      sector: "Others",
      services: ["Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/yxnbkoy8_The%20editorial%20institute.jpg",
      website: "https://www.theeditorialinstitute.com/"
    },
    {
      name: "Krishivan Tech",
      sector: "Others",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/h04jgh0b_Krishivan%20Tech.jpg",
      website: "https://krishivantech.com"
    },
    {
      name: "Origin Fresh",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/t8qearte_Origin%20Fresh.jpg",
      website: "https://originfresh.in"
    },
    {
      name: "Ridgetop Dental International",
      sector: "Healthcare",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/8j2pn6xw_RDI.png",
      website: "https://ridgetopdental.in"
    },
    {
      name: "Zorp",
      sector: "Technology",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/ywiuimhh_Zorp.png",
      website: "https://zorp.one"
    },
    {
      name: "The Cambridge International School",
      sector: "Others",
      services: ["Transaction Advisory Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/w0dmng9r_TCIS.png",
      website: "https://tcis.in/"
    },
    {
      name: "The Silly Fellows",
      sector: "Others",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/e3bnqbat_The%20Silly%20Fellows.png",
      website: "https://thesillyfellows.com"
    },
    {
      name: "Bounce Infinity",
      sector: "Consumer",
      services: ["Transaction Advisory Services", "Management Consulting"],
      description: "Description: To be updated",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/n32h7zh3_Bounce.jpg",
      website: "https://bounceinfinity.com"
    }
  ];

  const filterOptions = ['All', 'Transaction Advisory Services', 'Management Consulting', 'Virtual CFO / Business Support Services'];

  const filteredClients = (activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.services.includes(activeFilter))
  ).sort((a, b) => a.name.localeCompare(b.name));

  const handleCardDoubleClick = (website) => {
    window.open(website, '_blank');
  };

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
          <p className="text-xl text-charcoal-600 max-w-4xl mx-auto mb-8">
            Selective clients worked with by the team of KeyFin Advisors across diverse industries, 
            delivering exceptional advisory services and strategic solutions for complex business challenges.
          </p>
          
          {/* Service Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-700 text-white shadow-elevated'
                    : 'bg-white text-charcoal-700 hover:bg-primary-50 shadow-professional'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Client Cards Grid - 6 COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.name}
              className="client-card h-40 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div
                className="client-card-inner cursor-pointer"
                onDoubleClick={() => handleCardDoubleClick(client.website)}
              >
                {/* Front Face - Logo Only */}
                <div className="client-card-front bg-white shadow-professional border border-gray-200 flex items-center justify-center p-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=1e40af&color=ffffff&size=100`;
                      }}
                    />
                  </div>
                </div>

                {/* Back Face - Company Details */}
                <div className="client-card-back bg-gradient-to-br from-primary-700 to-primary-800 shadow-professional text-white p-3 flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-sm font-bold mb-2 font-serif leading-tight">{client.name}</h3>
                    <div className="inline-block px-2 py-1 bg-white/20 rounded-full text-xs font-medium mb-2">
                      {client.sector}
                    </div>
                    <p className="text-xs leading-relaxed opacity-90 mb-2">
                      {client.description}
                    </p>
                    <div className="text-xs opacity-75">
                      Double-click to visit website
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-charcoal-500 text-lg">No clients found for the selected service type.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-serif">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-charcoal-600">KeyFin Advisors</span>, we are dedicated to 
            helping businesses and entrepreneurs make smarter financial decisions. With deep expertise in 
            transaction advisory, fundraising, and strategic finance, we act as trusted partners to guide 
            you through every critical stage of growth.
          </p>
        </motion.div>

        {/* Why Choose Us Subsection */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center text-charcoal-900 mb-12 font-serif">
            Why Choose <span className="gradient-text">Us</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Expertise",
                description: "Proven track record across fundraising, financial modeling, and strategic advisory with deep industry knowledge."
              },
              {
                title: "Tailored Solutions", 
                description: "We design strategies specific to your company's growth stage and needs, ensuring optimal outcomes."
              },
              {
                title: "Trusted Partnership",
                description: "We work as your extended finance team, ensuring long-term success through dedicated support."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-professional hover:shadow-elevated transition-all duration-300 hover-lift text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-700" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-primary-900 font-serif">
                  {item.title}
                </h4>
                <p className="text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="bg-gray-50 rounded-xl p-8 shadow-professional"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6 font-serif">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">First Name</label>
                  <input 
                    name="firstName"
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">Last Name</label>
                  <input 
                    name="lastName"
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Email</label>
                <input 
                  name="email"
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Service Interest</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ma">M&A, Capital Raising & Transaction Advisory</option>
                  <option value="strategic">Strategic Advisory & Management Consulting</option>
                  <option value="cfo">Virtual CFO & Business Support Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Please describe your requirements..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary-800 text-white py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors shadow-professional"
              >
                Send Message
              </button>
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
              <li><a href="#" className="hover:text-white transition-colors">M&A, Capital Raising & Transaction Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic Advisory & Management Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual CFO & Business Support Services</a></li>
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
            <AboutSection />
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
