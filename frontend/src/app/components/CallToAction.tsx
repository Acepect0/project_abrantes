import { Button } from "./ui/button";
import { Store, Users } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Customers */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Para Clientes</h3>
            <p className="text-gray-600 mb-6">
              Crie a sua conta gratuita e comece a descobrir lojas locais,
              promoções exclusivas e apoie a sua comunidade.
            </p>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Criar conta gratuita
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Sem custos · Registo em 30 segundos
            </p>
          </div>

          {/* For Shop Owners */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow border-2 border-amber-400">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Store className="w-6 h-6 text-amber-600" />
              </div>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                Destaque o seu negócio
              </span>
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">
              Para Comerciantes
            </h3>
            <p className="text-gray-600 mb-6">
              Registe a sua loja gratuitamente e alcance milhares de clientes
              locais. Publique promoções e aumente as suas vendas.
            </p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Registar a minha loja
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Plano básico gratuito · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
