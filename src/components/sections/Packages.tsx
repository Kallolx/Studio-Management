import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { packages } from "@/data/packages";
import type { Package } from "@/types";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{pkg.title}</h3>
        {pkg.popular && <Badge>Popular</Badge>}
      </div>
      <p className="mt-2 text-sm text-neutral-400">{pkg.description}</p>
      <div className="mt-4 border-y border-white/10 py-4 text-base text-white font-semibold">
        {pkg.price}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2a153]" />
            {f}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="mt-6 w-full">
        Choose Package
      </Button>
    </Card>
  );
}

export function Packages() {
  return (
    <section id="packages" className="border-t border-white/10 py-20">
      <Container>
        <SectionHeading
          label="Packages"
          title="Simple packages. Powerful results."
          description="Choose a package that fits your project. Custom options available on request."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <PackageCard key={p.title} pkg={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
