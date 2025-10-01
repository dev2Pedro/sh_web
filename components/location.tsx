"use client";

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossa Localização
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Venha nos visitar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos localizados em TEresina - PI, prontos para atender você
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[450px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.09449986185894!2d-42.741718654790304!3d-5.059113699924028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3b06f716f75d%3A0xeb7bdad1c28d22c!2sSucatinha%20da%20Hora%20SH!5e0!3m2!1sen!2sbr!4v1759339487293!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
