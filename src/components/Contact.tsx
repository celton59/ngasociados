import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'general'
    });

    // Reset status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacte con Nosotros</h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aquí para ayudarle con la gestión de su negocio. Solicite una consulta inicial gratuita.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <a href="tel:960057016" className="text-lg font-medium hover:text-blue-700 transition-colors">
                    960 057 016
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:info@ngasociados.com" className="text-lg font-medium hover:text-blue-700 transition-colors">
                    info@ngasociados.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dirección</p>
                  <div className="text-lg font-medium">
                    <p>Avenida Ojos Negros</p>
                    <p>46520 Puerto de Sagunto</p>
                    <p>Valencia</p>
                  </div>
                  <a 
                    href="https://www.google.com/maps?ll=39.657394,-0.226377&z=13&t=m&hl=es-ES&gl=US&mapclient=embed&q=Av.+Ojos+Negros+46520+Puerto+de+Sagunto+Valencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-gray-600">
                <p>Lunes a Viernes: 9:00 - 14:00</p>
                <p>Sábados y Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">Consulta General</option>
                  <option value="fiscal">Gestión Fiscal</option>
                  <option value="laboral">Gestión Laboral</option>
                  <option value="sociedades">Constitución de Sociedades</option>
                  <option value="digital">Digitalización</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                  Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}