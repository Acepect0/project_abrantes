import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tag, MapPin } from "lucide-react";

const promotions = [
  {
    id: 1,
    shop: "Padaria São Pedro",
    title: "20% em pão artesanal",
    description: "Todos os dias até às 11h",
    discount: "20% OFF",
    category: "Padaria",
    location: "Centro Histórico",
    image:
      "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJha2VyeSUyMGJyZWFkfGVufDF8fHx8MTc2NzM0NDEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    shop: "Mercearia da Vila",
    title: "Produtos locais frescos",
    description: "Frutas e vegetais da região",
    discount: "15% OFF",
    category: "Mercearia",
    location: "Rossio",
    image:
      "https://images.unsplash.com/photo-1761207299529-b88dbc8aa01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMHByb2R1Y2V8ZW58MXx8fHwxNzY3MzY3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    shop: "Café Central",
    title: "Café + pastel de nata",
    description: "Combo especial da manhã",
    discount: "€2.50",
    category: "Café",
    location: "Praça",
    image:
      "https://images.unsplash.com/photo-1643944460517-58de76929473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY296eXxlbnwxfHx8fDE3NjcyODE3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    shop: "Livraria Moderna",
    title: "Livros portugueses",
    description: "Autores locais em destaque",
    discount: "10% OFF",
    category: "Livraria",
    location: "Rua Principal",
    image:
      "https://images.unsplash.com/photo-1691380302819-d103d07af79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjczNTAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Promotions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-gray-900 mb-2">
              Promoções em destaque
            </h2>
            <p className="text-gray-600">
              Ofertas especiais do comércio local
            </p>
          </div>
          <button className="text-emerald-600 hover:text-emerald-700 hidden md:block">
            Ver todas →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={promo.image}
                  alt={promo.shop}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-red-500 text-white hover:bg-red-600">
                    <Tag className="w-3 h-3 mr-1" />
                    {promo.discount}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {promo.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {promo.location}
                  </div>
                </div>
                <h3 className="text-gray-900 mb-1">{promo.shop}</h3>
                <p className="text-sm text-gray-900 mb-1">{promo.title}</p>
                <p className="text-xs text-gray-500">{promo.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <button className="text-emerald-600 hover:text-emerald-700">
            Ver todas as promoções →
          </button>
        </div>
      </div>
    </section>
  );
}
