import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    title: "Transformamos tu Negocio Digital en Días, no Meses",
    description: "Más de 25 años ayudando a empresas como la tuya a optimizar sus procesos con soluciones digitales efectivas.",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Tu Socio en Digitalización para Alcanzar el Éxito",
    description: "Incrementa tu eficiencia un 30% con nuestras herramientas. Más de 1000 empresas ya confían en nosotros.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Expertos en Hacer Crecer tu Empresa",
    description: "Gestión contable, laboral y fiscal con resultados garantizados. Primera consulta gratuita para evaluar tus necesidades.",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isPaused]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div 
      id="inicio" 
      className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 translate-x-0 z-10' : 
              index < currentSlide ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms] ease-out scale-105"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
              }}
            >
              <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div 
                    className={`inline-flex items-center bg-blue-800/80 backdrop-blur-sm text-blue-200 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-300 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span>¡Llama ahora! Primera consulta gratuita - 960 057 016</span>
                  </div>
                  <h1 
                    className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-500 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className={`text-xl text-gray-200 mb-8 transition-all duration-1000 delay-700 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div 
                    className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <a 
                      href="#contacto"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Solicita tu Diagnóstico Gratuito
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="#servicios"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors"
                    >
                      Descubre Cómo Podemos Ayudarte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/75'
              } h-2 rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}