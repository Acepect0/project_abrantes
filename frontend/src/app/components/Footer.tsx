import { ShoppingBag, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-emerald-500" />
              <span className="text-white">Compro Local</span>
            </div>
            <p className="text-sm mb-4">
              A marketplace que conecta Abrantes com o seu comércio local.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Abrantes, Portugal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Explorar Lojas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Promoções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="text-white mb-4">Para Negócios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Registar Loja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  FAQ Comerciantes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a
                  href="mailto:info@comprolocal.pt"
                  className="hover:text-emerald-500 transition-colors"
                >
                  info@comprolocal.pt
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a
                  href="tel:+351241000000"
                  className="hover:text-emerald-500 transition-colors"
                >
                  +351 241 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© 2026 Compro Local. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
