import { useEffect } from "react";

export default function useParallax() {

  useEffect(() => {

    const move = (e) => {

      const hero = document.getElementById("hero-content");

      if (!hero) return;

      const x = (e.clientX - window.innerWidth / 2) * 0.01;

      const y = (e.clientY - window.innerHeight / 2) * 0.01;

      hero.style.transform = `translate(${x}px, ${y}px)`;

    };

    window.addEventListener(

      "mousemove",

      move

    );

    return () =>

      window.removeEventListener(

        "mousemove",

        move

      );

  }, []);

}