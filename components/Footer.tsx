import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  "Home",
  "Corporate info",
  "About us",
  "Blog",
  "Report a security bug",
  "Investor relations",
  "Careers",
  "WU foundation",
  "Intellectual property",
  "Online Privacy Statement",
  "Terms and Conditions",
  "Fraud Awareness",
  "Cookie information",
  "Contact Us",
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "2px solid #eaeaea",
      paddingTop: "32px",
      paddingBottom: "32px",
      paddingLeft: "72px",
      paddingRight: "72px",
      background: "#fff",
      fontSize: "12px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "52px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Liens */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          color: "#444",
          fontSize: "12px"
        }}>
          {footerLinks.map((link, idx) => (
            <React.Fragment key={link}>
              <a href="#" style={{ textDecoration: "none", color: "#444" }}>{link}</a>
              {idx !== footerLinks.length - 1 && <span style={{ color: "#bbb" }}>|</span>}
            </React.Fragment>
          ))}
        </div>
        {/* Copyright et réseaux sociaux */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <span style={{ color: "#444" }}>
            © 2025 Western Union Holdings, Inc. All Rights Reserved
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontWeight: "bold", color: "#222" }}>Follow us</span>
            <span style={{ color: "#444" }}>on</span>
            <a href="#" style={{ color: "#4a7bb7", fontSize: "28px" }}><FaFacebookF /></a>
            <a href="#" style={{ color: "#4a7bb7", fontSize: "28px" }}><FaYoutube /></a>
            <a href="#" style={{ color: "#4a7bb7", fontSize: "28px" }}><FaInstagram /></a>
            <a href="#" style={{
              background: "#000",
              borderRadius: "50%",
              padding: "2px",
              color: "#fff",
              fontSize: "28px",
              display: "inline-flex"
            }}><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
