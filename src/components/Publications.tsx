import type { Publication } from "../data/portfolioData";

interface PublicationsProps {
  publications: Publication[];
}

// SVG Icons for badges
const PaperIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
  </svg>
);

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
  </svg>
);

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section className="section">
      <h2>Publications</h2>
      {publications.map((pub, index) => (
        <div key={index} className="publication">
          <h3>{pub.title}</h3>
          <p
            className="authors"
            dangerouslySetInnerHTML={{ __html: pub.authors }}
          />
          <p className="venue">
            <em>{pub.venue}</em>
          </p>
          <p className="year">{pub.year}</p>

          {/* Publication Badges */}
          {(pub.pdf || pub.code || pub.data) && (
            <div className="publication-badges">
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-badge paper"
                >
                  <PaperIcon />
                  Paper
                </a>
              )}

              {pub.code && (
                <a
                  href={pub.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-badge code"
                >
                  <CodeIcon />
                  Code
                </a>
              )}

              {pub.data && (
                <a
                  href={pub.data}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-badge data"
                >
                  <DataIcon />
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
