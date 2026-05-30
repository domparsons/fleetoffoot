import PageSection from "../components/PageSection.jsx";
import { sponsors } from "../data/siteContent.js";

export default function Information() {
  return (
    <>
      <PageSection title="Information">
        <p>We operate out of the Hart Leisure Centre in Hitches Lane.</p>
        <p>
          We play exclusively outdoors on 3G surfaces, using either the 5 aside cages
          or areas of the full size pitch.
        </p>
        <p>Sessions are every week as follows:</p>
        <ul>
          <li>Tuesday, 2pm start. Normally on the main pitch.</li>
          <li>Thursday, 2pm start. Usually in one of the cages.</li>
        </ul>
        <p>Sessions are mostly men, but ladies can play.</p>
      </PageSection>

      <PageSection title="On Field Activities">
        <p>
          Playing is centred around the above sessions, which begin with a warm-up
          followed by typically 5 or 6 aside games in 10 minute sections with 2
          minutes rest in between.
        </p>
        <p>
          We play in accordance with the rules of the Walking Football Association,
          modified only by adherence to Hampshire FA's adoption of a 3 touch rule.
        </p>
        <p>
          <a
            href="https://thewfa.co.uk/laws-of-the-game/"
            className="link-decoration"
            target="_blank"
            rel="noreferrer"
          >
            WFA Laws of the Game
          </a>
        </p>
        <p>
          The WFA and our Club promote walking football as a predominately non-contact
          sport where players can exercise in a competitive but safe environment
          showing mutual respect.
        </p>
      </PageSection>

      <PageSection title="Cost of Membership">
        <p>
          Each session carries a £4 attendance fee. After 3 sessions, new members are
          required to pay a £10 membership fee if they wish to continue. Thereafter,
          there is a £10 annual renewal.
        </p>
        <p>The Club has its own bank account and all monies are paid electronically into it.</p>
        <p>Club account details: 40-21-27 / 71586602.</p>
      </PageSection>

      <PageSection title="Club History and Organisation">
        <p>
          We first started playing in 2017, coinciding with the opening of Fleet's new
          leisure centre. With membership numbers growing at a steady rate, we were
          soon able to assume formal club status.
        </p>
        <p>The Club is affiliated to both the Walking Football Association and Hampshire FA.</p>
        <p>
          For more information or if you would like to join us, contact Robin by email{" "}
          <a href="mailto:robglen37@yahoo.co.uk" className="link-decoration">
            here
          </a>{" "}
          or text{" "}
          <a href="sms:+447799664454" className="link-decoration">
            +447799664454
          </a>
          .
        </p>
      </PageSection>

      <PageSection title="Our Sponsors">
        <p>
          We welcome financial sponsorship from supportive organisations and business.
          In return, we provide coverage in local newspapers and sometimes regional
          television.
        </p>
        <ul>
          {sponsors.map((sponsor) => (
            <li key={sponsor.label}>
              {sponsor.href ? (
                <a
                  href={sponsor.href}
                  className="link-decoration"
                  target="_blank"
                  rel="noreferrer"
                >
                  {sponsor.label}
                </a>
              ) : (
                sponsor.label
              )}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection title="Club Constitution">
        <a
          href="/files/Club Constitution.pdf"
          className="document-link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="document-icon" aria-hidden="true">
            PDF
          </span>
          <span className="document-copy">
            <span className="document-title">Club Constitution</span>
            <span className="document-meta">PDF document · 50 KB</span>
          </span>
          <span className="document-action">Open</span>
        </a>
      </PageSection>
    </>
  );
}
