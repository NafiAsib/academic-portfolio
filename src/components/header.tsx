import { utils, type PersonalInfo } from "../data/portfolioData";

interface HeaderProps {
  personal: PersonalInfo;
}

export default function Header({ personal }: HeaderProps) {
  return (
    <nav className="border-b border-gray-200 py-4 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-semibold text-gray-900 no-underline"
        >
          {utils.formatName(false)}
        </a>
        <ul className="flex list-none gap-8 md:gap-5 sm:gap-4">
          <li>
            <a
              href="#home"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={personal.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#news"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#publications"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 no-underline font-medium transition-colors duration-200 hover:text-gray-900 md:text-sm"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
