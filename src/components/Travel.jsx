import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Heart, Plane, Globe, Users } from 'lucide-react';

const Travel = ({ language }) => {

  const content = {
    en: {
      title: "Travel & Volunteering",
      subtitle: "Global experiences that shape my perspective"
    },
    es: {
      title: "Viajes & Voluntariado",
      subtitle: "Experiencias globales que moldean mi perspectiva"
    }
  };

  const currentContent = content[language];

  // Generate collage images array (2x8 = 16 images)
  const collageImages = Array.from({ length: 16 }, (_, index) => {
    let extension;
    if (index === 0 || index === 1) {
      extension = 'JPG'; // country-1.JPG, country-2.JPG
    } else if (index === 2) {
      extension = 'jpg'; // country-3.jpg
    } else {
      extension = 'jpeg'; // country-4.jpeg and onwards
    }
    
    return {
      id: index + 1,
      src: `/images/countries/country-${index + 1}.${extension}`,
      alt: `Travel experience ${index + 1}`,
      // country: `Country ${index + 1}`
    };
  });


  return (
    <section id="travel" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <span className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-semibold">28 Countries</span>
            </span>
            <span className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-600" />
              <span className="font-semibold">Volunteering</span>
            </span>
            <span className="flex items-center">
              <Plane className="h-5 w-5 mr-2 text-green-600" />
              <span className="font-semibold">Global Impact</span>
            </span>
          </div>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-full h-[500px] bg-white rounded-xl overflow-hidden border border-gray-200">
                <img 
                  src="/images/world-map.jpg" 
                  alt="World Map - Countries Visited"
                  className="w-full h-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Collage Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* 2x8 Collage Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 max-w-6xl mx-auto">
            {collageImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="12">
                            ${image.country}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold text-center px-2">
                      {image.country}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50/50 to-indigo-100/50 border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Global Perspective, Local Impact' : 'Perspectiva Global, Impacto Local'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === 'en' 
                  ? "Each international experience has shaped my vision for how young leaders can create meaningful change. I’ve learned that real impact happens when global insights are applied to local challenges, turning ideas into action."
                  : "Cada experiencia internacional ha moldeado mi visión de cómo los líderes jóvenes pueden impulsar los Objetivos de Desarrollo Sostenible—especialmente convirtiendo el conocimiento en acción. Desde el voluntariado en India hasta representar a México en Dubai, estas experiencias me han enseñado que el cambio real ocurre cuando conectamos insights globales con necesidades locales."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">{language === 'en' ? '28 Countries Visited' : '28 Países Visitados'}</span>
                </span>
                <span className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-600" />
                  <span className="font-semibold">{language === 'en' ? 'Multiple Volunteer Projects' : 'Múltiples Proyectos de Voluntariado'}</span>
                </span>
                <span className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">{language === 'en' ? 'International Forums' : 'Foros Internacionales'}</span>
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;
