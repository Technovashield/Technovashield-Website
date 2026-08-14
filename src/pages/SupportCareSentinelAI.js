import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SupportCareSentinelAI.css";

const SupportCareSentinelAI = () => {
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    if (!activePanel) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActivePanel(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activePanel]);

  const openPanel = (panelName) => {
    setActivePanel(panelName);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="support-page">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="support-hero">
        <div className="particle-layer"></div>

        <div className="support-hero-content">
          <span className="support-eyebrow">
            Collaboration • Innovation • Healthcare Impact
          </span>

          <h1>Building Healthcare Innovation Together</h1>

          <p>
            TechnovaShield works with clinicians, technology organisations,
            research communities, data governance specialists, and innovation
            networks to develop responsible healthcare AI, synthetic data
            capabilities, and intelligent digital solutions.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY COLLABORATION MATTERS
          ===================================================== */}
      <section className="support-why">
        <div className="why-content">
          <span className="section-eyebrow">Our Ecosystem</span>

          <h2>Why Collaboration Matters</h2>

          <p>
            Healthcare innovation cannot be developed in isolation. Clinical
            insight, responsible technology, data governance, research,
            engineering, and real-world implementation all play an important
            role in building solutions that can create meaningful impact.
          </p>

          <p>
            Our ecosystem brings together organisations and professionals who
            contribute practical expertise, technical capability, governance
            perspectives, and sector knowledge to strengthen the development and
            future deployment of TechnovaShield initiatives.
          </p>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC COLLABORATIONS
          ===================================================== */}
      <section className="ecosystem-section">
        <div className="section-heading">
          <span className="section-eyebrow">Strategic Collaborations</span>

          <h2>Working Together for Real-World Impact</h2>

          <p>
            Our collaborations connect clinical practice, technology, Indigenous
            data governance, research, and innovation to help translate
            responsible ideas into practical solutions.
          </p>
        </div>

        <div className="ecosystem-grid">
          {/* =================================================
              01 — DOMINION ROAD SURGERY
              ================================================= */}
          <article className="ecosystem-card">
            <span className="ecosystem-card-number">01</span>

            <div className="collaboration-logo-wrap">
              <img
                src="/Dominion Road Surgery.avif"
                alt="Dominion Road Surgery"
                className="collaboration-logo dominion-logo"
              />
            </div>

            <span className="ecosystem-type">Clinical Pilot Partner</span>

            <h3>Dominion Road Surgery</h3>

            <p>
              Supporting real-world clinical validation of CareSentinelAI
              through clinician engagement, workflow insight, and primary-care
              perspectives.
            </p>

            <div className="ecosystem-tags">
              <span>Clinical Validation</span>
              <span>Primary Care</span>
              <span>Workflow Insight</span>
            </div>

            <div className="ecosystem-actions">
              <button
                type="button"
                className="ecosystem-learn-btn"
                onClick={() => openPanel("dominion")}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>

              <a
                href="https://www.dominionroadsurgery.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-website-btn"
              >
                Visit Website
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          {/* =================================================
              02 — NITI LOGIC

              Strategic Technology Partner.
              Public relationship wording, logo use and website
              association approved by Amelie / Niti Logic.
              ================================================= */}
          <article className="ecosystem-card">
            <span className="ecosystem-card-number">02</span>

            <div className="collaboration-logo-wrap">
              <img
                src="/nitilogic-logo.png"
                alt="Niti Logic"
                className="collaboration-logo nitilogic-logo"
              />
            </div>

            <span className="ecosystem-type">
              Strategic Technology Partner
            </span>

            <h3>Niti Logic</h3>

            <p>
              Niti Logic and TechnovaShield/CareSentinelAI collaborate as
              strategic technology partners, bringing complementary capabilities
              across AI governance, synthetic data, technology and commercial
              innovation to explore responsible AI solutions for real-world
              applications.
            </p>

            <div className="ecosystem-tags">
              <span>AI Governance</span>
              <span>Synthetic Data</span>
              <span>Technology</span>
              <span>Commercial Innovation</span>
            </div>

            <div className="ecosystem-actions">
              <button
                type="button"
                className="ecosystem-learn-btn"
                onClick={() => openPanel("nitilogic")}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>

              <a
                href="https://nitilogic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-website-btn"
              >
                Visit Website
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          {/* =================================================
              03 — PROCESSX
              ================================================= */}
          <article className="ecosystem-card">
            <span className="ecosystem-card-number">03</span>

            <div className="collaboration-logo-wrap">
              <img
                src="/ProcessX_Logo.jfif"
                alt="ProcessX"
                className="collaboration-logo processx-logo"
              />
            </div>

            <span className="ecosystem-type">
              Technical Development Partner
            </span>

            <h3>ProcessX</h3>

            <p>
              Supporting the technical development of the CareSentinelAI
              ecosystem through intelligent automation, scalable technology
              delivery, and engineering collaboration.
            </p>

            <div className="ecosystem-tags">
              <span>Technical Development</span>
              <span>Intelligent Automation</span>
              <span>Platform Engineering</span>
              <span>Scalable Delivery</span>
            </div>

            <div className="ecosystem-actions">
              <button
                type="button"
                className="ecosystem-learn-btn"
                onClick={() => openPanel("processx")}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>

              <a
                href="https://process-x.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-website-btn"
              >
                Visit Website
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          {/* =================================================
              04 — INDIGENOUS DATA AUTHORITY
              ================================================= */}
          <article className="ecosystem-card">
            <span className="ecosystem-card-number">04</span>

            <div className="collaboration-logo-wrap">
              <img
                src="/InDA_logo.png"
                alt="Indigenous Data Authority"
                className="collaboration-logo inda-logo"
              />
            </div>

            <span className="ecosystem-type">
              Indigenous Data Governance &amp; Assurance
            </span>

            <h3>Indigenous Data Authority</h3>

            <p>
              Supporting CareSentinelAI through an ongoing relationship focused
              on Indigenous data governance, responsible data and AI practices,
              accountability, and assurance as the platform develops.
            </p>

            <div className="ecosystem-tags">
              <span>Indigenous Data Governance</span>
              <span>Responsible AI</span>
              <span>Data Assurance</span>
              <span>Governance Readiness</span>
            </div>

            <div className="ecosystem-actions">
              <button
                type="button"
                className="ecosystem-learn-btn"
                onClick={() => openPanel("inda")}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>

              <a
                href="https://www.indigenousdataauthority.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-website-btn"
              >
                Visit Website
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          {/*
          =====================================================
          05 — HAUHAU RESEARCH

          PREPARED BUT NOT YET PUBLIC.

          Khalid has confirmed that HauHau Research may be
          considered for recognition as a CareSentinelAI
          supporter. Final website wording and logo use have
          been sent for approval.

          DO NOT UNCOMMENT UNTIL APPROVAL IS RECEIVED.
          No individual names are to be displayed.
          =====================================================

          <article className="ecosystem-card">
            <span className="ecosystem-card-number">05</span>

            <div className="collaboration-logo-wrap">
              <img
                src="/hauhaultd_logo.jfif"
                alt="HauHau Research"
                className="collaboration-logo hauhau-logo"
              />
            </div>

            <span className="ecosystem-type">
              Research &amp; Innovation Supporter
            </span>

            <h3>HauHau Research</h3>

            <p>
              Supporting the CareSentinelAI journey through research
              perspective, applied technology insight, and innovation
              engagement as TechnovaShield progresses from development toward
              validation and future real-world application.
            </p>

            <div className="ecosystem-tags">
              <span>Research</span>
              <span>Applied Innovation</span>
              <span>Technology Insight</span>
              <span>Validation Thinking</span>
            </div>

            <div className="ecosystem-actions">
              <button
                type="button"
                className="ecosystem-learn-btn"
                onClick={() => openPanel("hauhau")}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>

              <a
                href="https://hauhau.co.nz/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-website-btn"
              >
                Visit Website
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          END HAUHAU RESEARCH CARD
          */}
        </div>
      </section>

      {/* =====================================================
          SUPPORTING NETWORKS
          ===================================================== */}
      <section className="supporting-networks">
        <div className="section-heading">
          <span className="section-eyebrow">Supporting Networks</span>

          <h2>Connected to New Zealand’s Innovation Ecosystem</h2>

          <p>
            TechnovaShield participates in professional and innovation
            communities that strengthen our connection to New Zealand’s
            technology, healthcare, and digital innovation ecosystem.
          </p>
        </div>

        <div className="network-grid">
          <article className="network-card">
            <div className="network-logo-wrap">
              <img
                src="/AI Forum NZ Logo.png"
                alt="AI Forum New Zealand"
                className="network-logo"
              />
            </div>

            <h3>AI Forum New Zealand</h3>

            <p>
              Connecting with New Zealand’s artificial intelligence community
              and responsible AI ecosystem.
            </p>
          </article>

          <article className="network-card">
            <div className="network-logo-wrap">
              <img
                src="/NZTech Logo.png"
                alt="NZTech"
                className="network-logo"
              />
            </div>

            <h3>NZTech</h3>

            <p>
              Engaging with New Zealand’s broader technology and innovation
              community.
            </p>
          </article>

          <article className="network-card">
            <div className="network-logo-wrap">
              <img
                src="/TechWomen Logo.png"
                alt="TechWomen New Zealand"
                className="network-logo"
              />
            </div>

            <h3>TechWomen</h3>

            <p>
              Supporting connection, leadership, and participation across New
              Zealand’s technology sector.
            </p>
          </article>

          <article className="network-card">
            <div className="network-logo-wrap">
              <img
                src="/EdTechNZ Logo.png"
                alt="EdTech New Zealand"
                className="network-logo"
              />
            </div>

            <h3>EdTechNZ</h3>

            <p>
              Connecting with digital learning and technology communities across
              Aotearoa New Zealand.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          WAYS TO WORK WITH US
          ===================================================== */}
      <section className="support-cards-section">
        <div className="section-heading">
          <span className="section-eyebrow">Ways to Work With Us</span>

          <h2>Help Shape the Next Stage</h2>

          <p>
            We welcome conversations with healthcare organisations, researchers,
            technology partners, data and AI specialists, funders, and
            organisations exploring responsible innovation.
          </p>
        </div>

        <div className="support-grid">
          <article className="support-card">
            <div className="card-top">
              <h3>Clinical &amp; Research Collaboration</h3>
              <i className="fas fa-stethoscope"></i>
            </div>

            <div className="card-body">
              <p>
                Work with us on clinical validation, workflow discovery,
                research collaboration, responsible AI, and real-world
                healthcare implementation.
              </p>

              <Link to="/contact" className="card-btn">
                Start a Conversation
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>

          <article className="support-card">
            <div className="card-top">
              <h3>Technology &amp; Data Collaboration</h3>
              <i className="fas fa-database"></i>
            </div>

            <div className="card-body">
              <p>
                Collaborate on synthetic data, data engineering, intelligent
                automation, AI infrastructure, platform development, and
                privacy-aware technology solutions.
              </p>

              <Link to="/contact" className="card-btn">
                Explore Collaboration
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>

          <article className="support-card">
            <div className="card-top">
              <h3>Strategic &amp; Commercial Support</h3>
              <i className="fas fa-handshake"></i>
            </div>

            <div className="card-body">
              <p>
                Engage with TechnovaShield through strategic partnerships,
                commercial opportunities, investment conversations, ecosystem
                support, and pathways that help responsible innovation scale.
              </p>

              <Link to="/contact" className="card-btn">
                Connect With Us
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section className="support-contact">
        <div className="contact-box">
          <span className="section-eyebrow">Work With TechnovaShield</span>

          <h2>Interested in Building Responsible Innovation Together?</h2>

          <p>
            Whether you are exploring a clinical pilot, synthetic data
            requirement, research collaboration, technical partnership, or
            strategic opportunity, we would be pleased to hear from you.
          </p>

          <Link to="/contact" className="contact-btn">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* =====================================================
          PANEL OVERLAY
          ===================================================== */}
      {activePanel && (
        <div
          className="panel-overlay"
          onClick={closePanel}
          aria-hidden="true"
        ></div>
      )}

      {/* =====================================================
          DOMINION ROAD SURGERY PANEL
          ===================================================== */}
      <aside
        className={`slide-panel ${activePanel === "dominion" ? "open" : ""}`}
        aria-hidden={activePanel !== "dominion"}
      >
        <button
          type="button"
          className="close-panel-btn"
          onClick={closePanel}
          aria-label="Close Dominion Road Surgery details"
        >
          ×
        </button>

        <div className="slide-panel-content">
          <div className="panel-organisation-logo-wrap">
            <img
              src="/Dominion Road Surgery.avif"
              alt="Dominion Road Surgery"
              className="panel-organisation-logo"
            />
          </div>

          <div className="panel-heading-block">
            <div className="panel-heading-icon">
              <i className="fas fa-stethoscope"></i>
            </div>

            <div className="panel-heading-copy">
              <span className="panel-subtitle">Clinical Pilot Partner</span>

              <h2>Dominion Road Surgery</h2>
            </div>
          </div>

          <p className="panel-description">
            Dominion Road Surgery is supporting the real-world development of
            CareSentinelAI by contributing primary-care workflow insight and
            clinician perspectives that help TechnovaShield understand how
            clinical intelligence can fit naturally into everyday practice.
          </p>

          <h3 className="panel-section-title">Collaboration Focus</h3>

          <ul className="panel-points">
            <li>Clinical workflow discovery and primary-care insight</li>
            <li>Clinician feedback on usability and practical adoption</li>
            <li>
              Exploration of early recognition, review, and follow-up workflows
            </li>
            <li>Real-world validation considerations for CareSentinelAI</li>
          </ul>

          <div className="panel-why-box">
            <h3>Why It Matters</h3>

            <p>
              Building alongside clinicians helps ensure CareSentinelAI is
              shaped by real healthcare workflows and practical clinical needs,
              rather than technology assumptions alone.
            </p>
          </div>

          <a
            href="https://www.dominionroadsurgery.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-website-btn"
          >
            Visit Dominion Road Surgery
            <i className="fas fa-external-link-alt"></i>
          </a>

          <Link
            to="/contact"
            className="panel-contact-btn"
            onClick={closePanel}
          >
            Discuss Clinical Collaboration
          </Link>
        </div>
      </aside>

      {/* =====================================================
          NITI LOGIC PANEL
          Strategic Technology Partner
          Public wording approved by Amelie / Niti Logic.
          ===================================================== */}
      <aside
        className={`slide-panel ${
          activePanel === "nitilogic" ? "open" : ""
        }`}
        aria-hidden={activePanel !== "nitilogic"}
      >
        <button
          type="button"
          className="close-panel-btn"
          onClick={closePanel}
          aria-label="Close Niti Logic details"
        >
          ×
        </button>

        <div className="slide-panel-content">
          <div className="panel-organisation-logo-wrap">
            <img
              src="/nitilogic-logo.png"
              alt="Niti Logic"
              className="panel-organisation-logo"
            />
          </div>

          <div className="panel-heading-block">
            <div className="panel-heading-icon">
              <i className="fas fa-database"></i>
            </div>

            <div className="panel-heading-copy">
              <span className="panel-subtitle">
                Strategic Technology Partner
              </span>

              <h2>Niti Logic</h2>
            </div>
          </div>

          <p className="panel-description">
            Niti Logic is a strategic technology partner within the
            TechnovaShield and CareSentinelAI ecosystem, bringing complementary
            expertise in AI governance architecture, technology strategy and
            commercial innovation.
          </p>

          <p className="panel-description">
            Together, Niti Logic and TechnovaShield/CareSentinelAI are exploring
            how complementary capabilities across governance, synthetic data,
            AI and technology can support responsible, privacy-preserving
            solutions for real-world applications.
          </p>


          <h3 className="panel-section-title">
            Collaboration Focus
          </h3>

          <ul className="panel-points">
            <li>AI governance architecture</li>
            <li>Synthetic data and privacy-preserving data capability</li>
            <li>Technology strategy and complementary AI capability</li>
            <li>Commercial innovation and ecosystem collaboration</li>
          </ul>

          <div className="panel-why-box">
            <h3>Why It Matters</h3>

            <p>
              The partnership brings together complementary capabilities across
              AI governance, synthetic data, technology and commercial
              innovation to support responsible, privacy-preserving solutions
              for real-world applications.
            </p>
          </div>

          <a
            href="https://nitilogic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-website-btn"
          >
            Visit Niti Logic
            <i className="fas fa-external-link-alt"></i>
          </a>

          <Link
            to="/contact"
            className="panel-contact-btn"
            onClick={closePanel}
          >
            Discuss Technology Collaboration
          </Link>
        </div>
      </aside>

      {/* =====================================================
          PROCESSX PANEL
          ===================================================== */}
      <aside
        className={`slide-panel ${activePanel === "processx" ? "open" : ""}`}
        aria-hidden={activePanel !== "processx"}
      >
        <button
          type="button"
          className="close-panel-btn"
          onClick={closePanel}
          aria-label="Close ProcessX details"
        >
          ×
        </button>

        <div className="slide-panel-content">
          <div className="panel-organisation-logo-wrap">
            <img
              src="/ProcessX_Logo.jfif"
              alt="ProcessX"
              className="panel-organisation-logo processx-panel-logo"
            />
          </div>

          <div className="panel-heading-block">
            <div className="panel-heading-icon">
              <i className="fas fa-code"></i>
            </div>

            <div className="panel-heading-copy">
              <span className="panel-subtitle">
                Technical Development Partner
              </span>

              <h2>ProcessX</h2>
            </div>
          </div>

          <p className="panel-description">
            ProcessX is working with TechnovaShield as a technical development
            partner supporting the continued engineering and evolution of the
            CareSentinelAI ecosystem.
          </p>

          <h3 className="panel-section-title">Collaboration Focus</h3>

          <ul className="panel-points">
            <li>
              Technical development supporting the CareSentinelAI ecosystem
            </li>
            <li>Intelligent automation and workflow engineering</li>
            <li>Scalable platform development and technology delivery</li>
            <li>
              Engineering collaboration aligned with TechnovaShield’s product
              direction and clinical requirements
            </li>
          </ul>

          <div className="panel-why-box">
            <h3>Why It Matters</h3>

            <p>
              Combining TechnovaShield’s healthcare product direction and
              clinical requirements with additional engineering capability
              supports the pathway from prototype development toward a more
              scalable and deployment-ready CareSentinelAI ecosystem.
            </p>
          </div>

          <a
            href="https://process-x.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-website-btn"
          >
            Visit ProcessX
            <i className="fas fa-external-link-alt"></i>
          </a>

          <Link
            to="/contact"
            className="panel-contact-btn"
            onClick={closePanel}
          >
            Discuss Technical Collaboration
          </Link>
        </div>
      </aside>

      {/* =====================================================
          INDIGENOUS DATA AUTHORITY PANEL
          ===================================================== */}
      <aside
        className={`slide-panel ${activePanel === "inda" ? "open" : ""}`}
        aria-hidden={activePanel !== "inda"}
      >
        <button
          type="button"
          className="close-panel-btn"
          onClick={closePanel}
          aria-label="Close Indigenous Data Authority details"
        >
          ×
        </button>

        <div className="slide-panel-content">
          <div className="panel-organisation-logo-wrap">
            <img
              src="/InDA_logo.png"
              alt="Indigenous Data Authority"
              className="panel-organisation-logo inda-panel-logo"
            />
          </div>

          <div className="panel-heading-block">
            <div className="panel-heading-icon">
              <i className="fas fa-shield-alt"></i>
            </div>

            <div className="panel-heading-copy">
              <span className="panel-subtitle">
                Indigenous Data Governance &amp; Assurance
              </span>

              <h2>Indigenous Data Authority</h2>
            </div>
          </div>

          <p className="panel-description">
            The Indigenous Data Authority supports TechnovaShield and
            CareSentinelAI through an ongoing relationship focused on
            strengthening Indigenous data governance, responsible data and AI
            practices, accountability, and assurance throughout the platform’s
            development.
          </p>

          <h3 className="panel-section-title">Collaboration Focus</h3>

          <ul className="panel-points">
            <li>
              Indigenous data governance considerations across the development
              lifecycle
            </li>
            <li>Responsible data and AI practices</li>
            <li>
              Governance evidence, accountability, and assurance readiness
            </li>
            <li>
              Ongoing review as CareSentinelAI progresses toward future
              real-world deployment
            </li>
          </ul>

          <div className="panel-why-box">
            <h3>Why It Matters</h3>

            <p>
              Responsible data governance should be considered throughout
              development rather than treated only as a final-stage compliance
              exercise. This ongoing relationship helps TechnovaShield
              strengthen its governance approach and build evidence toward
              future independent assessment and certification readiness when
              CareSentinelAI and the relevant processes are sufficiently mature.
            </p>
          </div>

          <a
            href="https://www.indigenousdataauthority.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-website-btn"
          >
            Visit Indigenous Data Authority
            <i className="fas fa-external-link-alt"></i>
          </a>

          <Link
            to="/contact"
            className="panel-contact-btn"
            onClick={closePanel}
          >
            Discuss Responsible Data &amp; AI
          </Link>
        </div>
      </aside>

      {/*
      =========================================================
      HAUHAU RESEARCH PANEL

      PREPARED BUT NOT YET PUBLIC.
      DO NOT UNCOMMENT UNTIL KHALID APPROVES THE FINAL
      WEBSITE WORDING AND LOGO USE.

      No individual names are to appear publicly.
      =========================================================

      <aside
        className={`slide-panel ${
          activePanel === "hauhau" ? "open" : ""
        }`}
        aria-hidden={activePanel !== "hauhau"}
      >
        <button
          type="button"
          className="close-panel-btn"
          onClick={closePanel}
          aria-label="Close HauHau Research details"
        >
          ×
        </button>

        <div className="slide-panel-content">
          <div className="panel-organisation-logo-wrap">
            <img
              src="/hauhaultd_logo.jfif"
              alt="HauHau Research"
              className="panel-organisation-logo hauhau-panel-logo"
            />
          </div>

          <div className="panel-heading-block">
            <div className="panel-heading-icon">
              <i className="fas fa-flask"></i>
            </div>

            <div className="panel-heading-copy">
              <span className="panel-subtitle">
                Research &amp; Innovation Supporter
              </span>

              <h2>HauHau Research</h2>
            </div>
          </div>

          <p className="panel-description">
            HauHau Research supports TechnovaShield and CareSentinelAI through
            ongoing research and innovation engagement, bringing applied
            technology perspective and research-oriented insight to the
            platform’s development journey.
          </p>

          <h3 className="panel-section-title">
            Current Focus
          </h3>

          <ul className="panel-points">
            <li>
              Research and innovation perspective
            </li>
            <li>
              Applied technology and engineering insight
            </li>
            <li>
              Support for evidence and validation thinking
            </li>
            <li>
              Emerging AI and technology considerations
            </li>
            <li>
              Ongoing research engagement as CareSentinelAI matures
            </li>
          </ul>

          <div className="panel-why-box">
            <h3>Why It Matters</h3>

            <p>
              Strong research engagement helps CareSentinelAI develop with
              greater technical rigour, evidence awareness, and connection to
              applied innovation. HauHau Research’s support adds an important
              research perspective alongside TechnovaShield’s clinical,
              technology, governance, and commercial ecosystem.
            </p>
          </div>

          <a
            href="https://hauhau.co.nz/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-website-btn"
          >
            Visit HauHau Research
            <i className="fas fa-external-link-alt"></i>
          </a>

          <Link
            to="/contact"
            className="panel-contact-btn"
            onClick={closePanel}
          >
            Discuss Research Collaboration
          </Link>
        </div>
      </aside>

      END HAUHAU RESEARCH PANEL
      */}
    </div>
  );
};

export default SupportCareSentinelAI;
