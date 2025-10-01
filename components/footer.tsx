"use client"

import { Recycle, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Recycle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">Sucatinha da Hora</h3>
                <p className="text-sm text-gray-400">SH</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformando materiais usados em oportunidades. Sustentabilidade e eficiência em cada negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Compra de Sucatas Metálicas</li>
              <li>Venda de Materiais Reciclados</li>
              <li>Serviços de Frete</li>
              <li>Mudanças e Transporte</li>
              <li>Coleta de Materiais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Telefone</p>
                  <a href="tel:+5511987654321" className="text-white hover:text-primary transition-colors">
                    (11) 98765-4321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">E-mail</p>
                  <a
                    href="mailto:contato@sucatinhadahora.com.br"
                    className="text-white hover:text-primary transition-colors break-all"
                  >
                    contato@sucatinhadahora.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Endereço</p>
                  <p className="text-white">
                    Rua das Indústrias, 123
                    <br />
                    São Paulo, SP
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sucatinha da Hora SH. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
