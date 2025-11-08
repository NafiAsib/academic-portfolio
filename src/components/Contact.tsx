import type { ContactInfo } from "../data/portfolioData";

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gray-900">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <p className="mb-2 text-sm text-gray-700">
          <strong className="text-gray-900 inline-block w-24 font-semibold">
            Email:
          </strong>
          {contact.email}
        </p>
        <p className="mb-2 text-sm text-gray-700">
          <strong className="text-gray-900 inline-block w-24 font-semibold">
            Office:
          </strong>
          {contact.office}
        </p>
        <p className="mb-2 text-sm text-gray-700">
          <strong className="text-gray-900 inline-block w-24 font-semibold">
            Address:
          </strong>
          {contact.address}
        </p>
        <p className="mb-2 text-sm text-gray-700">
          <strong className="text-gray-900 inline-block w-24 font-semibold">
            LinkedIn:
          </strong>
          {contact.linkedin}
        </p>
        <p className="mb-2 text-sm text-gray-700">
          <strong className="text-gray-900 inline-block w-24 font-semibold">
            Scholar:
          </strong>
          {contact.scholar}
        </p>
        {contact.website && (
          <p className="mb-2 text-sm text-gray-700">
            <strong className="text-gray-900 inline-block w-24 font-semibold">
              Website:
            </strong>
            {contact.website}
          </p>
        )}
        {contact.orcid && (
          <p className="mb-2 text-sm text-gray-700">
            <strong className="text-gray-900 inline-block w-24 font-semibold">
              ORCID:
            </strong>
            {contact.orcid}
          </p>
        )}
      </div>
    </section>
  );
}
