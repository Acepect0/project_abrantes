import { Coffee, ShoppingBag, Book, Package, Heart, Store } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  {
    name: "Cafés & Restaurantes",
    icon: Coffee,
    count: 28,
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Moda & Vestuário",
    icon: ShoppingBag,
    count: 35,
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Livrarias & Papelaria",
    icon: Book,
    count: 12,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Mercearias & Padarias",
    icon: Package,
    count: 42,
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Saúde & Bem-estar",
    icon: Heart,
    count: 18,
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Outras Lojas",
    icon: Store,
    count: 15,
    color: "bg-purple-100 text-purple-700",
  },
];

export function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-900 mb-3">
            Explore por categoria
          </h2>
          <p className="text-gray-600">
            Encontre exatamente o que procura no comércio local
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 mb-1">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {category.count} lojas
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
