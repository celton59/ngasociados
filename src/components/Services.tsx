import { Calculator, FileSpreadsheet, FileText, Users, Building2, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Calculator,
    title: 'Gestión Contable',
    description: 'Optimiza tu contabilidad y reduce costes operativos hasta un 40%. Digitalización completa con A3 y Holded.',
    benefits: ['Ahorro de tiempo', 'Control total', 'Informes en tiempo real'],
    link: '/gestion-fiscal'
  },
  {
    icon: FileSpreadsheet,
    title: 'Gestión Laboral',
    description: 'Gestión integral de nóminas y personal. Ahorra 15 horas semanales en tareas administrativas.',
    benefits: ['Nóminas automatizadas', 'Cumplimiento legal', 'Gestión de personal'],
    link: '/gestion-laboral'
  },
  {
    icon: FileText,
    title: 'Gestión Fiscal',
    description: 'Maximiza tus beneficios con una planificación fiscal óptima. Evita sanciones y optimiza impuestos.',
    benefits: ['Ahorro fiscal', 'Seguridad jurídica', 'Asesoramiento continuo'],
    link: '/gestion-fiscal'
  },
  {
    icon: Users,
    title: 'Constitución de Sociedades',
    description: 'Crea tu empresa en tiempo récord con todas las garantías. Incluye domicilio fiscal el primer año.',
    benefits: ['Proceso completo', 'Rapidez', 'Asesoramiento inicial'],
    link: '/constitucion-sociedades'
  },
  {
    icon: Building2,
    title: 'Digitalización',
    description: 'Transforma tu negocio con soluciones digitales a medida. Incrementa la productividad un 30%.',
    benefits: ['Automatización', 'Eficiencia', 'Control total'],
    link: '/digitalizacion'
  },
  {
    icon: Shield,
    title: 'Servicios Adicionales',
    description: 'Protege y optimiza tu negocio con servicios complementarios especializados.',
    benefits: ['Protección legal', 'Gestión integral', 'Soporte continuo'],
    link: '/gestion-fiscal'
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('appear');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluciones que Impulsan tu Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimiza, automatiza y haz crecer tu empresa con nuestros servicios especializados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="fade-in">
                <Link to={service.link} className="block">
                  <div className="service-card group">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-700 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Descubre más</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            Solicita tu Consulta Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}