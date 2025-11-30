import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewsPage.css";

const NewsPage = () => {
  return (
    <div className="news-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>

        <div className="news-hero-content">
          <h1>News & Research Updates</h1>
          <p>
            Insights, clinical collaborations, and research progress from the
            CareSentinelAI initiative — shaping the future of early detection
            in Aotearoa.
          </p>
        </div>
      </section>

      {/* ---------------- NEWS LIST ---------------- */}
      <section className="news-container">

        {/* POST 1 */}
        <article className="news-card">
          <img
            src="/news/news-hero-ai-dashboard.jpeg"
            alt="Clinician reviewing AI dashboard"
            className="news-card-image"
          />

          <div className="news-card-content">
            <h2>Partnering with Clinicians to Tackle Sepsis</h2>

            <p className="news-card-excerpt">
              CareSentinelAI is TechnovaShield’s research initiative focused on improving
              early recognition of sepsis through clinician-led collaboration across Aotearoa.
            </p>

            <Link to="/news/post-1" className="news-read-more">
              Read More →
            </Link>
          </div>
        </article>

        {/* Add more articles here in future */}
      </section>
    </div>
  );
};

export default NewsPage;
