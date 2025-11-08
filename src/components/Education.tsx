import type { EducationItem } from "../data/portfolioData";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Education
      </h2>
      {education.map((item, index) => (
        <div
          key={index}
          className="mb-8 pb-7 border-b border-gray-100 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.degree}
          </h3>
          <p className="text-base font-medium text-gray-600 mb-1 dynamic-content">
            <span dangerouslySetInnerHTML={{ __html: item.institution }} />
          </p>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-sm text-gray-600 leading-normal mb-3">
            <span className="font-semibold">Result</span>{" "}
            <span dangerouslySetInnerHTML={{ __html: item.gpa }} />
          </p>

          {item.thesis && (
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Undergrad Thesis:</span>{" "}
              {item.thesis}
            </p>
          )}

          {item.coursework && item.coursework.length > 0 && (
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-700 mb-2 block">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {item.coursework.map((course, courseIndex) => (
                  <span
                    key={courseIndex}
                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.extracurricular && item.extracurricular.length > 0 && (
            <div className="mt-4">
              <span className="text-sm font-semibold text-gray-700 mb-2 block">
                Extracurricular Activities:
              </span>
              <ul className="list-none m-0 p-0">
                {item.extracurricular.map((activity, actIndex) => (
                  <li
                    key={actIndex}
                    className="relative pl-5 mb-2 text-sm text-gray-600 leading-normal before:content-['→'] before:absolute before:left-0 before:text-gray-700 before:font-semibold"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
