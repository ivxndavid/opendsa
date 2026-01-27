"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Glitch text effect
function GlitchText({ text }: { text: string }) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let interval: NodeJS.Timeout;

    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchedText(
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) return text[index];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );
        iterations += 1 / 3;
        if (iterations >= text.length) {
          clearInterval(interval);
          setGlitchedText(text);
        }
      }, 30);
    };

    startGlitch();
    const loopInterval = setInterval(startGlitch, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(loopInterval);
    };
  }, [text, mounted]);

  if (!mounted) return <span>{text}</span>;

  return <span>{glitchedText}</span>;
}

// ASCII art 404
const ascii404 = `
   ██╗  ██╗ ██████╗ ██╗  ██╗
   ██║  ██║██╔═████╗██║  ██║
   ███████║██║██╔██║███████║
   ╚════██║████╔╝██║╚════██║
        ██║╚██████╔╝     ██║
        ╚═╝ ╚═════╝      ╚═╝
`;

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState("/unknown");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setCurrentPath(window.location.pathname);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "hsl(0 0% 3%)" }} />
    );
  }

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "hsl(0 0% 3%)"
    }}>
      {/* Grid pattern */}
      <div className="grid-pattern" style={{ position: "absolute", inset: 0 }} />

      {/* Scanlines */}
      <div className="scanlines" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      {/* Gradient orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        filter: "blur(200px)",
        backgroundColor: "rgb(239 68 68 / 0.1)"
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "16px",
        maxWidth: "672px",
        margin: "0 auto"
      }}>
        {/* ASCII Art */}
        <pre style={{
          color: "hsl(142 71% 45%)",
          fontSize: "clamp(6px, 1.5vw, 12px)",
          fontFamily: "var(--font-jetbrains), monospace",
          lineHeight: 1,
          marginBottom: "32px",
          textShadow: "0 0 10px hsl(142 71% 45% / 0.5)"
        }}>
          {ascii404}
        </pre>

        {/* Terminal window */}
        <div style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          textAlign: "left",
          backgroundColor: "hsl(0 0% 4%)",
          border: "1px solid hsl(0 0% 15%)"
        }}>
          {/* Terminal header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 16px",
            backgroundColor: "hsl(0 0% 6%)",
            borderBottom: "1px solid hsl(0 0% 15%)"
          }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ height: "12px", width: "12px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
              <div style={{ height: "12px", width: "12px", borderRadius: "50%", backgroundColor: "#eab308" }} />
              <div style={{ height: "12px", width: "12px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
            </div>
            <span style={{ marginLeft: "12px", fontSize: "12px", fontFamily: "var(--font-jetbrains), monospace", color: "hsl(0 0% 60%)" }}>
              error.log
            </span>
          </div>

          {/* Terminal content */}
          <div style={{ padding: "16px 24px", fontFamily: "var(--font-jetbrains), monospace", fontSize: "14px" }}>
            <div style={{ color: "#f87171", marginBottom: "8px" }}>
              <span style={{ color: "hsl(0 0% 60%)" }}>[ERROR]</span> Page not found
            </div>
            <div style={{ color: "hsl(0 0% 60%)", marginBottom: "8px" }}>
              <span style={{ color: "hsl(0 0% 98%)" }}>→</span> path: <span style={{ color: "#facc15" }}>&quot;{currentPath}&quot;</span>
            </div>
            <div style={{ color: "hsl(0 0% 60%)", marginBottom: "8px" }}>
              <span style={{ color: "hsl(0 0% 98%)" }}>→</span> status: <span style={{ color: "#f87171" }}>404</span>
            </div>
            <div style={{ color: "hsl(0 0% 60%)", marginBottom: "12px" }}>
              <span style={{ color: "hsl(0 0% 98%)" }}>→</span> message: <span style={{ color: "hsl(0 0% 98%)" }}>&quot;The requested resource could not be found&quot;</span>
            </div>
            <div style={{ paddingTop: "12px", marginTop: "12px", borderTop: "1px solid hsl(0 0% 15% / 0.5)" }}>
              <span style={{ color: "hsl(142 71% 45%)" }}>$ </span>
              <span style={{ color: "hsl(0 0% 98%)" }}>suggesting: </span>
              <span style={{ color: "hsl(142 71% 45%)" }}>go_home</span>
              <span className="cursor-blink" style={{ marginLeft: "2px", display: "inline-block", width: "8px", height: "16px", backgroundColor: "hsl(142 71% 45%)" }} />
            </div>
          </div>
        </div>

        {/* Error message */}
        <div style={{ marginTop: "32px" }}>
          <h1 style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "hsl(0 0% 98%)",
            margin: "0 0 16px 0",
            fontFamily: "var(--font-syne), system-ui, sans-serif"
          }}>
            <GlitchText text="PAGE NOT FOUND" />
          </h1>
          <p style={{
            fontSize: "14px",
            color: "hsl(0 0% 60%)",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            Looks like you&apos;ve ventured into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Action buttons */}
        <div style={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px"
        }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              backgroundColor: "hsl(142 71% 45%)",
              color: "hsl(0 0% 2%)",
              boxShadow: "0 0 20px hsl(142 71% 45% / 0.3)"
            }}
          >
            <svg style={{ height: "16px", width: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "hsl(0 0% 98%)",
              border: "1px solid hsl(0 0% 15%)"
            }}
          >
            <svg style={{ height: "16px", width: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          fontSize: "12px",
          fontFamily: "var(--font-jetbrains), monospace",
          color: "hsl(0 0% 60%)"
        }}>
          <Link href="https://opendsa.dev" style={{ color: "inherit", textDecoration: "none" }}>
            → website
          </Link>
          <Link href="https://docs.opendsa.dev" style={{ color: "inherit", textDecoration: "none" }}>
            → docs
          </Link>
          <Link href="https://github.com/soloshun/opendsa" style={{ color: "inherit", textDecoration: "none" }}>
            → github
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(0 0% 15%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 15%) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
        }
        
        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          );
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
