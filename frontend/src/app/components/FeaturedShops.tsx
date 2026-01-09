import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Star, MapPin } from "lucide-react";

const featuredShops = [
  {
    id: 1,
    name: "Boutique Elegância",
    category: "Moda Feminina",
    rating: 4.8,
    reviews: 124,
    location: "Rua da Liberdade",
    image:
      "https://images.unsplash.com/photo-1570857502809-08184874388e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzY3MzY3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Café do Teatro",
    category: "Café & Pastelaria",
    rating: 4.9,
    reviews: 203,
    location: "Praça do Teatro",
    image:
      "https://images.unsplash.com/photo-1643944460517-58de76929473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY296eXxlbnwxfHx8fDE3NjcyODE3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Mercearia Tradicional",
    category: "Produtos Locais",
    rating: 4.7,
    reviews: 98,
    location: "Centro Histórico",
    image:
      "https://images.unsplash.com/photo-1761207299529-b88dbc8aa01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMHByb2R1Y2V8ZW58MXx8fHwxNzY3MzY3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function FeaturedShops() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-900 mb-3">Lojas em destaque</h2>
          <p className="text-gray-600">
            Os melhores estabelecimentos avaliados pela comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredShops.map((shop) => (
            <Card
              key={shop.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <div className="bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-900">{shop.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 mb-2">{shop.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{shop.category}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {shop.location}
                  </div>
                  <div>{shop.reviews} avaliações</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
