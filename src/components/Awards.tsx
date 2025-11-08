import type { Award } from "../data/portfolioData";

interface AwardsProps {
  awards: Award[];
}

export default function Awards({ awards }: AwardsProps) {
  return (
    <section className="section">
      <h2>Awards & Honors</h2>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index}>{award.title}</li>
        ))}
      </ul>
    </section>
  );
}
