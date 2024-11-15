import { Users, Trophy, Building, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 25,
    suffix: '+',
    label: 'Años de Experiencia',
    description: 'Asesorando empresas con éxito'
  },
  {
    icon: Trophy,
    value: 20,
    suffix: '+',
    label: 'Años Digitalizando',
    description: 'Pioneros en transformación digital'
  },
  {
    icon: Building,
    value: 1000,
    suffix: '+',
    label: 'Clientes Satisfechos',
    description: 'Confían en nuestros servicios'
  },
  {
    icon: Star,
    value: 2,
    label: 'Colegios Oficiales',
    description: 'Garantía de profesionalidad'
  },
];

const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={countRef} className="text-4xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-xl text-blue-100">
            Experiencia y resultados que hablan por sí mismos
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <Icon className="h-10 w-10 mx-auto mb-4 text-blue-200" />
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-blue-200 mt-2 text-lg font-medium">{stat.label}</p>
                <p className="text-blue-200/80 text-sm mt-1">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}