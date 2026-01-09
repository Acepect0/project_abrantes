import { Shield, MapPin, Heart, Star } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "100% Local",
    description: "Apenas lojas e comerciantes da região de Abrantes",
    color: "text-emerald-600",
  },
  {
    icon: Star,
    title: "Avaliações Verificadas",
    description: "Reviews autênticas de clientes reais da comunidade",
    color: "text-amber-600",
  },
  {
    icon: Heart,
    title: "Apoie o Local",
    description: "Fortaleça a economia e comunidade da sua cidade",
    color: "text-red-600",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Todas as lojas são verificadas pela nossa equipa",
    color: "text-blue-600",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">
            Porquê escolher Compro Local?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A plataforma que une a comunidade de Abrantes aos seus comerciantes
            locais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
