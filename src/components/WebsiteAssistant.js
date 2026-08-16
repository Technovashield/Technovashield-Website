import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getSentinelResponse,
  sentinelConfig,
} from "../data/sentinelKnowledgeBase";
import "../styles/WebsiteAssistant.css";

const WebsiteAssistant = () => {
  const initialConversation = [
    {
      type: "assistant",
      text: sentinelConfig.welcomeMessage,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const [conversation, setConversation] = useState(
    initialConversation
  );

  const [followUps, setFollowUps] = useState(
    sentinelConfig.defaultFollowUps
  );

  const hasStartedConversation = conversation.some(
    (message) => message.type === "user"
  );

  const getResponse = (input) => {
    return getSentinelResponse(input);
  };

  const resetConversation = () => {
    setConversation([
      {
        type: "assistant",
        text: sentinelConfig.welcomeMessage,
      },
    ]);

    setFollowUps(sentinelConfig.defaultFollowUps);
    setQuestion("");
  };

  const closeAssistant = () => {
    setIsOpen(false);
    resetConversation();
  };

  const submitQuestion = (value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const response = getResponse(trimmed);

    setConversation((current) => [
      ...current,
      { type: "user", text: trimmed },
      { type: "assistant", text: response.answer },
    ]);

    setFollowUps(
      response.followUps || sentinelConfig.defaultFollowUps
    );

    setQuestion("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(question);
  };

  return (
    <div className="website-assistant">
      {isOpen && (
        <div
          className="assistant-panel"
          role="dialog"
          aria-label="Elara digital assistant"
        >
          <div className="assistant-header">
            <div className="assistant-header-identity">
              <img
                src="/MiraAvatar.jfif"
                alt="Elara digital assistant avatar"
                className="assistant-header-avatar"
              />

              <div className="assistant-header-copy">
                <span className="assistant-eyebrow">
                  Digital Assistant • TechnovaShield
                </span>

                <h2>Elara</h2>

                <p>
                  Explore our platforms, capabilities, collaborations and
                  responsible innovation ecosystem.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="assistant-close"
              onClick={closeAssistant}
              aria-label="Close Elara"
            >
              ×
            </button>
          </div>

          <div className="assistant-safety-note">
            General information only • No medical advice. Please do not
            enter patient, health-record or confidential information.
          </div>

          <div className="assistant-conversation">
            {conversation.map((message, index) => (
              <div
                key={`${message.type}-${index}`}
                className={`assistant-message ${message.type}`}
              >
                {message.type === "assistant" && (
                  <img
                    src="/MiraAvatar.jfif"
                    alt=""
                    aria-hidden="true"
                    className="assistant-message-avatar"
                  />
                )}

                <span>{message.text}</span>
              </div>
            ))}
          </div>

          {!hasStartedConversation && (
            <>
              <div className="assistant-follow-up-label">
                Continue the conversation
              </div>

              <div className="assistant-quick-questions">
                {followUps.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => submitQuestion(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          <form className="assistant-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask Elara..."
              aria-label="Ask Elara a question"
            />

            <button type="submit">
              <i className="fas fa-paper-plane"></i>
              <span>Send</span>
            </button>
          </form>

          <div className="assistant-footer">
            Want to discuss something directly?{" "}
            <Link to="/contact" onClick={closeAssistant}>
              Contact TechnovaShield
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`assistant-launcher ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Elara digital assistant"
        aria-expanded={isOpen}
      >
        <img
          src="/MiraAvatar.jfif"
          alt=""
          aria-hidden="true"
          className="assistant-launcher-avatar"
        />

        {!isOpen && (
          <span>
            <strong>Elara</strong>
            <small>How can I help you?</small>
          </span>
        )}
      </button>
    </div>
  );
};

export default WebsiteAssistant;
