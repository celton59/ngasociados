import { Calculator, FileText, TrendingUp, Shield, CheckCircle, ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

const services = [
  {
    icon: Calculator,
    title: 'Impuestos Periódicos',
    description: 'Gestión y presentación de IVA, IRPF, IS y otros impuestos obligatorios.'
  },
  {
    icon: FileText,
    title: 'Planificación Fiscal',
    description: 'Optimización fiscal legal para minimizar la carga impositiva de tu negocio.'
  },
  {
    icon: TrendingUp,
    title: 'Consultoría Fiscal',
    description: 'Asesoramiento especializado en operaciones y decisiones empresariales.'
  },
  {
    icon: Shield,
    title: 'Representación',
    description: 'Defensa ante inspecciones y procedimientos tributarios.'
  }
];

const benefits = [
  'Optimización de la carga fiscal',
  'Prevención de contingencias fiscales',
  'Actualización constante en normativa',
  'Ahorro en costes fiscales',
  'Seguridad en el cumplimiento',
  'Planificación estratégica'
];

const taxCalendar = {
  trimestral: [
    {
      model: 'Modelo 303',
      description: 'IVA',
      deadlines: ['20 abril', '20 julio', '20 octubre', '30 enero']
    },
    {
      model: 'Modelo 130',
      description: 'Pago fraccionado IRPF',
      deadlines: ['20 abril', '20 julio', '20 octubre', '30 enero']
    },
    {
      model: 'Modelo 115',
      description: 'Retenciones alquileres',
      deadlines: ['20 abril', '20 julio', '20 octubre', '20 enero']
    },
    {
      model: 'Modelo 111',
      description: 'Retenciones trabajadores',
      deadlines: ['20 abril', '20 julio', '20 octubre', '20 enero']
    }
  ],
  mensual: [
    {
      model: 'Modelo 303',
      description: 'IVA (Grandes empresas)',
      deadline: 'Día 20 del mes siguiente'
    },
    {
      model: 'Modelo 111',
      description: 'Retenciones (Grandes empresas)',
      deadline: 'Día 20 del mes siguiente'
    },
    {
      model: 'Modelo 349',
      description: 'Operaciones intracomunitarias',
      deadline: 'Día 20 del mes siguiente'
    }
  ],
  anual: [
    {
      model: 'Modelo 390',
      description: 'Resumen anual IVA',
      deadline: '30 enero'
    },
    {
      model: 'Modelo 100',
      description: 'IRPF',
      deadline: '20-25 junio'
    },
    {
      model: 'Modelo 200',
      description: 'Impuesto Sociedades',
      deadline: '25 julio'
    },
    {
      model: 'Modelo 347',
      description: 'Operaciones > 3.005,06€',
      deadline: '28 febrero'
    }
  ],
  especial: [
    {
      model: 'Modelo 720',
      description: 'Bienes en el extranjero',
      deadline: '31 marzo'
    },
    {
      model: 'Modelo 179',
      description: 'Alquileres turísticos',
      deadline: 'Trimestral'
    },
    {
      model: 'Modelo 232',
      description: 'Operaciones vinculadas',
      deadline: '30 noviembre'
    }
  ]
};

export default function GestionFiscal() {
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
              Gestión Fiscal
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Optimiza la fiscalidad de tu empresa con nuestro asesoramiento 
              especializado y gestión integral de impuestos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios Fiscales
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones completas para todas tus necesidades fiscales
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
                  Solicitar Asesoramiento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Gestión Fiscal"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calendario Fiscal
            </h2>
            <p className="text-xl text-gray-600">
              Principales modelos y fechas de presentación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(taxCalendar).map(([period, models]) => (
              <div key={period} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-blue-700 mr-2" />
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </h3>
                <div className="space-y-6">
                  {models.map((tax, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{tax.model}</h4>
                          <p className="text-gray-600 text-sm">{tax.description}</p>
                        </div>
                        <div className="text-right">
                          {Array.isArray(tax.deadlines) ? (
                            <div className="text-sm text-gray-600">
                              {tax.deadlines.map((deadline, idx) => (
                                <div key={idx}>{deadline}</div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-sm text-gray-600">{tax.deadline}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-700 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-600 text-sm">
                Este calendario es orientativo. Las fechas exactas pueden variar según el año fiscal y los días hábiles. 
                Consulta con nosotros para confirmar los plazos específicos para tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas ayuda con tus impuestos?
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