import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Building2, GraduationCap, MapPin, Calendar, Download, Briefcase, BookOpen } from 'lucide-react';

const Experience = ({ language }) => {
  const content = {
    en: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      experience: [
        {
          type: "work",
          title: "Modeling Data Analyst",
          company: "Nielsen Media",
          location: "Mexico City, Mexico",
          period: "Dec 2023 – Current",
          description: "Using data modeling to support strategic decision-making at an international media company. Focus on transforming complex data into actionable insights for business growth.",
          icon: Building2
        },
        {
          type: "work",
          title: "Data Scientist Intern",
          company: "GAMES Economics",
          location: "Mexico City, Mexico",
          period: "Nov 2022 – Jun 2023",
          description: "Developed machine learning models and data analysis tools to support economic research and policy recommendations.",
          icon: Building2
        }
      ],
      education: [
        {
          type: "education",
          title: "Bachelor of Economics",
          company: "CIDE (Centro de Investigación y Docencia Económicas)",
          location: "Mexico City, Mexico",
          period: "2019 – 2023",
          description: "Comprehensive study of economic theory, quantitative methods, and policy analysis with focus on development economics and data science applications.",
          icon: GraduationCap
        },
        {
          type: "education",
          title: "Exchange Semester",
          company: "Humboldt University Berlin",
          location: "Berlin, Germany",
          period: "2022",
          description: "International exchange program focusing on European economic policy, international trade, and cross-cultural academic collaboration.",
          icon: MapPin
        }
      ]
    },
    es: {
      title: "Experiencia & Educación",
      subtitle: "Mi trayectoria profesional y formación académica",
      experience: [
        {
          type: "work",
          title: "Analista de Datos de Modelado",
          company: "Nielsen Media",
          location: "Ciudad de México, México",
          period: "Dic 2023 – Actual",
          description: "Utilizando modelado de datos para apoyar la toma de decisiones estratégicas en una empresa internacional de medios. Enfoque en transformar datos complejos en insights accionables para el crecimiento empresarial.",
          icon: Building2
        },
        {
          type: "work",
          title: "Intern de Científico de Datos",
          company: "GAMES Economics",
          location: "Ciudad de México, México",
          period: "Nov 2022 – Jun 2023",
          description: "Desarrollé modelos de machine learning y herramientas de análisis de datos para apoyar la investigación económica y recomendaciones de política.",
          icon: Building2
        }
      ],
      education: [
        {
          type: "education",
          title: "Licenciatura en Economía",
          company: "CIDE (Centro de Investigación y Docencia Económicas)",
          location: "Ciudad de México, México",
          period: "2019 – 2023",
          description: "Estudio integral de teoría económica, métodos cuantitativos y análisis de políticas con enfoque en economía del desarrollo y aplicaciones de ciencia de datos.",
          icon: GraduationCap
        },
        {
          type: "education",
          title: "Semestre de Intercambio",
          company: "Humboldt University Berlin",
          location: "Berlín, Alemania",
          period: "2022",
          description: "Programa de intercambio internacional enfocado en política económica europea, comercio internacional y colaboración académica intercultural.",
          icon: MapPin
        }
      ]
    }
  };

  const currentContent = content[language];

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    alert(language === 'en' ? 'CV download would start here' : 'La descarga del CV comenzaría aquí');
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          
          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={downloadCV}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              {language === 'en' ? 'Download CV' : 'Descargar CV'}
            </Button>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'Professional Experience' : 'Experiencia Profesional'}
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {currentContent.experience.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300">
                        <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-2">
                            {item.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.period}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {index < currentContent.experience.length - 1 && (
                        <div className="ml-8 w-px h-6 bg-gradient-to-b from-blue-200 to-transparent"></div>
                      )}
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'Education & Training' : 'Educación y Formación'}
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"></div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {currentContent.education.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-indigo-50/50 transition-colors duration-300">
                        <div className="p-3 bg-indigo-100 rounded-lg flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-indigo-600 font-semibold mb-2">
                            {item.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.period}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {index < currentContent.education.length - 1 && (
                        <div className="ml-8 w-px h-6 bg-gradient-to-b from-indigo-200 to-transparent"></div>
                      )}
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
