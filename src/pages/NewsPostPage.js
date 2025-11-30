import React from "react";
import "../styles/NewsPostPage.css";

const NewsPostPage = () => {
  return (
    <div className="news-post-page">

      {/* ---------- TOP FEATURE IMAGE ---------- */}
      <div className="news-post-hero">
        <img
          src="/news/news-hero-ai-dashboard.jpeg"
          alt="Clinician reviewing AI dashboard"
          className="news-post-image"
        />
      </div>

      {/* ---------- MAIN ARTICLE CONTENT ---------- */}
      <div className="news-post-content">

        <h1>Partnering with Clinicians to Tackle Sepsis</h1>

        <p>
          <strong>CareSentinelAI</strong> is TechnovaShield’s clinician-guided research initiative 
          focused on improving early recognition of sepsis in primary care across Aotearoa.
        </p>

        <h2>A New Research Pathway for Early Detection in Aotearoa</h2>

        <p>
          Sepsis remains one of the most urgent and complex clinical challenges across Aotearoa. 
          Despite significant advances in healthcare, early recognition continues to be difficult 
          in primary care settings where clinicians manage high patient volumes, variable 
          presentations, and limited time. For many patients—particularly Māori and Pasifika 
          communities who experience higher barriers to timely care—delays in identifying sepsis 
          can lead to poorer outcomes.
        </p>

        <p>
          TechnovaShield Limited is committed to supporting clinicians through the development of 
          <strong>CareSentinelAI</strong>, our early-detection research initiative focused on supporting 
          sepsis recognition by exploring new, research-guided pathways for early detection. Our 
          approach places clinicians at the center of the innovation process, ensuring that any 
          technological development reflects real-world needs, clinical reasoning, equity goals, 
          and practical constraints.
        </p>

        <h2>The Burden of Sepsis in Aotearoa</h2>

        <p>Sepsis is difficult to detect early because:</p>

        <ul>
          <li>Symptoms are often non-specific or initially mild.</li>
          <li>Vital signs may appear normal before rapid decline.</li>
          <li>Clinicians are time-pressed with competing priorities.</li>
          <li>Lab results may be delayed.</li>
          <li>Patients may not present until later in the illness.</li>
        </ul>

        <p>
          For rural practices and overstretched clinics, these challenges become even more 
          significant. This is where research efforts—guided directly by frontline clinicians—
          can offer meaningful support.
        </p>

        <h2>Why Clinician-Led Innovation Matters</h2>

        <p>
          AI has shown potential in many areas of health, but its value depends entirely on how 
          well it aligns with clinical reasoning and everyday workflow realities. Any approach to 
          supporting earlier recognition of sepsis must:
        </p>

        <ul>
          <li>Respect clinical judgement and decision-making.</li>
          <li>Provide transparent, explainable reasoning.</li>
          <li>Fit naturally within existing workflows.</li>
          <li>Support clinicians, not add workload.</li>
          <li>Account for equity considerations.</li>
        </ul>

        <p>
          Our research is shaped through kōrero with GPs, nurses, urgent-care clinicians, and Māori 
          and Pasifika health providers. Their insights guide which signals matter, where delays 
          occur, and what real constraints exist in everyday practice.
        </p>

        <h2>Introducing CareSentinelAI: Exploring New Early-Detection Pathways</h2>

        <p>
          TechnovaShield’s research seeks to understand how vitals, wearable metrics, and 
          laboratory trends may help clinicians identify early signs of deterioration. This is not 
          a replacement for clinical expertise—it is a potential support layer designed to surface 
          patterns that may otherwise be missed.
        </p>

        <p>Our research pathway includes:</p>

        <ul>
          <li>Reviewing global evidence on early-warning models.</li>
          <li>Studying how vital signs evolve before sepsis.</li>
          <li>Examining whether wearable data enables earlier trend detection.</li>
          <li>Understanding gaps faced by clinicians in real-world settings.</li>
          <li>Ensuring all future tools are interpretable and explainable.</li>
        </ul>

        <h2>A Commitment to Equity</h2>

        <p>
          Improving sepsis detection means confronting inequities faced by Māori and Pasifika 
          communities. Our research incorporates:
        </p>

        <ul>
          <li>Māori and Pasifika clinical advisors.</li>
          <li>Kaupapa-aligned perspectives on data and health.</li>
          <li>Culturally responsive design approaches.</li>
          <li>Meaningful, ongoing partnership—not one-way consultation.</li>
        </ul>

        <h2>Working Hand-in-Hand with Clinicians</h2>

        <p>
          We are actively seeking clinicians passionate about early detection and better patient 
          outcomes. Your insights shape what signals matter, how tools should work, and how to 
          integrate technology safely and respectfully.
        </p>

        <p>We welcome collaboration from:</p>

        <ul>
          <li>GP clinics</li>
          <li>Nurses & nurse practitioners</li>
          <li>Māori & Pasifika health providers</li>
          <li>Rural & remote clinics</li>
          <li>Urgent-care teams</li>
          <li>PHO leadership & clinical directors</li>
        </ul>

        <h2>Looking Ahead</h2>

        <p>
          This article marks the beginning of TechnovaShield’s public research kōrero on sepsis. 
          We will continue to share findings, engage with clinical partners, and refine our research 
          as we progress. Early detection of sepsis is a shared challenge across our health system—
          and through genuine partnership, we can explore pathways that strengthen escalation 
          timing, support clinicians, and improve outcomes for communities across Aotearoa.
        </p>

        <p>
          We would be delighted to speak with any clinicians or health leaders interested in 
          collaborating with us on CareSentinelAI.
        </p>

        <h3>Further Reading</h3>

        <ul className="reference-links">
          <li>
            <a href="https://jamanetwork.com/journals/jama/fullarticle/2492881" target="_blank" rel="noreferrer">
              Sepsis-3 Definition (JAMA, 2016)
            </a>
          </li>
          <li>
            <a href="https://www.who.int/news-room/fact-sheets/detail/sepsis" target="_blank" rel="noreferrer">
              WHO — Sepsis Fact Sheet
            </a>
          </li>
          <li>
            <a href="https://www.hqsc.govt.nz/our-work/acute-care/sepsis/" target="_blank" rel="noreferrer">
              HQSC NZ — Sepsis Resources
            </a>
          </li>
          <li>
            <a href="https://www.safetyandquality.gov.au/standards/clinical-care-standards/sepsis-clinical-care-standard" 
               target="_blank" rel="noreferrer">
              Australia Sepsis Clinical Care Standard
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default NewsPostPage;
