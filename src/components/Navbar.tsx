import { Menu, X, Scale, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const services = [
    { name: 'Constitución de Sociedades', path: '/constitucion-sociedades' },
    { name: 'Digitalización', path: '/digitalizacion' },
    { name: 'Gestión Laboral', path: '/gestion-laboral' },
    { name: 'Gestión Fiscal', path: '/gestion-fiscal' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150); // Small delay before closing
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-700" />
              <span className="text-2xl font-bold text-gray-900">NG & Asociados</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-700' : 'text-gray-700'} hover:text-blue-700 transition-colors`}
            >
              Inicio
            </Link>
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center ${location.pathname.includes('/') ? 'text-blue-700' : 'text-gray-700'} hover:text-blue-700 transition-colors`}
                onClick={() => setShowServices(!showServices)}
              >
                Servicios
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {showServices && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-2 ${isActive(service.path) ? 'text-blue-700 bg-blue-50' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-700`}
                      onClick={() => setShowServices(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="/#equipo" className="text-gray-700 hover:text-blue-700 transition-colors">Equipo</a>
            <a href="/#blog" className="text-gray-700 hover:text-blue-700 transition-colors">Blog</a>
            <a href="/#contacto" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              Contactar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className={`block px-3 py-2 ${isActive('/') ? 'text-blue-700' : 'text-gray-700'} hover:text-blue-700`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className={`block px-3 py-2 pl-6 ${isActive(service.path) ? 'text-blue-700 bg-blue-50' : 'text-gray-700'} hover:text-blue-700`}
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <a 
              href="/#equipo" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Equipo
            </a>
            <a 
              href="/#blog" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/#contacto" 
              className="block px-3 py-2 bg-blue-700 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}