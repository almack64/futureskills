tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 50,
        },
        size: {
            value: 3,
        },
        move: {
            enable: true,
            speed: 1,
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    },
});
