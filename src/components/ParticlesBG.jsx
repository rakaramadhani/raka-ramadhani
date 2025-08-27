import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            particles: {
            number: {
                value: 260,
                density: { enable: false, value_area: 800 },
            },
            color: { value: "#8342EC" },
            shape: { type: "circle" },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 2,
                random: true,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
            },
            },
            interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
            },
            },
        }}
        className="absolute inset-0 bg-cover"
        />
    );
}
