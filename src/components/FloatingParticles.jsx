const particles = [...Array(25)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 2 + Math.random() * 4,
}));

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {particles.map((particle, index) => (

        <div

          key={index}

          className="
          absolute

          w-1

          h-1

          rounded-full

          bg-blue-400/40

          animate-pulse
          "

          style={{

            left: `${particle.left}%`,

            top: `${particle.top}%`,

            animationDuration: `${particle.duration}s`

          }}

        />

      ))}

    </div>
  );
}