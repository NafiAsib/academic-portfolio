import {
  Education,
  Publications,
  RecentNews,
  Experience,
  Header,
  Hero,
} from "./components";
import {
  personal,
  education,
  contact,
  news,
  experience,
  utils,
} from "./data/portfolioData";

function App() {
  return (
    <div className="min-h-screen">
      <Header personal={personal} />
      <Hero personal={personal} contact={contact} />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div id="news">
            <RecentNews news={news} />
          </div>
          <div id="publications">
            <Publications publications={utils.getPublicationsByYear()} />
          </div>
          <div id="experience">
            <Experience experience={experience} />
          </div>
          <Education education={education} />
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 text-center py-8 mt-16">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-gray-500 text-sm">
            &copy; {utils.getCurrentYear()} {utils.formatName(false)}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
