import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { services } from "@/data/services";
import type { Service } from "@/types";
import { Mic, Video, Camera, Scissors, Film, Building2 } from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Podcast Production": Mic,
  "Promotional Video": Film,
  "Video Recording": Video,
  "Video & Photography": Camera,
  "Video Editing": Scissors,
  "Studio Rent": Building2,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.title] || Video;
  return (
    <Card>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#d2a153]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{service.description}</p>
      <a
        href="#contact"
        className="mt-4 inline-block border-b border-white/20 text-sm text-[#f5d59a] hover:text-[#d2a153] hover:border-[#d2a153] transition-all"
      >
        Learn more
      </a>
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
