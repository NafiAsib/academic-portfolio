import { BracesIcon, DatabaseIcon, StickyNoteIcon } from "lucide-react";
import type { Publication } from "../data/portfolioData";

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Publications
      </h2>
      {publications.map((pub, index) => (
        <div
          key={index}
          className="mb-8 pb-7 border-b border-gray-100 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
            {pub.title}
          </h3>
          <p
            className="text-sm text-gray-600 mb-1 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: pub.authors }}
          />
          <p className="text-sm text-gray-500 italic mb-3">
            <em
              className="dynamic-content"
              dangerouslySetInnerHTML={{ __html: pub.venue }}
            />{" "}
            | {pub.year}
          </p>

          {(pub.pdf || pub.code || pub.data) && (
            <div className="flex gap-2 flex-wrap">
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium no-underline rounded-xl transition-all duration-200 border bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <StickyNoteIcon className="w-3 h-3" />
                  Paper
                </a>
              )}

              {pub.code && (
                <a
                  href={pub.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium no-underline rounded-xl transition-all duration-200 border bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <BracesIcon className="w-3 h-3" />
                  Code
                </a>
              )}

              {pub.data && (
                <a
                  href={pub.data}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium no-underline rounded-xl transition-all duration-200 border bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <DatabaseIcon className="w-3 h-3" />
                  Data
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
