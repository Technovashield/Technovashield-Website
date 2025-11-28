import React from "react";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="products-page">

     {/* HERO SECTION */}
<section className="products-hero">
  <div className="hero-light"></div>

  {/* Dark Patch that holds the content */}
  <div className="hero-inner-box">
    <div className="hero-content">
      <h1>Our Products & Innovation Portfolio</h1>
      <p>
        Explore our AI-driven solutions across healthcare, retail automation,
        virtual assistants, and wellbeing. Each product reflects real-world
        development work, practical implementations, and our journey toward
        building meaningful technology for people and communities.
      </p>
    </div>
  </div>
</section>


      {/* ---------------- PRODUCT BLOCKS ---------------- */}

      {/* 1 — CareSentinelAI */}
      <section className="product-block">
        <div className="product-text">
          <h2>CareSentinelAI — Predictive Health Intelligence</h2>
          <p>
            Our flagship product designed to detect early-risk health conditions 
            such as sepsis using multi-source data, real-time analysis, and clinician-focused 
            alerts. This video shows the full workflow from ingestion to prediction.
          </p>
        </div>
        <div className="product-video-wrapper">
          <video className="product-video" controls>
            <source src="/videos/CareSentinelAI_Flow_Video_V3.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 2 — Virtual Clinical Assistant */}
      <section className="product-block reverse">
        <div className="product-text">
          <h2>CareSentinelAI — Virtual Clinical Assistant</h2>
          <p>
            A real AI-powered assistant capable of answering patient queries, 
            retrieving personalised information, and working alongside clinicians 
            to reduce administrative time. This is the prototype demonstration.
          </p>
        </div>
        <div className="product-video-wrapper">
          <video className="product-video" controls>
            <source src="/videos/Roopap-chatbot.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 3 — Smart Retail Automation */}
      <section className="product-block">
        <div className="product-text">
          <h2>Smart Retail Automation — AI-Enabled Kiwi Mall</h2>
          <p>
            This automation simulates a real-world retail checkout and product 
            recommendation experience, fully built using React, UI automation 
            and machine-driven responses. A complete practical project.
          </p>
        </div>
        <div className="product-video-wrapper">
          <video className="product-video" controls>
            <source src="/videos/EcommerceKiwiMall-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 4 — MindfulAI */}
      <section className="product-block reverse">
        <div className="product-text">
          <h2>MindfulAI — Guided Meditation & Wellness Automation</h2>
          <p>
            An AI-generated guided meditation system built to support wellbeing, 
            stress reduction, and personalised mental health journeys through 
            dynamic scripting and automated flows.
          </p>
        </div>
        <div className="product-video-wrapper">
          <video className="product-video" controls>
            <source src="/videos/Meditation-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
