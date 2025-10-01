"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Recycle,
  Truck,
  Cpu,
  Armchair,
  Wind,
  Droplet,
  Package,
  Home,
} from "lucide-react";

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mainServices = [
    {
      icon: Recycle,
      title: "Compra e Venda de Sucatas",
      description:
        "Compramos todos os tipos de sucatas metálicas: cobre, alumínio, ferro, aço, latão e muito mais. Avaliação justa e pagamento na hora.",
      materials: [
        { icon: Cpu, name: "Eletrônicos" },
        { icon: Armchair, name: "Móveis" },
        { icon: Wind, name: "Ar-condicionado" },
        { icon: Droplet, name: "Bebedouros" },
      ],
    },
    {
      icon: Truck,
      title: "Frete e Transporte",
      description:
        "Serviços completos de mudanças, entregas e transporte de materiais. Equipe qualificada, veículos adequados e pontualidade garantida.",
      materials: [
        { icon: Package, name: "Entregas" },
        { icon: Home, name: "Mudanças" },
        { icon: Recycle, name: "Coleta" },
        { icon: Truck, name: "Transporte" },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Soluções completas para suas necessidades
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos dois serviços principais com excelência e compromisso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.materials.map((material, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                    >
                      <material.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-dark">
                        {material.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-dark hover:bg-dark/90 text-white"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-dark rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Pronto para fazer negócio?
          </h3>
          <p className="text-gray-500 text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma avaliação gratuita. Estamos
            prontos para atender você!
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 cursor-pointer"
          >
            Fale Conosco Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
