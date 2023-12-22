export const optionsParticles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 6,
      },
      repulse: {
        distance: 200,
        duration: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: "#ffd800",
    },
    links: {
      color: "#ffd800",
      distance: 150,
      enable: true,
      opacity: 10,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: undefined,
      enable: true,
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 10,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 13 },
    },
  },
  detectRetina: true,
};
