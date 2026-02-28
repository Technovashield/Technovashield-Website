import React from "react";
import "../styles/NewsPostPage.css";

const NewsPostPage3 = () => {
  return (
    <div className="news-post-page">
      {/* ---------- TOP FEATURE IMAGE ---------- */}
      <div className="news-post-hero">
        <img
          src="/news/equity-ai-healthcare.png"
          alt="Equity in AI healthcare in Aotearoa"
          className="news-post-image"
        />
      </div>

      {/* ---------- MAIN ARTICLE CONTENT ---------- */}
      <div className="news-back-link">
        <a href="/news">← Back to News</a>
      </div>
      <div className="news-post-content">
        <h1>
          Equity in Early Detection: Why Māori and Pasifika Perspectives Must
          Shape AI in Healthcare
        </h1>

        <p>
          Artificial intelligence is increasingly positioned as a promising tool
          for improving early recognition of clinical deterioration, including
          sepsis. But in Aotearoa, innovation cannot be separated from the
          realities of equity, cultural safety, and the lived experiences of
          Māori and Pasifika communities.
        </p>

        <p>
          If early-detection systems are to genuinely improve outcomes, they
          must be shaped by those who have historically been underserved by the
          health system.
        </p>

        <h2>The Reality of Inequity in Early Recognition</h2>

        <p>
          For many Māori and Pasifika families, early stages of deterioration
          may not be detected in time — sometimes because symptoms are
          dismissed, access is delayed, or the signs of sepsis present
          atypically.
        </p>

        <p>
          Research consistently highlights that Māori and Pasifika communities
          experience:
        </p>

        <ul>
          <li>Higher rates of infection-related hospitalisation</li>
          <li>Delays in recognition and escalation</li>
          <li>Greater barriers to accessing after-hours and urgent care</li>
          <li>Systemic bias leading to underestimation of severity</li>
        </ul>

        <p>
          These systemic patterns mean that an AI system trained solely on
          biomedical indicators — without cultural, contextual, or equity
          considerations — risks reinforcing rather than reducing disparities.
        </p>

        <h2>Why Māori and Pasifika Expertise Must Guide AI Innovation</h2>

        <p>
          Clinical decision-making in Māori and Pasifika health settings is
          grounded in relationships, whanaungatanga, cultural context, and a
          holistic understanding of wellbeing.
        </p>

        <p>
          Meaningful involvement from Māori and Pasifika clinicians, advisors,
          and community partners ensures that AI development:
        </p>

        <ul>
          <li>Respects cultural interpretations of illness</li>
          <li>Recognises barriers to timely presentation</li>
          <li>Understands community-specific deterioration patterns</li>
          <li>
            Aligns with Kaupapa Māori values including mana motuhake and
            manaakitanga
          </li>
          <li>Supports whānau-centred models of healthcare</li>
        </ul>

        <h2>The Role of Māori Algorithmic Sovereignty (MASov)</h2>

        <p>
          Our work with Māori data-governance leaders has reinforced the need
          for AI systems to be safe, transparent, and accountable.
        </p>

        <p>Key MASov-aligned principles embedded in our approach include:</p>

        <ul>
          <li>
            <strong>Tino rangatiratanga:</strong> Communities retain authority
            over how data is used
          </li>
          <li>
            <strong>Whanaungatanga:</strong> Relationships guide collaboration
          </li>
          <li>
            <strong>Manaakitanga:</strong> Technology must uplift, not burden or
            harm
          </li>
          <li>
            <strong>Equity and anti-bias:</strong> Systems must not replicate
            historical inequities
          </li>
          <li>
            <strong>Transparency:</strong> Clear explanations behind alerts
          </li>
          <li>
            <strong>Collective benefit:</strong> AI should meaningfully serve
            communities
          </li>
        </ul>

        <h2>Care Pathways Are Not the Same for Every Community</h2>

        <p>
          Designing AI without acknowledging differences in how people access
          care is a common pitfall.
        </p>

        <ul>
          <li>Whānau may wait longer before seeking care</li>
          <li>Trust may be shaped by past negative experiences</li>
          <li>Cultural obligations influence decision-making</li>
          <li>Communication styles may differ</li>
          <li>Presentation patterns may vary</li>
        </ul>

        <p>
          If AI models fail to account for these contextual realities, they risk
          producing alerts at the wrong time, reduced clinical uptake, and
          poorer outcomes.
        </p>

        <h2>How CareSentinelAI Embeds Equity in Early Detection Research</h2>

        <p>
          CareSentinelAI is shaped through ongoing kōrero with Māori and
          Pasifika clinicians, data-governance experts, and primary-care
          partners.
        </p>

        <ul>
          <li>Which early-warning indicators are prioritised</li>
          <li>How wearable and lab trends are interpreted</li>
          <li>When alerts should trigger in real-world workflows</li>
          <li>How patient context is preserved</li>
          <li>What transparency should look like</li>
          <li>How whānau-centred escalation pathways are supported</li>
        </ul>

        <h2>Moving Forward with Community Partnership</h2>

        <p>Equity cannot be an afterthought; it must be a foundation.</p>

        <p>
          We welcome clinicians and community partners who wish to collaborate,
          share insights, or guide this kaupapa.
        </p>
      </div>
    </div>
  );
};

export default NewsPostPage3;
