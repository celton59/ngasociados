import { Building2, FileText, Shield, TrendingUp, Users, MonitorSmartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import CostCalculator from '../components/CostCalculator';

const services = [
  {
    icon: FileText,
    title: 'Plan de Negocio',
    features: [
      'Análisis de viabilidad económica',
      'Proyecciones financieras',
      'Estrategia de mercado',
      'Análisis de competencia'
    ]
  },
  {
    icon: Building2,
    title: 'Paquete de Inicio',
    features: [
      'Domicilio social gratuito 1er año',
      'Gestión de licencias y permisos',
      'Alta en Seguridad Social',
      'Registro de marca básico'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Financiación y Ayudas',
    features: [
      'Búsqueda de subvenciones',
      'Negociación bancaria',
      'Planes de inversión',
      'Optimización fiscal inicial'
    ]
  },
  {
    icon: Shield,
    title: 'Protección Legal',
    features: [
      'Pacto de socios',
      'Protección de datos (RGPD)',
      'Contratos mercantiles básicos',
      'Asesoría legal 3 meses'
    ]
  },
  {
    icon: MonitorSmartphone,
    title: 'Digitalización Inicial',
    features: [
      'Software de gestión básico',
      'Firma digital',
      'Facturación electrónica',
      'Alta en plataformas digitales'
    ]
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    features: [
      'Plantillas de contratos',
      'Manual del empleado',
      'Políticas internas básicas',
      'Prevención de riesgos'
    ]
  }
];

const steps = [
  {
    title: 'Certificación Negativa',
    description: 'Obtención del certificado de nombre disponible en el Registro Mercantil.'
  },
  {
    title: 'Estatutos Sociales',
    description: 'Redacción de los estatutos que regirán el funcionamiento de la sociedad.'
  },
  {
    title: 'Escritura Pública',
    description: 'Firma ante notario de la escritura de constitución.'
  },
  {
    title: 'Trámites Fiscales',
    description: 'Obtención del NIF y alta en obligaciones fiscales.'
  },
  {
    title: 'Registro Mercantil',
    description: 'Inscripción de la sociedad en el Registro Mercantil.'
  },
  {
    title: 'Trámites Laborales',
    description: 'Alta en Seguridad Social y trámites laborales necesarios.'
  }
];

export default function ConstitucionSociedades() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Constitución de Sociedades
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Te ayudamos a crear tu empresa con todas las garantías legales y la máxima agilidad
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
            >
              Solicitar Información
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calcula el Coste
            </h2>
            <p className="text-xl text-gray-600">
              Obtén una estimación instantánea del coste de constitución de tu sociedad
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proceso de Constitución
            </h2>
            <p className="text-xl text-gray-600">
              Te acompañamos en cada paso del proceso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios de Valor Añadido
            </h2>
            <p className="text-xl text-gray-600">
              Más allá de la constitución, te ayudamos a impulsar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-1 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para crear tu empresa?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contacta con nosotros y te guiaremos en todo el proceso
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
            >
              Empezar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}