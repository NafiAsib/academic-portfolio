import "./App.css";
import Education from "./components/Education";
import Publications from "./components/Publications";
import ResearchInterests from "./components/ResearchInterests";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import {
  personal,
  education,
  researchInterests,
  awards,
  contact,
  utils,
} from "./data/portfolioData";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="nav-container">
          <a href="#" className="nav-brand">
            {utils.formatName(false)}
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href={personal.blog} target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href={personal.cv} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </li>
            <li>
              <a href="#misc">Misc</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">{personal.name}</h1>
              <p className="hero-title">{personal.title}</p>
              <p className="hero-email">
                <a href="mailto:nafi.asib@gmail.com">
                  nafi.asib [at] gmail [dot] com
                </a>
              </p>
              <p
                className="hero-about"
                dangerouslySetInnerHTML={{ __html: personal.about }}
              />
              <SocialLinks contact={contact} />
            </div>
            <div className="hero-image">
              {/* Placeholder for profile image */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Education Section */}
          <Education education={education} />

          {/* Research Interests */}
          <ResearchInterests interests={researchInterests} />

          {/* Publications */}
          <div id="publications">
            <Publications publications={utils.getPublicationsByYear()} />
          </div>

          {/* Awards & Honors */}
          <Awards awards={awards} />

          {/* Contact */}
          <Contact contact={contact} />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {utils.getCurrentYear()} {utils.formatName(false)}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
