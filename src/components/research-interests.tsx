interface ResearchInterestsProps {
  interests: string[];
}

export default function ResearchInterests({
  interests,
}: ResearchInterestsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Research Interests
      </h2>
      <ul className="list-none flex flex-wrap gap-3 justify-center lg:justify-start">
        {interests.map((interest, index) => (
          <li
            key={index}
            className="bg-gray-50 px-4 py-2 rounded-2xl text-sm text-gray-700 border border-gray-200"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
