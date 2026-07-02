import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { services } from "@/data/services";
import type { Service } from "@/types";
import { ArrowRight } from "lucide-react";

import { Link } from "@tanstack/react-router";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex items-start gap-5 group">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center">
        <img
          src={service.icon}
          alt={service.title}
          className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.06] group-hover:-translate-y-0.5"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white leading-snug">{service.title}</h3>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {service.description}
        </p>
        <Link
          to="/services/$serviceId"
          params={{ serviceId: service.slug }}
          className="mt-4 inline-flex items-center gap-1 border-b border-transparent text-sm text-[#f5d59a] hover:text-[#d2a153] hover:border-[#d2a153]/40 transition-all self-start pb-0.5"
        >
          <span>Learn more</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-white/10 py-20">
      <Container>
        <SectionHeading
          label="Services"
          title="Creative services for every format."
          description="From podcast production to full video shoots, we cover every stage of content creation."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
