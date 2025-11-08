import { useState } from "react";
import { utils, type PersonalInfo } from "../data/portfolioData";

interface HeaderProps {
  personal: PersonalInfo;
}

export default function Header({ personal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle internal links (those starting with #)
    if (!href.startsWith("#")) return;

    e.preventDefault();
    closeMenu();

    // Get the target element
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate header height
      const header = document.querySelector("nav");
      const headerHeight = header ? header.offsetHeight : 80;

      // Calculate the position to scroll to (element position minus header height)
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // Extra 20px padding

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: personal.blog, label: "Blog", external: true },
    { href: "#news", label: "News" },
    { href: "#publications", label: "Publications" },
    { href: "#experience", label: "Experience" },
    { href: personal.cv, label: "CV", external: true },
  ];

  return (
    <nav className="border-b border-gray-200 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a
            href="#"
            className="text-xl font-semibold text-gray-900 no-underline shrink-0"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            {utils.formatName(false)}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-8 lg:gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 text-sm lg:text-base"
                  onClick={(e) => link.href && handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col space-y-3 py-4 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block px-4 py-2 text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  onClick={(e) => link.href && handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
