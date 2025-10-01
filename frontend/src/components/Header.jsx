import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">WIA Canada</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link to="/events" className="hover:text-accent">Events</Link>
          <Link to="/articles" className="hover:text-accent">Articles</Link>
          <Link to="/leadership" className="hover:text-accent">Leadership</Link>
          <Link to="/membership" className="hover:text-accent">Membership</Link>
          <Link to="/resources" className="hover:text-accent">Resources</Link>
        </nav>
      </div>
    </header>
  );
}
