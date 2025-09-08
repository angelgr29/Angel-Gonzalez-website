import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Download, ArrowDown } from 'lucide-react';

const Home = ({ language }) => {
  const content = {
    en: {
      greeting: "Hey, I'm",
      name: "Angel Gonzalez",
      title: "Data Analyst & Entrepreneour",
      subtitle: "Passionate about data, sustainability and global networking",
      bio: "I am a Mexican data analyst passionate about turning knowledge into action for inclusive and sustainable impact. With experience across international forums and technology initiatives, I bridge data-driven insights with community innovation from empowering small businesses to expanding access to art and culture.",
      cta: "Download CV",
      scroll: "Discover more"
    },
    es: {
      greeting: "¡Hola!",
      name: "Soy Angel G.",
      title: "Analista de Datos & Emprendedor",
      subtitle: "Apasionado por la IA, política de competencia y experiencias globales",
      bio: "Soy un joven profesional con formación en Economía, actualmente trabajando como Analista de Datos en una empresa internacional de medios. Mi verdadera pasión radica en aplicar habilidades de datos para generar impacto inclusivo y sostenible.",
      cta: "Descargar CV",
      scroll: "Descubre más"
    }
  };

  const currentContent = content[language];

  const scrollToNext = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    alert(language === 'en' ? 'CV download would start here' : 'La descarga del CV comenzaría aquí');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Main profile circle */}
            <div className="relative">
              {/* Yellow speech bubble background */}
              <div className="absolute -inset-12 lg:-inset-16 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-90 transform rotate-12 scale-110"></div>
              <div className="absolute -inset-6 lg:-inset-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-80 transform -rotate-6 scale-105"></div>
              
              {/* Profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/profile-pic.jpg" 
                  alt="Angel Gonzalez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-7xl font-bold" style={{display: 'none'}}>
                  AG
                </div>
              </div>
              
              {/* Decorative lines */}
              <div className="absolute -top-12 -right-12 lg:-top-16 lg:-right-16 w-40 lg:w-48 h-1 bg-yellow-300 rounded-full transform rotate-45"></div>
              <div className="absolute -bottom-12 -left-12 lg:-bottom-16 lg:-left-16 w-32 lg:w-40 h-1 bg-blue-300 rounded-full transform -rotate-45"></div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Greeting with emoji */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 font-serif">
                {currentContent.greeting}
              </h1>
              <motion.div
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-4 text-4xl"
              >
                👋
              </motion.div>
            </div>

            {/* Name and title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {currentContent.name}
              </h2>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <h3 className="text-2xl md:text-3xl text-blue-600 font-semibold">
                  {currentContent.title}
                </h3>
                <div className="ml-4 w-16 h-1 bg-blue-300 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl"
            >
              {currentContent.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={downloadCV}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                {currentContent.cta}
              </Button>
              
              <Button
                onClick={scrollToNext}
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {currentContent.scroll}
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Subscribe box */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
                <p className="text-gray-600 font-medium mb-2">
                  {language === 'en' ? 'Subscribe to my newsletter' : 'Suscríbete a mi boletín'}
                </p>
                <p className="text-sm text-gray-500">
                  {language === 'en' ? 'Weekly insights on data, impact, and global experiences' : 'Insights semanales sobre datos, impacto y experiencias globales'}
                </p>
              </div>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-4 text-2xl"
              >
                ➡️
              </motion.div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            onClick={scrollToNext}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
