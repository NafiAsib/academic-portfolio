import type { CompetitionItem } from "../data/portfolioData";

interface CompetitionsProps {
  competitions: CompetitionItem[];
}

export default function Competitions({ competitions }: CompetitionsProps) {
  return (
    <section className="mb-16 md:mb-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900 md:text-xl">
        Competitions & Achievements
      </h2>
      {competitions.map((item, index) => (
        <div
          key={index}
          className="mb-5 pb-5 border-b border-gray-100 last:border-b-0"
        >
          <p
            className="m-0 text-sm text-gray-700 leading-relaxed [&_strong]:text-gray-900 [&_strong]:font-semibold [&_em]:text-gray-600 [&_em]:italic dynamic-content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      ))}
    </section>
  );
}
