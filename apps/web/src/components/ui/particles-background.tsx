"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.4,
              color: "#22c55e",
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#22c55e", // Green primary color
        },
        links: {
          color: "#22c55e",
          distance: 180,
          enable: true,
          opacity: 0.4, // Very subtle links
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1400,
            height: 900,
          },
          value: 60,
        },
        opacity: {
          value: 0.4, // More visible dots
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 }, // Visible dots
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-global"
      options={options}
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 z-0 pointer-events-auto"
    />
  );
}
