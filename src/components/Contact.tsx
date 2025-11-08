import type { ContactInfo } from "../data/portfolioData";

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Office:</strong> {contact.office}
        </p>
        <p>
          <strong>Address:</strong> {contact.address}
        </p>
        <p>
          <strong>LinkedIn:</strong> {contact.linkedin}
        </p>
        <p>
          <strong>Google Scholar:</strong> {contact.scholar}
        </p>
        {contact.website && (
          <p>
            <strong>Website:</strong> {contact.website}
          </p>
        )}
        {contact.orcid && (
          <p>
            <strong>ORCID:</strong> {contact.orcid}
          </p>
        )}
      </div>
    </section>
  );
}
