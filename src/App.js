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
              src="/logo.png" 
              alt="KeyFin Advisors" 
              className="h-11 w-auto"
            />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Clients', 'About', 'Team', 'Contact'].map((item) => (
              <motion.button
                key={item}
                className="font-medium transition-colors text-charcoal-700 hover:text-primary-900"
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
              {['Home', 'Services', 'Clients', 'About', 'Team', 'Contact'].map((item) => (
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
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "100+", label: "Transactions Advised" },
    { value: "3", label: "Core Service Lines" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-40 pb-16 sm:pt-36 sm:pb-0"
    >
      {/* Subtle decorative accent echoing the logo's angular gold/burgundy motif, kept low-opacity so it stays in the background */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-primary-100 via-champagne to-transparent opacity-60 blur-2xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-gold-100 opacity-40 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving Growth Through
            <span className="relative inline-block text-primary-700 block mt-2">
              Financial Intelligence
              <span className="block w-24 h-0.5 bg-gold-500 mx-auto mt-4"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-charcoal-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
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
              className="bg-primary-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all shadow-elevated group flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="border-2 border-primary-900/40 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900/5 transition-all group flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center border-r border-charcoal-200 last:border-r-0 px-4">
                <div className="text-3xl sm:text-4xl font-bold text-primary-900 font-serif">{stat.value}</div>
                <div className="text-sm text-charcoal-600 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
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
    <section id="services" className="py-20 bg-background">
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
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Delivering exceptional advisory services across the spectrum of corporate finance, 
            strategic planning, and business transformation initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-charcoal-100 rounded-lg shadow-professional hover:shadow-elevated transition-all duration-300 hover-lift p-8"
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
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
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
      description: "An advanced healthcare company with intelligent, differentiated, and innovative respiratory solutions.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/hg996il4_ABM.png",
      website: "https://www.abmrc.com"
    },
    {
      name: "Animo G",
      sector: "Technology",
      services: ["Virtual CFO / Business Support Services"],
      description: "Personalized supplement guidance for the way you actually live.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/yfm31ck6_Animo%20tech.jpg",
      website: "https://getanimo.io"
    },
    {
      name: "The Stree Co.",
      sector: "Consumer",
      services: ["Virtual CFO / Business Support Services"],
      description: "Women's hygiene and wellness brand.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/y3qzvss0_The%20Stree%20Co.png",
      website: "https://thestreeco.com"
    },
    {
      name: "Jar",
      sector: "Fintech",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Fintech platform for automated digital gold savings.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/uxzpg0a5_Jar.png",
      website: "https://myjar.app"
    },
    {
      name: "Detectwell Security",
      sector: "Enterprise Services",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Security and manpower supply organisation for government and public sector organisations.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/axxhiu8c_DSS.png",
      website: "https://detectwellsecurity.com"
    },
    {
      name: "DrinkPrime",
      sector: "Consumer",
      services: ["Transaction Advisory Services", "Management Consulting"],
      description: "IoT-enabled subscription-based smart water purifier company.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/g8dcpkmy_Drinkprime.png",
      website: "https://drinkprime.in"
    },
    {
      name: "Genetic Nutrition",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Sports nutrition and fitness supplements brand.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/va68iptj_Genetic%20Nutrition.jpg",
      website: "https://geneticnutrition.in"
    },
    {
      name: "Gilly's",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Premium restaurant, brewery and hospitality brand.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/94ttcy8b_Gillys.jpg",
      website: "https://gillys.in"
    },
    {
      name: "Hotelzify",
      sector: "Technology",
      services: ["Transaction Advisory Services"],
      description: "Hospitality technology and hotel management platform.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/42d78i4s_Hotelzify.png",
      website: "https://hotelzify.com"
    },
    {
      name: "The Editorial Institute",
      sector: "Education",
      services: ["Virtual CFO / Business Support Services"],
      description: "Professional editing and publishing education platform.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/yxnbkoy8_The%20editorial%20institute.jpg",
      website: "https://www.theeditorialinstitute.com/"
    },
    {
      name: "Krishivan Tech",
      sector: "Agritech",
      services: ["Transaction Advisory Services"],
      description: "AgriTech company enabling precision farming solutions.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/h04jgh0b_Krishivan%20Tech.jpg",
      website: "https://krishivantech.com"
    },
    {
      name: "Origin Fresh",
      sector: "Consumer",
      services: ["Transaction Advisory Services"],
      description: "Fresh food and agricultural supply chain company.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/t8qearte_Origin%20Fresh.jpg",
      website: "https://originfresh.in"
    },
    {
      name: "Ridgetop Dental International",
      sector: "Healthcare",
      services: ["Transaction Advisory Services"],
      description: "Multi-specialty dental care and clinic network.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/8j2pn6xw_RDI.png",
      website: "https://ridgetopdental.in"
    },
    {
      name: "Zorp",
      sector: "Technology",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Last-mile logistics and delivery management SaaS platform.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/ywiuimhh_Zorp.png",
      website: "https://zorp.one"
    },
    {
      name: "The Cambridge International School",
      sector: "Education",
      services: ["Transaction Advisory Services"],
      description: "K-12 international school offering Cambridge curriculum.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/w0dmng9r_TCIS.png",
      website: "https://tcis.in/"
    },
    {
      name: "The Silly Fellows",
      sector: "Enterprise Services",
      services: ["Transaction Advisory Services", "Virtual CFO / Business Support Services"],
      description: "Creative entertainment and experiential events company.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/e3bnqbat_The%20Silly%20Fellows.png",
      website: "https://thesillyfellows.com"
    },
    {
      name: "Bounce Daily",
      sector: "Mobility",
      services: ["Transaction Advisory Services", "Management Consulting"],
      description: "An EV manufacturing company and scooter rental platform for gig workers.",
      logo: "https://customer-assets.emergentagent.com/job_keyfin-deploy/artifacts/n32h7zh3_Bounce.jpg",
      website: "https://bouncedaily.in/"
    }
  ];

  const filterOptions = ['All', 'Transaction Advisory Services', 'Management Consulting', 'Virtual CFO / Business Support Services'];

  const filteredClients = (activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.services.includes(activeFilter))
  ).sort((a, b) => a.name.localeCompare(b.name));

  const handleCardClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <section id="clients" className="py-20 bg-champagne">
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
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
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
                onClick={() => handleCardClick(client.website)}
              >
                {/* Front Face - Logo Only */}
                <div className="client-card-front bg-white shadow-professional border border-charcoal-100 flex items-center justify-center p-4">
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
                    <p className="text-xs leading-relaxed opacity-90">
                      {client.description}
                    </p>
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
    <section id="about" className="py-20 bg-background">
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
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
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
          <h3 className="text-3xl font-bold text-center text-charcoal-900 mb-4 font-serif">
            Why Choose <span className="gradient-text">Us</span>
          </h3>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Expertise",
                description: "Proven track record across fundraising, financial modeling, and strategic advisory with deep industry knowledge.",
                icon: TrendingUp
              },
              {
                title: "Tailored Solutions", 
                description: "We design strategies specific to your company's growth stage and needs, ensuring optimal outcomes.",
                icon: Target
              },
              {
                title: "Trusted Partnership",
                description: "We work as your extended finance team, ensuring long-term success through dedicated support.",
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white border border-charcoal-100 p-8 rounded-lg shadow-professional hover:shadow-elevated transition-all duration-300 hover-lift text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-700" />
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
  const achievements = [
    { icon: Award, label: "Chartered Accountant" },
    { icon: TrendingUp, label: "10+ Years Experience" },
    { icon: BarChart3, label: "100+ Transactions" },
  ];

  return (
    <section id="team" className="py-20 bg-champagne">
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
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Advisory built on deep financial expertise, transaction experience, and a genuine commitment to client outcomes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white border border-charcoal-100 rounded-lg shadow-professional p-8 hover:shadow-elevated transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/kiran.png"
                  alt="Kiran Kumar Gowda N"
                  className="w-36 h-36 rounded-full object-cover object-top shadow-elevated border-4 border-white"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-charcoal-900 font-serif">
                    Kiran Kumar Gowda N
                  </h3>
                  <a 
                    href="https://linkedin.com/in/kirankrgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-lg font-semibold text-primary-800 mb-4">
                  Founder & Managing Advisor | Chartered Accountant
                </p>

                <p className="text-charcoal-600 leading-relaxed mb-6">
                  Kiran is a Chartered Accountant with 10+ years of post-qualification experience across Investment Banking, Transaction Advisory, and Corporate Strategy. He has advised startups and mid-market businesses on mergers and acquisitions, fundraising, financial due diligence, strategic finance, and CFO advisory mandates.
                </p>

                <div className="grid grid-cols-3 gap-6 text-center">
                  {achievements.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <item.icon className="w-7 h-7 text-charcoal-700 mb-2" />
                      <span className="text-sm text-charcoal-600 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
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
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
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
                    No. 4334, 1st Floor, 17th A Main, Nagendra Block, <br />
                    Opp. Vivekananda Park, Girinagar, BSK 3rd Stage, <br />
                    Bangalore, Karnataka, India - 560085.
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-professional">
              <iframe
                title="KeyFin Advisors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.503114127366!2d77.54525547358841!3d12.939625715581498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e17c1e95e77%3A0x44c0bb9f080d81d8!2sKeyFin%20Advisors!5e0!3m2!1sen!2sin!4v1784181854523!5m2!1sen!2sin"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
              className="bg-champagne/40 rounded-lg p-8 shadow-professional"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6 font-serif">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">First Name</label>
                  <input 
                    name="firstName"
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal-900 font-medium mb-2">Last Name</label>
                  <input 
                    name="lastName"
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-primary-500 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-charcoal-900 font-medium mb-2">Service Interest</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-primary-500 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-primary-500 transition-colors resize-none"
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
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-champagne text-charcoal-800 py-12 border-t border-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/logo.png" 
              alt="KeyFin Advisors" 
              className="h-9 w-auto mb-4"
            />
            <p className="text-charcoal-600 mb-4">
              Strategic financial advisory services for sophisticated clients seeking exceptional results.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/kirankrgn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-charcoal-500 hover:text-primary-800 cursor-pointer transition-colors" />
              </a>
              <a href="https://keyfin.in" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 text-charcoal-500 hover:text-primary-800 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif text-charcoal-900">Services</h4>
            <ul className="space-y-2 text-charcoal-600">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-800 transition-colors text-left">M&A, Capital Raising & Transaction Advisory</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-800 transition-colors text-left">Strategic Advisory & Management Consulting</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-800 transition-colors text-left">Virtual CFO & Business Support Services</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif text-charcoal-900">Company</h4>
            <ul className="space-y-2 text-charcoal-600">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary-800 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-primary-800 transition-colors">Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary-800 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-serif text-charcoal-900">Contact</h4>
            <ul className="space-y-2 text-charcoal-600">
              <li><a href="tel:+919880634234" className="hover:text-primary-800 transition-colors">+91 9880634234</a></li>
              <li><a href="mailto:contact@keyfin.in" className="hover:text-primary-800 transition-colors">contact@keyfin.in</a></li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-200 pt-8 text-center text-charcoal-500">
          <p>&copy; {new Date().getFullYear()} KeyFin Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Floating WhatsApp Button
const WhatsAppButton = () => (
  <a
    href="https://wa.me/919880634234?text=Hi%20Kiran%2C%20I%20came%20across%20KeyFin%20Advisors%20and%20would%20like%20to%20discuss%20a%20potential%20engagement."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-elevated ring-4 ring-white/70 transition-transform hover:scale-110"
    style={{ backgroundColor: '#25D366' }}
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

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
            <ContactSection />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
