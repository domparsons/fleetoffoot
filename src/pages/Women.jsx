import PageSection from "../components/PageSection.jsx";

const gallery = [
  { src: "/images/womens/WomensSept22-1.jpg", alt: "Fleet of Foot women's session photo" },
  { src: "/images/womens/WomensSept22-2.jpg", alt: "Fleet of Foot women's walking football group" },
  { src: "/images/womens/WomensSept22-3.jpg", alt: "Women's walking football players at Fleet of Foot" },
  { src: "/images/womens/WomensSept22-4.jpg", alt: "Fleet of Foot women's training session" },
  { src: "/images/womens/WomensSept22-5.jpg", alt: "Women's walking football match action" },
  { src: "/images/womens/WomensSept22-6.jpg", alt: "Fleet of Foot women's team photo" },
  { src: "/images/womens/WomensSept22-7.jpg", alt: "Fleet of Foot women players together" },
];

export default function Women() {
  return (
    <>
      <PageSection title="Women at Fleet of Foot">
        <p>
          The Club is not currently running any women's teams. We do, however,
          welcome any women interested in playing in a mixed session environment.
        </p>
      </PageSection>

      <PageSection title="Archive">
        <p>
          Our women's section previously saw a boom in numbers and enjoyed sessions,
          tournaments, and away days, including a memorable visit to Portsmouth.
        </p>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} className="image" loading="lazy" />
          ))}
        </div>
      </PageSection>
    </>
  );
}
