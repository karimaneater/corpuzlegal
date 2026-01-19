import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8" />
              <span className="text-xl">Sterling & Associates</span>
            </div>
            <p className="text-blue-200 mb-4">
              Providing exceptional legal services with integrity, dedication, and expertise since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a>
              </li>
              <li>
                <a href="#attorneys" className="hover:text-white transition-colors">Our Attorneys</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Business Law</li>
              <li>Real Estate</li>
              <li>Family Law</li>
              <li>Estate Planning</li>
              <li>Civil Litigation</li>
              <li>Criminal Defense</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>© 2026 Sterling & Associates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
