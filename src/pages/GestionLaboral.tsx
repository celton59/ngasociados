import { FileText, Users, Calculator, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const services = [
  {
    icon: FileText,
    title: 'Nóminas y Contratos',
    description: 'Gestión integral de nóminas y contratos laborales, adaptados a la normativa vigente.'
  },
  {
    icon: Users,
    title: 'Seguridad Social',
    description: 'Tramitación de altas, bajas y variaciones. Gestión de bonificaciones y subvenciones.'
  },
  {
    icon: Calculator,
    title: 'Asesoría Laboral',
    description: 'Consultoría especializada en derecho laboral y relaciones con los trabajadores.'
  },
  {
    icon: Clock,
    title: 'Control Horario',
    description: 'Implementación y gestión de sistemas de registro de jornada laboral.'
  }
];

const benefits = [
  'Cumplimiento normativo garantizado',
  'Ahorro de tiempo y recursos',
  'Minimización de errores',
  'Asesoramiento continuo',
  'Gestión digital integrada',
  'Atención personalizada'
];

export default function GestionLaboral() {
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
              Gestión Laboral
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Soluciones integrales para la gestión de recursos humanos y 
              cumplimiento de obligaciones laborales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Laborales
            </h2>
            <p className="text-xl text-gray-600">
              Gestión profesional y personalizada para tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-blue-100 transition-all">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ventajas de Nuestro Servicio
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-700 mt-1 mr-3" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Gestión Laboral"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas ayuda con la gestión laboral?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contacta con nosotros y te asesoraremos sin compromiso
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}