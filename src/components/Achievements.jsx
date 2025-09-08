import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Award, Users, Globe, Star, Target, PersonStanding, Globe2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Achievements = ({ language }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      title: "Achievements & Awards",
      subtitle: "Recognition for excellence and impact",
      achievements: [
        {
          title: "TETRIX Challenge",
          description: "Semifinalist of the largest university business competition in the world held in Rio de Janeiro, Brazil",
          year: "2021",
          category: "Business",
          icon: Trophy,
          color: "text-yellow-500",
          bgColor: "bg-yellow-50",
          // details: ".",
          images: [
            "brazil/brazil1.JPG",
            "brazil/brazil2.jpeg",
            "brazil/brazil3.JPG",
            "brazil/brazil4.JPG",
            "brazil/brazil5.JPG",
            "brazil/brazil6.jpeg"
          ]
        },
        {
          title: "Young Economic Forum Dubai 2025",
          description: "Represented Mexico in an international forum, engaging with youth leaders and policymakers on economic challenges of the global south.",
          year: "2021",
          category: "International",
          icon: Globe2,
          color: "text-blue-500",
          bgColor: "bg-blue-50",
          details: ".",
          images: [
            "dubai/dubai1.jpeg",
            "dubai/dubai2.jpeg",
            "dubai/dubai3.jpeg",
            "dubai/dubai4.jpeg",
            "dubai/dubai5.JPG",
            "dubai/dubai6.jpeg",
            "dubai/dubai7.jpeg"
          ]
        },
        {
          title: "Bringing Cinema to Rural Mexico",
          description: "Founded and managed an outdoor cinema in a rural community, bringing art and culture to small communities in the Nicolas Romero region",
          year: "2024",
          category: "Community",
          icon: PersonStanding,
          color: "text-green-500",
          bgColor: "bg-green-50",
          details: ".",
          images: [
            "cinema/cinema1.jpeg",
            "cinema/cinema2.jpeg",
            "cinema/cinema3.jpeg",
            "cinema/cinema4.jpeg"
          ]
        },
        // {
        //   title: "Academic Excellence",
        //   description: "Cum Laude Graduate",
        //   year: "2023",
        //   category: "Education",
        //   icon: Star,
        //   color: "text-purple-500",
        //   bgColor: "bg-purple-50",
        //   details: "Graduated with honors from CIDE, maintaining excellent academic performance throughout the Economics program while balancing professional internships and international experiences."
        // },
        // {
        //   title: "Social Impact Recognition",
        //   description: "Community Development Initiatives",
        //   year: "2022-2023",
        //   category: "Social Impact",
        //   icon: Target,
        //   color: "text-red-500",
        //   bgColor: "bg-red-50",
        //   details: "Recognized for founding and managing the rural cinema initiative, bringing art and culture to underserved communities and promoting inclusive innovation aligned with UN Sustainable Development Goals."
        // },
        // {
        //   title: "International Exchange",
        //   description: "Humboldt University Berlin",
        //   year: "2022",
        //   category: "International",
        //   icon: Users,
        //   color: "text-indigo-500",
        //   bgColor: "bg-indigo-50",
        //   details: "Successfully completed an international exchange program at Humboldt University Berlin, focusing on European economic policy and cross-cultural academic collaboration."
        // }
      ]
    },
    es: {
      title: "Logros & Premios",
      subtitle: "Reconocimiento por excelencia e impacto",
      achievements: [
        {
          title: "1er Lugar - Nielsen Hackathon",
          description: "Futuro de la IA para empresas",
          year: "2024",
          category: "Innovación",
          icon: Trophy,
          color: "text-yellow-500",
          bgColor: "bg-yellow-50",
          details: "Lideré un equipo para desarrollar una solución innovadora de IA para optimización empresarial, ganando el primer lugar en el hackathon interno de Nielsen enfocado en el futuro de la inteligencia artificial en aplicaciones empresariales."
        },
        {
          title: "Finalista - Desafío TETRIX",
          description: "La competencia universitaria de negocios más grande de América Latina",
          year: "2021",
          category: "Negocios",
          icon: Award,
          color: "text-blue-500",
          bgColor: "bg-blue-50",
          details: "Competí como finalista en la competencia internacional de negocios más grande del mundo realizada en Río de Janeiro, presentando soluciones innovadoras para el desarrollo empresarial sostenible."
        },
        {
          title: "Foro Económico Juvenil Dubai",
          description: "Representé a México",
          year: "2022",
          category: "Internacional",
          icon: Globe,
          color: "text-green-500",
          bgColor: "bg-green-50",
          details: "Representé orgullosamente a México en el Foro Económico Juvenil en Dubai, interactuando con líderes juveniles y formuladores de políticas para explorar desafíos económicos y de políticas globales."
        },
        {
          title: "Excelencia Académica",
          description: "Graduado Cum Laude",
          year: "2023",
          category: "Educación",
          icon: Star,
          color: "text-purple-500",
          bgColor: "bg-purple-50",
          details: "Me gradué con honores del CIDE, manteniendo un excelente rendimiento académico durante todo el programa de Economía mientras equilibraba pasantías profesionales y experiencias internacionales."
        },
        {
          title: "Reconocimiento de Impacto Social",
          description: "Iniciativas de Desarrollo Comunitario",
          year: "2022-2023",
          category: "Impacto Social",
          icon: Target,
          color: "text-red-500",
          bgColor: "bg-red-50",
          details: "Reconocido por fundar y gestionar la iniciativa de cine rural, llevando arte y cultura a comunidades desatendidas y promoviendo la innovación inclusiva alineada con los Objetivos de Desarrollo Sostenible de la ONU."
        },
        {
          title: "Intercambio Internacional",
          description: "Humboldt University Berlin",
          year: "2022",
          category: "Internacional",
          icon: Users,
          color: "text-indigo-500",
          bgColor: "bg-indigo-50",
          details: "Completé exitosamente un programa de intercambio internacional en la Universidad Humboldt de Berlín, enfocándome en la política económica europea y la colaboración académica intercultural."
        }
      ]
    }
  };

  const currentContent = content[language];

  const openLightbox = (images, startIndex = 0) => {
    setCurrentImages(images);
    setCurrentIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentImages([]);
    setCurrentIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  }, [currentImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  }, [closeLightbox, prevImage, nextImage]);

  React.useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, handleKeyDown]);

  return (
    <section id="achievements" className="py-20 bg-white">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full ${achievement.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${achievement.bgColor} ${achievement.color}`}>
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </CardHeader>
                  
                  {/* Image Gallery Preview */}
                  {achievement.images && achievement.images.length > 0 && (
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                          <Camera className="h-3 w-3" />
                          <span>{achievement.images.length} photos</span>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-1">
                          {achievement.images.slice(0, 4).map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group/image"
                              onClick={() => openLightbox(achievement.images, imgIndex)}
                            >
                              <img
                                src={`/images/${image}`}
                                alt={`${achievement.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-all duration-300 group-hover/image:brightness-110"
                                onError={(e) => {
                                  // Fallback to a placeholder if image doesn't exist
                                  e.target.src = `data:image/svg+xml;base64,${btoa(`
                                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                      <rect width="100%" height="100%" fill="#f3f4f6"/>
                                      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="10">
                                        ${imgIndex + 1}
                                      </text>
                                    </svg>
                                  `)}`;
                                }}
                              />
                              {imgIndex === 3 && achievement.images.length > 4 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                  <span className="text-white text-xs font-semibold">
                                    +{achievement.images.length - 4}
                                  </span>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openLightbox(achievement.images, 0)}
                          className="w-full py-2 px-3 text-xs font-medium text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg transition-colors duration-200"
                        >
                          View All Photos
                        </motion.button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-blue-100/50 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Ready to Make an Impact?' : '¿Listo para Hacer un Impacto?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'en' 
                  ? "I'm passionate about using data and technology to create positive change. Let's collaborate on projects that matter."
                  : "Me apasiona usar datos y tecnología para crear un cambio positivo. Colaboremos en proyectos que importen."
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                {language === 'en' ? 'Get in Touch' : 'Ponte en Contacto'}
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Lightbox/Carousel */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="relative">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  src={`/images/${currentImages[currentIndex]}`}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#1f2937"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="24">
                          Image not found
                        </text>
                      </svg>
                    `)}`;
                  }}
                />

                {/* Navigation Arrows */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {currentImages.length}
              </div>

              {/* Thumbnail Strip */}
              {currentImages.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4 overflow-x-auto pb-2">
                  {currentImages.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentIndex 
                          ? 'border-white' 
                          : 'border-transparent hover:border-white/50'
                      }`}
                    >
                      <img
                        src={`/images/${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#374151"/>
                              <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="10">
                                ${index + 1}
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
