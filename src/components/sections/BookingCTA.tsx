import type { FormEvent } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function BookingCTA() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Booking request:", data);
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-[#d2a153] focus:outline-none transition-colors";

  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#0d0c0e] p-8 md:grid-cols-2 md:p-12 shadow-xl">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-normal text-white md:text-4xl">
              Let's create together.
            </h2>
            <p className="mt-4 text-base text-neutral-400">
              Book your session or talk with our team about your next podcast, video, or content
              production.
            </p>
            <div className="mt-6">
              <Button variant="primary">Book a Session</Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className={inputClass}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              className={inputClass}
              required
            />
            <select
              name="service"
              className={`${inputClass} [&>option]:bg-neutral-900 [&>option]:text-white`}
              defaultValue=""
            >
              <option value="" disabled className="text-neutral-500">
                Select a service
              </option>
              <option>Podcast Production</option>
              <option>Promotional Video</option>
              <option>Video Recording</option>
              <option>Studio Rent</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              className={inputClass}
            />
            <Button type="submit" variant="primary" className="w-full">
              Send Booking Request
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
