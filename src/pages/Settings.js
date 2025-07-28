import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faMicrophone,
  faUserCircle,
  faSyncAlt,
  faGlobe,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });

  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [language, setLanguage] = useState("en");
  const [avatar, setAvatar] = useState(null);
  const [voiceMsg, setVoiceMsg] = useState("");
  const [, setListening] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") changeTheme(1);
    else changeTheme(0);
  // eslint-disable-next-line no-use-before-define
  }, [changeTheme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "#1d1d1d",
      "--background-light": "#4d4d4d",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  const fontSizes = [
    { title: "Small", value: "12px" },
    { title: "Medium", value: "16px" },
    { title: "Large", value: "20px" },
  ];

  const animationSpeeds = [
    { title: "Slow", value: 2 },
    { title: "Medium", value: 1 },
    { title: "Fast", value: 0.5 },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeTheme = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) _settings[key] = _theme[key];
    setSettings(_settings);
  };

  const changeColor = (i) => {
    let _settings = { ...settings };
    _settings["--primary-color"] = primaryColors[i];
    setPrimaryColor(i);
    setSettings(_settings);
  };

  const changeFontSize = (i) => {
    let _settings = { ...settings };
    _settings["--font-size"] = fontSizes[i].value;
    setFontSize(i);
    setSettings(_settings);
  };

  const changeAnimationSpeed = (i) => {
    let _settings = { ...settings };
    _settings["--animation-speed"] = animationSpeeds[i].value;
    setAnimationSpeed(i);
    setSettings(_settings);
  };

  const handleVoiceCommand = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setVoiceMsg("Speech recognition not supported.");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        setVoiceMsg(`Heard: "${transcript}"`);
        if (transcript.includes("make it small")) changeFontSize(0);
        else if (transcript.includes("make it big")) changeFontSize(2);
        setListening(false);
      };
      recognitionRef.current.onerror = (event) => {
        setVoiceMsg("Voice error: " + event.error);
        setListening(false);
      };
      recognitionRef.current.onend = () => setListening(false);
    }
    setVoiceMsg("Listening...");
    setListening(true);
    recognitionRef.current.start();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleReset = () => {
    setSettings({
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--primary-color": "rgb(255, 0, 86)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
      "--font-size": "16px",
      "--animation-speed": 1,
    });
    setTheme("light");
    setPrimaryColor(0);
    setFontSize(1);
    setAnimationSpeed(1);
    setLanguage("en");
    setAvatar(null);
    setVoiceMsg("Settings reset to default.");
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackMsg("Thank you for your feedback!");
    setFeedback("");
    setTimeout(() => setFeedbackMsg(""), 3000);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ fontSize: "2rem" }}>Settings</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" checked={theme === 'dark'} onChange={(e) => changeTheme(e.target.checked ? 1 : 0)} />
            Dark Mode
          </label>
          <button onClick={handleVoiceCommand} style={{ fontSize: "1.5rem", background: "none", border: "none" }}>
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
          <button onClick={handleReset} style={{ fontSize: "1.5rem", background: "none", border: "none" }}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
      </div>

      {voiceMsg && <p style={{ color: "var(--primary-color)" }}>{voiceMsg}</p>}

      {/* Avatar Upload */}
      <div style={{ marginTop: "2rem" }}>
        <h2><FontAwesomeIcon icon={faUserCircle} /> Profile Avatar</h2>
        <label>
          {avatar ? (
            <img src={avatar} alt="Avatar" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 80, color: "var(--text-light)" }} />
          )}
          <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: "none" }} />
        </label>
      </div>

      {/* Language */}
      <div style={{ marginTop: "2rem" }}>
        <h2><FontAwesomeIcon icon={faGlobe} /> Language</h2>
        <select value={language} onChange={handleLanguageChange}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>

      {/* Color, Font, Animation */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Preferred Color</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {primaryColors.map((color, index) => (
            <div
              key={index}
              onClick={() => changeColor(index)}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: color,
                cursor: "pointer",
                position: "relative",
                border: primaryColor === index ? "3px solid var(--text-color)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Font Size</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {fontSizes.map((size, index) => (
            <button
              key={index}
              onClick={() => changeFontSize(index)}
              style={{ padding: "0.5rem 1rem", backgroundColor: fontSize === index ? "var(--primary-color)" : "#eee", color: fontSize === index ? "white" : "black", border: "none", borderRadius: "0.5rem" }}
            >
              {size.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Animation Speed</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {animationSpeeds.map((speed, index) => (
            <button
              key={index}
              onClick={() => changeAnimationSpeed(index)}
              style={{ padding: "0.5rem 1rem", backgroundColor: animationSpeed === index ? "var(--primary-color)" : "#eee", color: animationSpeed === index ? "white" : "black", border: "none", borderRadius: "0.5rem" }}
            >
              {speed.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2><FontAwesomeIcon icon={faCommentDots} /> Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            rows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback..."
            style={{ width: "100%", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #ccc", marginBottom: "1rem" }}
            required
          />
          <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "var(--primary-color)", color: "white", border: "none", borderRadius: "0.5rem" }}>
            Send
          </button>
        </form>
        {feedbackMsg && <p style={{ color: "green", marginTop: "0.5rem" }}>{feedbackMsg}</p>}
      </div>
    </div>
  );
}
