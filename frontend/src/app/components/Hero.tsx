import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">
              ✨ Apoie o comércio local
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900">
              Descubra as melhores lojas de{" "}
              <span className="text-emerald-600">Abrantes</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Conecte-se com comerciantes locais, encontre ofertas exclusivas e
              fortaleça a sua comunidade. Tudo num só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Começar a explorar
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Registar a minha loja
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Lojas locais</div>
              </div>
              <div>
                <div className="text-2xl text-gray-900">2.5k+</div>
                <div className="text-sm text-gray-600">Clientes ativos</div>
              </div>
              <div>
                <div className="text-2xl text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Categorias</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766853927873-d5e505072a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0dWd1ZXNlJTIwbG9jYWwlMjBzaG9wfGVufDF8fHx8MTc2NzM2NzIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Local shop in Abrantes"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <div className="text-sm text-gray-900">Novas promoções</div>
                  <div className="text-xs text-gray-500">Todos os dias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
