import type { TestScore } from "../data/portfolioData";

interface TestScoresProps {
  testScores: TestScore[];
}

export default function TestScores({ testScores }: TestScoresProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Test Scores
      </h2>
      {testScores.map((test, index) => (
        <div
          key={index}
          className="mb-8 pb-7 border-b border-gray-100 last:border-b-0"
        >
          <div className="mb-3">
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {test.name}
              </h3>
              <div className="text-2xl font-bold text-gray-900">
                {test.score}
              </div>
            </div>
            {test.type && <p className="text-sm text-gray-500">{test.type}</p>}
          </div>

          {test.components && (
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-700 mb-3 block">
                Component Scores:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {test.components.listening && (
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {test.components.listening}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">
                      Listening
                    </div>
                  </div>
                )}
                {test.components.reading && (
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {test.components.reading}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">
                      Reading
                    </div>
                  </div>
                )}
                {test.components.writing && (
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {test.components.writing}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">
                      Writing
                    </div>
                  </div>
                )}
                {test.components.speaking && (
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      {test.components.speaking}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">
                      Speaking
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {(test.cefrLevel || test.description) && (
            <div className="flex flex-wrap gap-4 items-center">
              {test.cefrLevel && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">
                    CEFR Level:
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {test.cefrLevel}
                  </span>
                </div>
              )}
              {test.description && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {test.description}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
