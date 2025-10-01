export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold">Women in Aerospace Canada</h3>
          <p>Ontario, Canada</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p>info@wia-canada.org</p>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent">Facebook</a></li>
            <li><a href="#" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-[#1f2a36]">
        © {new Date().getFullYear()} WIA‑Canada. All Rights Reserved.
      </div>
    </footer>
  );
}
