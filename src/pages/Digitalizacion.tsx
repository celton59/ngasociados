import { Laptop, Cloud, Shield, Zap, CheckCircle, ArrowRight, MonitorSmartphone, FileText, BarChart } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Accede a tus datos desde cualquier lugar y dispositivo con total seguridad.',
    benefits: [
      'Acceso 24/7 desde cualquier dispositivo',
      'Copias de seguridad automáticas',
      'Sincronización en tiempo real',
      'Reducción de costes en infraestructura'
    ]
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Protección de datos y copias de seguridad automatizadas.',
    benefits: [
      'Encriptación de datos',
      'Autenticación de doble factor',
      'Cumplimiento RGPD',
      'Monitorización 24/7'
    ]
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Optimiza procesos y reduce tareas manuales repetitivas.',
    benefits: [
      'Flujos de trabajo automatizados',
      'Reducción de errores humanos',
      'Mayor productividad',
      'Integración entre sistemas'
    ]
  }
];

const solutions = [
  {
    title: 'A3 Software',
    description: 'Suite completa para gestión contable, fiscal y laboral.',
    features: [
      'Contabilidad integrada',
      'Gestión de nóminas',
      'Declaraciones fiscales',
      'Análisis financiero'
    ],
    benefits: [
      'Actualización automática de normativas',
      'Soporte técnico especializado',
      'Integración con administraciones públicas',
      'Informes personalizados'
    ]
  },
  {
    title: 'Holded',
    description: 'Plataforma cloud para gestión empresarial integral.',
    features: [
      'Facturación electrónica',
      'Control de inventario',
      'CRM integrado',
      'Gestión de proyectos'
    ],
    benefits: [
      'Interface intuitiva',
      'App móvil disponible',
      'Actualizaciones continuas',
      'Múltiples integraciones'
    ]
  }
];

const steps = [
  {
    icon: FileText,
    title: 'Análisis Inicial',
    description: 'Evaluamos tus necesidades y procesos actuales.'
  },
  {
    icon: BarChart,
    title: 'Plan Personalizado',
    description: 'Diseñamos una estrategia de digitalización a medida.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Implementación',
    description: 'Instalación y configuración de las soluciones.'
  },
  {
    icon: Laptop,
    title: 'Formación',
    description: 'Capacitación completa para tu equipo.'
  }
];

export default function Digitalizacion() {
  const [activeTab, setActiveTab] = useState(0);
  
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
              Digitalización Empresarial
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transformamos tu negocio con soluciones digitales avanzadas para 
              optimizar la gestión y aumentar la productividad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
              >
                Solicitar Demostración
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-700 transition-colors"
              >
                Ver Proceso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proceso de Digitalización
            </h2>
            <p className="text-xl text-gray-600">
              Un enfoque estructurado para tu transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-100 transform translate-x-1/2">
                      <div className="absolute top-1/2 right-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-100 transition-all relative z-10">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ventajas de la Digitalización
            </h2>
            <p className="text-xl text-gray-600">
              Moderniza tu empresa con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-100 transition-all">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-1 mr-2" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras Soluciones
            </h2>
            <p className="text-xl text-gray-600">
              Software especializado para cada necesidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="flex mb-6">
                  <button
                    className={`flex-1 py-2 px-4 text-sm font-medium ${
                      activeTab === 0 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'
                    } rounded-l-md focus:outline-none transition-colors`}
                    onClick={() => setActiveTab(0)}
                  >
                    Características
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 text-sm font-medium ${
                      activeTab === 1 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'
                    } rounded-r-md focus:outline-none transition-colors`}
                    onClick={() => setActiveTab(1)}
                  >
                    Beneficios
                  </button>
                </div>

                <ul className="space-y-3">
                  {(activeTab === 0 ? solution.features : solution.benefits).map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-700 mt-1 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para digitalizar tu empresa?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contacta con nosotros y te ayudaremos a elegir la mejor solución para tu negocio
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