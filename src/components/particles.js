import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, memo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = memo((props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "#000000" },
    },
    fpsLimit: 120,
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
    resize: true
  },
  modes: {
    grab: {
      distance: 200,
      links: { opacity: 1 }
    },
    push: {
      quantity: 4
    },
    remove: {
      quantity: 2
    }
  }
},
    particles: {
      color: { value: "#FFFFFF" },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 1,
      },
      number: {
        density: { enable: true },
        value: 150,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return <Particles id={props.id} options={options} />;
});

export default ParticlesComponent;
