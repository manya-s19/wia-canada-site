import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data.events))
      .catch(err => console.error("Failed to load events:", err));
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Women in Aerospace Canada</h1>
          <p className="text-lg mb-6">
            Expanding women’s opportunities for leadership and professional development in aerospace.
          </p>
          <a href="/membership" className="inline-block bg-white text-accent px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100">
            Join / Renew
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map(evt => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
