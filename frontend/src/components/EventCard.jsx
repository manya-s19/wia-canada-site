export default function EventCard({ event }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-4">{event.excerpt}</p>
      <a href={`/events/${event.id}`} className="text-accent font-semibold hover:underline">
        Read More →
      </a>
    </div>
  );
}
