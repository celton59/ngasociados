import { useState, useEffect } from 'react';
import { Calculator, Download, Mail } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface CostBreakdown {
  notary: number;
  registry: number;
  tax: number;
  agency: number;
  total: number;
}

const COMPANY_TYPES = {
  sl: {
    name: 'Sociedad Limitada (S.L.)',
    minCapital: 3000,
    notaryBase: 150,
    registryBase: 100,
    taxRate: 0.01,
    agencyBase: 250
  },
  sa: {
    name: 'Sociedad Anónima (S.A.)',
    minCapital: 60000,
    notaryBase: 300,
    registryBase: 200,
    taxRate: 0.01,
    agencyBase: 400
  },
  coop: {
    name: 'Cooperativa',
    minCapital: 3000,
    notaryBase: 150,
    registryBase: 100,
    taxRate: 0.01,
    agencyBase: 300
  },
  sc: {
    name: 'Sociedad Civil',
    minCapital: 0,
    notaryBase: 100,
    registryBase: 80,
    taxRate: 0.01,
    agencyBase: 200
  }
};

export default function CostCalculator() {
  const [companyType, setCompanyType] = useState('sl');
  const [capital, setCapital] = useState(COMPANY_TYPES.sl.minCapital);
  const [includeAgency, setIncludeAgency] = useState(true);
  const [costs, setCosts] = useState<CostBreakdown>({
    notary: 0,
    registry: 0,
    tax: 0,
    agency: 0,
    total: 0
  });

  const calculateCosts = () => {
    const type = COMPANY_TYPES[companyType];
    const notary = type.notaryBase + (capital > type.minCapital ? (capital - type.minCapital) * 0.001 : 0);
    const registry = type.registryBase + (capital > type.minCapital ? (capital - type.minCapital) * 0.0005 : 0);
    const tax = capital * type.taxRate;
    const agency = includeAgency ? type.agencyBase : 0;
    
    setCosts({
      notary: Math.round(notary),
      registry: Math.round(registry),
      tax: Math.round(tax),
      agency: Math.round(agency),
      total: Math.round(notary + registry + tax + agency)
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [companyType, capital, includeAgency]);

  const handleDownload = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = margin;

    // Configuración de estilos
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 153); // Azul corporativo
    
    // Título
    doc.text('Presupuesto de Constitución', pageWidth / 2, y, { align: 'center' });
    y += 15;

    // Información de la empresa
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('NG & Asociados', margin, y);
    y += 7;
    doc.setFontSize(10);
    doc.text('Tel: 960 057 016', margin, y);
    y += 5;
    doc.text('Email: info@ngasociados.com', margin, y);
    y += 10;

    // Línea separadora
    doc.setDrawColor(0, 51, 153);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;

    // Detalles del presupuesto
    doc.setFontSize(12);
    doc.text(`Tipo de Sociedad: ${COMPANY_TYPES[companyType].name}`, margin, y);
    y += 10;
    doc.text(`Capital Social: ${capital.toLocaleString('es-ES')}€`, margin, y);
    y += 15;

    // Tabla de costes
    doc.setFontSize(11);
    const tableData = [
      ['Concepto', 'Importe'],
      ['Gastos Notariales', `${costs.notary.toLocaleString('es-ES')}€`],
      ['Registro Mercantil', `${costs.registry.toLocaleString('es-ES')}€`],
      ['Impuestos (IAJD)', `${costs.tax.toLocaleString('es-ES')}€`],
    ];

    if (includeAgency) {
      tableData.push(['Gestoría', `${costs.agency.toLocaleString('es-ES')}€`]);
    }

    // Dibujar tabla
    const cellPadding = 5;
    const cellHeight = 10;
    const colWidth = (pageWidth - (margin * 2)) / 2;

    tableData.forEach((row, i) => {
      // Fondo gris para la cabecera
      if (i === 0) {
        doc.setFillColor(240, 240, 240);
        doc.rect(margin, y - cellPadding, pageWidth - (margin * 2), cellHeight + (cellPadding * 2), 'F');
      }

      doc.text(row[0], margin + cellPadding, y + 5);
      doc.text(row[1], pageWidth - margin - cellPadding, y + 5, { align: 'right' });
      y += cellHeight;
    });

    y += 5;
    // Total
    doc.setDrawColor(0, 51, 153);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Total Estimado:', margin + cellPadding, y);
    doc.text(`${costs.total.toLocaleString('es-ES')}€`, pageWidth - margin - cellPadding, y, { align: 'right' });

    y += 20;
    // Notas
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Nota: Este es un presupuesto estimado. Los costes finales pueden variar según diversos factores.', margin, y);
    y += 5;
    doc.text('Para más información o un presupuesto personalizado, no dude en contactar con nosotros.', margin, y);

    // Guardar PDF
    doc.save('presupuesto-constitucion.pdf');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-700 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">
          Calculadora de Costes
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Sociedad
          </label>
          <select
            value={companyType}
            onChange={(e) => {
              setCompanyType(e.target.value);
              setCapital(COMPANY_TYPES[e.target.value].minCapital);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.entries(COMPANY_TYPES).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capital Social (€)
          </label>
          <input
            type="number"
            min={COMPANY_TYPES[companyType].minCapital}
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-1 text-sm text-gray-500">
            Mínimo: {COMPANY_TYPES[companyType].minCapital.toLocaleString('es-ES')}€
          </p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeAgency"
            checked={includeAgency}
            onChange={(e) => setIncludeAgency(e.target.checked)}
            className="h-4 w-4 text-blue-700 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="includeAgency" className="ml-2 text-sm text-gray-700">
            Incluir servicios de gestoría
          </label>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Desglose de Costes
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Gastos Notariales</span>
              <span className="font-medium">{costs.notary.toLocaleString('es-ES')}€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Registro Mercantil</span>
              <span className="font-medium">{costs.registry.toLocaleString('es-ES')}€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Impuestos (IAJD)</span>
              <span className="font-medium">{costs.tax.toLocaleString('es-ES')}€</span>
            </div>
            {includeAgency && (
              <div className="flex justify-between">
                <span className="text-gray-600">Gestoría</span>
                <span className="font-medium">{costs.agency.toLocaleString('es-ES')}€</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Estimado</span>
                <span className="text-blue-700">{costs.total.toLocaleString('es-ES')}€</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleDownload}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Descargar Presupuesto PDF
          </button>
          <a
            href="#contacto"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Consultar Dudas
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Nota: Este es un cálculo aproximado. Los costes finales pueden variar según diversos factores.
          Contacte con nosotros para obtener un presupuesto personalizado.
        </p>
      </div>
    </div>
  );
}