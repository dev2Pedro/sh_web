"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(86) 98817-5867",
      link: "tel:+5586988175867",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@sucatinhadahora.com.br",
      link: "mailto:contato@sucatinhadahora.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Doze, loteamento Org. Monteiro, 6207 - Teresina, PI",
      link: "#localizacao",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Entre em Contato
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Preencha o formulário ou entre em contato pelos nossos canais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-0 shadow-md bg-dark text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-gray-900">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Segunda - Sexta:</span>
                    <span className="font-medium text-gray-800">8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sábado:</span>
                    <span className="font-medium text-gray-800">8h - 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Domingo:</span>
                    <span className="font-medium text-gray-800">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form
                  id="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(new FormData(e.currentTarget));
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="sucatas">Compra/Venda de Sucatas</option>
                        <option value="frete">Frete e Transporte</option>
                        <option value="ambos">Ambos os Serviços</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-nos mais sobre o que você precisa..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
