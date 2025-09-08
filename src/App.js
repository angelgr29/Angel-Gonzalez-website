import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Travel from './components/Travel';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('en');

  // Save language preference to localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main>
        <Home language={language} />
        <Projects language={language} />
        <Achievements language={language} />
        <Experience language={language} />
        <Travel language={language} />
        <Contact language={language} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Angel Gonzalez</h3>
              <p className="text-gray-400 leading-relaxed">
                {language === 'en' 
                  ? "Data Analyst & Economist passionate about creating positive impact through data-driven solutions and global experiences."
                  : "Analista de Datos & Economista apasionado por crear un impacto positivo a través de soluciones basadas en datos y experiencias globales."
                }
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Home' : 'Inicio'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Experience' : 'Experiencia'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Projects' : 'Proyectos'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Contact' : 'Contacto'}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Connect' : 'Conectar'}
              </h4>
              <div className="space-y-2">
                <p className="text-gray-400">angel.gonzalez@email.com</p>
                <p className="text-gray-400">+52 55 1234 5678</p>
                <p className="text-gray-400">Mexico City, Mexico</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Angel Gonzalez. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
