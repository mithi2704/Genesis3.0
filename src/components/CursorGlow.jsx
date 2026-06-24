import { useEffect, useState } from "react";


export default function CursorGlow() {

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

      w-96

      h-96

      rounded-full

      bg-blue-500/10

      blur-[120px]

      pointer-events-none

      z-0

      transition-all

      duration-100
      "

      style={{

        left: position.x - 180,

        top: position.y - 180

      }}

    />

  );

}