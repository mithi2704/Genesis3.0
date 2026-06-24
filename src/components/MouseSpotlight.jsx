import { useEffect, useState } from "react";

export default function MouseSpotlight() {

  const [position, setPosition] = useState({

    x: 0,

    y: 0

  });

  useEffect(() => {

    const move = (e) => {

      setPosition({

        x: e.clientX,

        y: e.clientY

      });

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

  return (

    <div

      className="
      fixed

      w-[500px]

      h-[500px]

      rounded-full

      bg-blue-500/5

      blur-[140px]

      pointer-events-none

      z-0
      "

      style={{

        left: position.x - 250,

        top: position.y - 250

      }}

    />

  );

}