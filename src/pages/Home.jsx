import Article from "../components/Article.jsx";
import AudioPlayer from "../components/AudioPlayer.jsx";
import Carousel from "../components/Carousel.jsx";
import PageSection from "../components/PageSection.jsx";
import { carouselImages, homeArticles } from "../data/siteContent.js";

export default function Home() {
  return (
    <>
      <section className="landing-introduction">
        <div className="introduction-image-container">
          <img
            src="/images/championshipGroup/championshipGroup.jpg"
            className="header-image image"
            alt="Fleet of Foot members at the club championship"
          />
        </div>
        <div className="introduction-text">
          <h1>Welcome to Fleet of Foot Walking Football Club</h1>
          <p>
            We aim to show you who we are, what we are up to and our plans for the future.
          </p>
          <p>
            Hopefully, you will find something here that you like and that you will want
            to join in with.
          </p>
        </div>
      </section>

      <PageSection title="A Club In Harmony">
        <AudioPlayer src="/files/song.mp3" title="A Club In Harmony" />
      </PageSection>

      <Carousel images={carouselImages} />

      <div className="article-list">
        {homeArticles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            paragraphs={article.paragraphs}
            images={article.images}
          >
            {article.links ? (
              <div className="link-list">
                {article.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link-decoration"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </Article>
        ))}
      </div>
    </>
  );
}
