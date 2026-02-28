import React from "react";
import "../styles/NewsPostPage.css";

const NewsPostPage2 = () => {
  return (
    <div className="news-post-page">
      {/* ---------- TOP FEATURE IMAGE ---------- */}
      <div className="news-post-hero">
        <img
          src="/news/ai-frontline.png"
          alt="AI transforming healthcare frontline in Aotearoa"
          className="news-post-image"
        />
      </div>

      {/* ---------- MAIN ARTICLE CONTENT ---------- */}
      <div className="news-back-link">
        <a href="/news">← Back to News</a>
      </div>
      <div className="news-post-content">
        <h1>
          AI Is Transforming Healthcare — But Are We Bringing the Frontline With
          Us?
        </h1>

        <p>
          Across Aotearoa New Zealand, artificial intelligence and automation
          are rapidly becoming part of healthcare strategy.
        </p>

        <p>
          From predictive risk modelling and digital triage systems to workflow
          automation and population analytics, innovation is accelerating.
          Governance conversations are maturing. Infrastructure investment is
          increasing.
        </p>

        <p>This momentum is necessary.</p>

        <p>
          But beneath that progress sits an important question: are we
          transforming healthcare with the frontline — or around them?
        </p>

        <h2>The Workforce Reality in New Zealand</h2>

        <p>
          New Zealand’s health workforce has been operating under sustained
          pressure for several years.
        </p>

        <p>
          Reports from professional bodies continue to highlight workforce
          shortages, rising administrative load, increasing clinical complexity,
          limited protected time for professional development, and ongoing
          fatigue and burnout.
        </p>

        <p>
          At the same time, digital transformation has accelerated under
          national health reforms. AI-enabled tools are being explored to
          support triage, prevention, documentation, and system efficiency.
        </p>

        <p>
          None of this is inherently problematic. But transformation pace and
          workforce capacity are not always aligned.
        </p>

        <h2>When Strategy Moves Faster Than Literacy</h2>

        <p>
          Most AI discussions occur at governance and executive levels —
          predictive analytics initiatives, data integration programmes,
          automation of administrative processes, and population health
          modelling.
        </p>

        <p>
          For frontline nurses and clinical staff, the lived experience can feel
          different.
        </p>

        <ul>
          <li>New systems are introduced.</li>
          <li>Training sessions are scheduled.</li>
          <li>Documentation workflows shift.</li>
          <li>Expectations evolve.</li>
        </ul>

        <p>
          Often, education is delivered alongside already demanding rosters.
        </p>

        <p>
          The intention may be progress. The experience can feel overwhelming.
        </p>

        <p>
          When AI literacy is not embedded thoughtfully, it can generate anxiety
          about algorithm-driven decision support, uncertainty about
          accountability, hesitation in patient communication, and quiet
          resistance rather than confident adoption.
        </p>

        <h2>The Hidden Implementation Risk</h2>

        <p>
          Healthcare technology rarely fails because of flawed ambition. It
          struggles when human integration is underestimated.
        </p>

        <p>If clinicians are not given space to deeply understand:</p>

        <ul>
          <li>What an AI tool does</li>
          <li>What it does not do</li>
          <li>How outputs should be interpreted</li>
          <li>Where ethical boundaries sit</li>
          <li>How it affects patient conversations</li>
        </ul>

        <p>
          Trust erodes. And when trust erodes, workload increases rather than
          decreases.
        </p>

        <p>AI cannot reduce burnout if its introduction amplifies it.</p>

        <h2>Looking Ahead</h2>

        <p>
          As AI integration deepens across healthcare systems, the critical
          question remains:
        </p>

        <p>
          <strong>
            Are we transforming healthcare with the frontline — or around them?
          </strong>
        </p>

        <p>
          Sustainable progress depends not only on predictive accuracy or system
          efficiency. It depends on trust, literacy, transparency, and
          partnership.
        </p>
      </div>
    </div>
  );
};

export default NewsPostPage2;
