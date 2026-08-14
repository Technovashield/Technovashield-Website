import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewsPage.css";

const newsArticles = [
  {
    id: 1,
    title: "Partnering with Clinicians to Tackle Sepsis",
    excerpt:
      "CareSentinelAI is being shaped through clinician engagement and real-world healthcare perspectives, helping TechnovaShield explore how clinical intelligence can support earlier recognition, review, and follow-up.",
    image: "/news/news-hero-ai-dashboard.jpeg",
    alt: "Clinician reviewing an AI-enabled healthcare dashboard",
    link: "/news/post-1",
    category: "Clinical Collaboration",
  },
  {
    id: 2,
    title:
      "AI Is Transforming Healthcare — But Are We Bringing the Frontline With Us?",
    excerpt:
      "As artificial intelligence develops across healthcare, successful adoption will depend not only on technology but also on clinician understanding, trust, workflow integration, and responsible implementation.",
    image: "/news/ai-frontline.png",
    alt: "Artificial intelligence supporting frontline healthcare",
    link: "/news/post-2",
    category: "Healthcare AI",
  },
  {
    id: 3,
    title:
      "Equity in Early Detection: Why Māori and Pasifika Perspectives Must Shape AI",
    excerpt:
      "Responsible healthcare AI must consider equity, cultural context, community perspectives, and appropriate data practices alongside clinical and technical performance.",
    image: "/news/equity-ai-healthcare.png",
    alt: "Equity and Indigenous perspectives shaping AI in healthcare",
    link: "/news/post-3",
    category: "Responsible AI",
  },
];

const NewsPage = () => {
  return (
    <main className="news-page">
      {/* Hero */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>

        <div className="news-hero-content">
          <span className="news-eyebrow">Insights & Updates</span>

          <h1>News, Research & Perspectives</h1>

          <p>
            Follow TechnovaShield&apos;s progress across healthcare AI,
            CareSentinelAI, responsible innovation, synthetic data,
            collaborations, and emerging technology.
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="news-section">
        <div className="news-section-heading">
          <span className="news-section-eyebrow">Latest Perspectives</span>

          <h2>From TechnovaShield</h2>

          <p>
            Explore our thinking, research perspectives, collaboration updates,
            and progress as we build responsible technology for real-world
            challenges.
          </p>
        </div>

        <div className="news-container">
          {newsArticles.map((article) => (
            <article className="news-card" key={article.id}>
              <div className="news-card-image-wrapper">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="news-card-image"
                />
              </div>

              <div className="news-card-content">
                <span className="news-category">{article.category}</span>

                <h3>{article.title}</h3>

                <div className="news-card-divider"></div>

                <p className="news-card-excerpt">{article.excerpt}</p>

                <Link to={article.link} className="news-read-more">
                  Read Article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
