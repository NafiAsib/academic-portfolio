import { type PersonalInfo, type ContactInfo } from "../data/portfolioData";
import SocialLinks from "./social-links";

interface HeroProps {
  personal: PersonalInfo;
  contact: ContactInfo;
}

export default function Hero({ personal, contact }: HeroProps) {
  return (
    <section className="py-20 bg-gray-50 md:py-12" id="home">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-center gap-16 lg:flex-row flex-col text-center lg:text-left md:gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-light mb-2 tracking-tight text-gray-900 md:text-4xl sm:text-3xl">
              {personal.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2 font-normal md:text-lg sm:text-base">
              {personal.title}
            </p>
            <p className="text-base mb-4">
              <a
                href="mailto:nafi.asib@gmail.com"
                className="text-gray-700 link-smooth-underline"
              >
                nafi.asib [at] gmail [dot] com
              </a>
            </p>
            <div
              className="text-lg leading-relaxed text-gray-700 max-w-lg mb-7 md:text-base lg:mx-0 mx-auto dynamic-content"
              dangerouslySetInnerHTML={{ __html: personal.about }}
            />
            <SocialLinks contact={contact} />
          </div>
          <div className="w-48 h-48 bg-white border border-gray-200 shrink-0 lg:w-52 lg:h-52 md:w-40 md:h-40 overflow-hidden rounded-lg">
            {personal.profileImage ? (
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
