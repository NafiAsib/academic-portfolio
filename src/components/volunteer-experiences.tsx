import type { VolunteerItem } from "../data/portfolioData";

interface VolunteerExperienceProps {
  volunteer: VolunteerItem[];
}

export default function VolunteerExperience({
  volunteer,
}: VolunteerExperienceProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Volunteer Experience
      </h2>
      {volunteer.map((item, index) => (
        <div
          key={index}
          className="mb-8 pb-7 border-b border-gray-100 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.role}
          </h3>
          <p className="text-base font-medium text-gray-600 mb-1">
            {item.organization}
          </p>
          <p className="text-sm text-gray-500 mb-1">{item.date}</p>
          {item.location && (
            <p className="text-sm text-gray-500 mb-2">{item.location}</p>
          )}
          <p className="text-sm text-gray-600 leading-normal mb-4">
            {item.description}
          </p>
          {item.achievements && item.achievements.length > 0 && (
            <div className="mt-4">
              <span className="text-sm font-semibold text-gray-700 mb-2 block">
                Key Achievements:
              </span>
              <ul className="list-none m-0 p-0">
                {item.achievements.map(
                  (achievement: string, achIndex: number) => (
                    <li
                      key={achIndex}
                      className="relative pl-5 mb-2 text-sm text-gray-600 leading-normal before:content-['→'] before:absolute before:left-0 before:text-green-600 before:font-semibold"
                    >
                      {achievement}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
