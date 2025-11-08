import { ExternalLink } from "lucide-react";
import type { ExperienceItem } from "../data/portfolioData";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Experiences
      </h2>
      {experience.map((item, index) => (
        <div
          key={index}
          className="mb-5 pb-4 border-b border-gray-100 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.position}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium text-gray-600 mb-1">
              {item.company}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-4 h-4 text-gray-600 no-underline transition-all duration-200 shrink-0 hover:text-gray-900 hover:-translate-y-0.5"
                title={`Visit ${item.company}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          {item.location && (
            <p className="text-sm text-gray-500 mb-1">{item.location}</p>
          )}
          <p className="text-sm text-gray-400 mb-0">{item.date}</p>
          {item.description && (
            <p className="text-sm text-gray-600 leading-normal mt-2">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
