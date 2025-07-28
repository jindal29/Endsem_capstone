import React from "react";

export default function About() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "rgb(255, 0, 86)" }}>About Our Recipe App</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🍽️ Our Mission</h2>
        <p>
          Our goal is to make cooking easy, fun, and accessible for everyone.
          Whether you're a beginner or a pro, our app helps you find delicious recipes
          based on ingredients you already have.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⭐ Key Features</h2>
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>🔍 Search recipes by ingredients</li>
          <li>🎨 Choose your theme & font size</li>
          <li>🎙️ Use voice commands for settings</li>
          <li>🌐 Available in multiple languages</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📞 Contact Us</h2>
        <p>
          Have feedback or questions? We'd love to hear from you! <br />
          Email us at: <a href="mailto:contact@recipeapp.com" style={{ color: "rgba(205, 35, 92, 1)" }}>contact@recipeapp.com</a>
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#888" }}>
        Made with ❤️ by Kashika's Team.
      </footer>
    </div>
  );
}
