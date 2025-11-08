interface Award {
  title: string;
}

interface AwardsProps {
  awards: Award[];
}

export default function Awards({ awards }: AwardsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Awards & Honors
      </h2>
      <ul className="list-none">
        {awards.map((award, index) => (
          <li
            key={index}
            className="py-3 border-b border-gray-100 text-gray-700 last:border-b-0"
          >
            {award.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
