"use client"

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nossa Localização</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Venha nos visitar</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos localizados em São Paulo, prontos para atender você
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976545725677!2d-46.63330492377614!3d-23.561684678787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sSão%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1704900000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Sucatinha da Hora SH"
          />
        </div>
      </div>
    </section>
  )
}
