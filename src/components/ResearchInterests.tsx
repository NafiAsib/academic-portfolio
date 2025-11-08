interface ResearchInterestsProps {
  interests: string[];
}

export default function ResearchInterests({
  interests,
}: ResearchInterestsProps) {
  return (
    <section className="section">
      <h2>Research Interests</h2>
      <ul className="research-list">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}
