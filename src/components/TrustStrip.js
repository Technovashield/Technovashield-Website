import React from "react";
import "../styles/TrustStrip.css";

const trustItems = [
  {
    title: "Healthcare AI",
    text: "Purpose-built solutions designed to support better care.",
    icon: "✚",
  },
  {
    title: "Clinical Intelligence",
    text: "Insights designed to support safer and more informed decisions.",
    icon: "◉",
  },
  {
    title: "Responsible AI",
    text: "Ethical, explainable and transparent AI engineering.",
    icon: "✓",
  },
  {
    title: "Privacy by Design",
    text: "Security and privacy embedded at the core of our solutions.",
    icon: "⌂",
  },
  {
    title: "New Zealand Based",
    text: "Proudly New Zealand based with a globally focused outlook.",
    icon: "⌖",
  },
];

const TrustStrip = () => {
  return (
    <section
      className="trust-strip"
      aria-labelledby="trust-strip-heading"
    >
      <div className="trust-section-header">
        <p className="trust-section-eyebrow">Our Engineering Principles</p>

        <h2 id="trust-strip-heading" className="trust-section-title">
          Built for Trust, Designed for Impact
        </h2>

        <p className="trust-section-subtitle">
          Building trusted healthcare AI through responsible engineering,
          privacy-first design and clinically relevant innovation.
        </p>
      </div>

      <div className="trust-strip-inner">
        {trustItems.map((item) => (
          <article className="trust-item" key={item.title}>
            <div className="trust-icon" aria-hidden="true">
              {item.icon}
            </div>

            <div className="trust-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;