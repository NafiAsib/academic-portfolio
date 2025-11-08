import type { EducationItem } from "../data/portfolioData";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="section">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div key={index} className="education-item">
          <h3>{item.degree}</h3>
          <p className="institution">{item.institution}</p>
          <p className="date">{item.date}</p>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
