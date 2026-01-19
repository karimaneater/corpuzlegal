import { Button } from "@/app/components/ui/button";
import { Menu, X, Scale } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-semibold text-gray-900">Sterling & Associates</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </a>
            <a href="#practice-areas" className="text-gray-700 hover:text-blue-900 transition-colors">
              Practice Areas
            </a>
            <a href="#attorneys" className="text-gray-700 hover:text-blue-900 transition-colors">
              Our Attorneys
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </a>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#practice-areas"
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </a>
            <a
              href="#attorneys"
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Attorneys
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-blue-900 hover:bg-blue-800">
              Free Consultation
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
