import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">NG & Asociados</span>
            </div>
            <p className="text-gray-400 mb-4">
              Desde 1998, brindando servicios profesionales de gestión contable, laboral y fiscal 
              para autónomos y Pymes en Puerto de Sagunto, Valencia.
            </p>
            <p className="text-gray-400">
              Miembros del Colegio de Abogados y Economistas de Valencia.
              Colaboradores sociales de la Administración.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-500 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="hover:text-blue-500 transition-colors">Equipo</a></li>
              <li><a href="#blog" className="hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 9:00 - 14:00</li>
              <li>Teléfono: 960 057 016</li>
              <li>Email: info@ngasociados.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NG & Asociados. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}