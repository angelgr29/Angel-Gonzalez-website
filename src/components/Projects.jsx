import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Database, Droplet, PlaneTakeoff, TrendingUp } from 'lucide-react';

const Projects = ({ language }) => {
  const content = {
    en: {
      title: "Projects & Research",
      subtitle: "Data-driven solutions and innovative initiatives",
        projects: [
          {
            title: "PRODATA - Data Integration System",
            description: "PROData is a modern data analysis platform that helps businesses transform raw, scattered files into clean, structured insights. By combining automation, visualization, and AI-powered assistance, it empowers SMEs and larger teams to make smarter, sustainable decisions—driving efficiency, transparency and growth",
            framework: ["Decent Work and Economic Growth", "Industry, Innovation and Infrastructure", "Entrepreneurship"],
            status: "Start-up in Development",
            icon: Database,
            color: "bg-purple-500",
            details: ".",
            url: "https://prodatadev.vercel.app",
            image: "prodata.png"
          },
          {
            title: "Water inequality in Mexico",
            description: "This research aims to explore the connection between social marginalization, urbanization, and industrial water pollution in Mexico, revealing that contamination is concentrated in more urbanized and marginalized areas and underscoring the importance of sustainable urban planning to safeguard water quality.",
            framework: ["R", "Clean Water and Sanitation", "Reduced Inequalities"],
            status: "Research",
            icon: Droplet,
            color: "bg-blue-500",
            details: ".",
            url: "https://repositorio-digital.cide.edu/handle/11651/5670",
            image: "water_pollution.png"
          },
          {
            title: "British Airways Data Science Program",
            description: "This program with British Airways focused on real-world data science challenges, including forecasting lounge demand at Heathrow Terminal 3 and building predictive models to identify future holiday travelers, providing hands-on insight into data-driven decision-making in the airline industry.",
            framework: ["Python", "Statistical Analysis", "Customer Analytics"],
            status: "Program",
            icon: PlaneTakeoff,
            color: "bg-orange-500",
            details: ".",
            url: "https://github.com/angelgr29/British_Airways_Program",
            image: "BAP.png"
          },
          {
            title: "Employee Attrition Prediction - Case Study",
            description: "This research aims to analyze employee turnover by applying machine learning classification models to identify the key factors that drive voluntary resignation, finding which model achieves the best performance and highlighting the importance of strategies such as professional development, benefits, and workplace flexibility to improve talent retention.",
            framework: ["Machine Learning", "R", "Decent Work and Economic Growth"],
            status: "Research",
            icon: TrendingUp,
            color: "bg-green-500",
            details: ".",
            url: "https://github.com/angelgr29/Attrition-forecast",
            image: "attrition.png"
          }
        ]
    },
    es: {
      title: "Proyectos & Investigación",
      subtitle: "Soluciones basadas en datos e iniciativas innovadoras",
      projects: [
        {
          title: "PROData",
          description: "PROData es una plataforma moderna de análisis de datos que ayuda a las empresas a transformar archivos dispersos y sin procesar en insights limpios y estructurados. Al combinar automatización, visualización y asistencia impulsada por IA, empodera a las PYMEs y equipos más grandes para tomar decisiones más inteligentes y sostenibles, impulsando la eficiencia, transparencia y crecimiento.",
          framework: ["Trabajo Decente y Crecimiento Económico", "Industria, Innovación e Infraestructura", "Emprendimiento"],
          status: "Start-up en Desarrollo",
          icon: Database,
          color: "bg-purple-500",
          details: ".",
          url: "https://prodatadev.vercel.app",
          image: "prodata.png"
        },
        {
          title: "Desigualdad del agua en México",
          description: "Esta investigación tiene como objetivo explorar la conexión entre marginación social, urbanización y contaminación industrial del agua en México, revelando que la contaminación se concentra en áreas más urbanizadas y marginadas y subrayando la importancia de la planificación urbana sostenible para salvaguardar la calidad del agua.",
          framework: ["R", "Agua Limpia y Saneamiento", "Reducción de Desigualdades"],
          status: "Investigación",
          icon: Droplet,
          color: "bg-blue-500",
          details: ".",
          url: "https://repositorio-digital.cide.edu/handle/11651/5670",
          image: "water_pollution.png"
        },
        {
          title: "Programa de Ciencia de Datos British Airways",
          description: "Este programa con British Airways se enfocó en desafíos reales de ciencia de datos, incluyendo pronósticos de demanda de salas VIP en la Terminal 3 de Heathrow y construcción de modelos predictivos para identificar futuros viajeros de vacaciones, proporcionando una visión práctica de la toma de decisiones basada en datos en la industria aeronáutica.",
          framework: ["Python", "Análisis Estadístico", "Analytics de Clientes"],
          status: "Programa",
          icon: PlaneTakeoff,
          color: "bg-orange-500",
          details: ".",
          url: "https://github.com/angelgr29/British_Airways_Program",
          image: "BAP.png"
        },
        {
          title: "Predicción de Rotación de Empleados - Estudio de Caso",
          description: "Esta investigación tiene como objetivo analizar la rotación de empleados aplicando modelos de clasificación de machine learning para identificar los factores clave que impulsan la renuncia voluntaria, encontrando qué modelo logra el mejor rendimiento y destacando la importancia de estrategias como desarrollo profesional, beneficios y flexibilidad laboral para mejorar la retención de talento.",
          framework: ["Machine Learning", "R", "Trabajo Decente y Crecimiento Económico"],
          status: "Investigación",
          icon: TrendingUp,
          color: "bg-green-500",
          details: ".",
          url: "https://github.com/angelgr29/Attrition-forecast",
          image: "attrition.png"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
          
          {/* SDG Goals Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src="/images/sdg-goals.png" 
              alt="Sustainable Development Goals"
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${project.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' || project.status === 'Completado' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'In Progress' || project.status === 'En Progreso'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Project Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <div 
                        className="relative overflow-hidden rounded-lg cursor-pointer group/image"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <img 
                          src={`/images/${project.image}`}
                          alt={project.title}
                          className="w-full h-48 object-cover object-top blur-sm hover:blur-none transition-all duration-300 group-hover/image:scale-105"
                          onError={(e) => {
                            // Fallback to a placeholder if image doesn't exist
                            e.target.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#f3f4f6"/>
                                <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">
                                  ${project.title}
                                </text>
                              </svg>
                            `)}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        {language === 'en' ? 'Framework:' : 'Marco de trabajo:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.framework.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Learn More' : 'Saber Más'}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          // In a real implementation, this would link to GitHub
                          alert(language === 'en' ? 'GitHub repository would open here' : 'El repositorio de GitHub se abriría aquí');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
