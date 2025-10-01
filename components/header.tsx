"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Recycle } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Recycle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark leading-tight">
                Sucatinha da Hora
              </h1>
              <p className="text-xs text-muted-foreground">SH</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-dark hover:text-primary transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-dark hover:text-primary transition-colors cursor-pointer"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-dark hover:text-primary transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-dark hover:text-primary transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              Solicitar Orçamento
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-dark"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
