import EventCountdown from "./Countdown";
import logo from "../assets/logo.png";
import useParallax from "../hooks/useParallax";

export default function Hero() {

  useParallax();

  return (

    <section

      id="hero"

      className="
      relative

      min-h-[90vh]

      overflow-hidden

      flex

      justify-center

      items-center

      px-6

      pt-36

      pb-10
      "

    >

      {/* Background Glow */}

      <div

        className="
        absolute

        top-1/2

        left-1/2

        -translate-x-1/2

        -translate-y-1/2

        w-[500px]

        h-[500px]

        bg-blue-600/20

        rounded-full

        blur-[150px]

        pointer-events-none

        z-0
        "

      />

      {/* Gradient Overlay */}

      <div

        className="
        absolute

        inset-0

        bg-gradient-to-b

        from-transparent

        via-blue-950/20

        to-[#030712]

        z-0
        "

      />

      {/* Content */}

      <div

        id="hero-content"

        className="
        relative

        z-10

        flex

        flex-col

        items-center

        text-center

        transition-transform

        duration-300
        "

      >

        {/* Logo */}

        <img

          src={logo}

          alt="IEEE HKN"

          className="
          w-24

          md:w-32

          mb-5

          opacity-95

          drop-shadow-[0_0_40px_rgba(37,99,235,0.5)]
          "

        />

        {/* Badge */}

        <div

          className="
          mb-6

          px-5

          py-2

          rounded-full

          bg-blue-500/10

          border

          border-blue-500/20

          text-blue-300
          "

        >

          Annual Symposium 2026

        </div>

        {/* Heading */}

        <p

          className="
          uppercase

          tracking-[6px]

          text-blue-400

          mb-4
          "

        >

          IEEE-HKN PRESENTS

        </p>

        {/* Title */}

        <h1

          className="
          text-5xl

          sm:text-6xl

          md:text-8xl

          lg:text-9xl

          font-black

          bg-gradient-to-r

          from-white

          via-blue-200

          to-white

          bg-clip-text

          text-transparent
          "

        >

          GENESIS 3.0

        </h1>

        {/* Tagline */}

        <h2

          className="
          mt-4

          text-lg

          sm:text-xl

          md:text-3xl

          font-light

          text-gray-300
          "

        >

          Innovate • Collaborate • Inspire

        </h2>

        {/* Date */}

        <p className="mt-6 text-lg text-gray-400">

          21 - 22 July 2026

        </p>

        {/* College */}

        <p className="text-gray-500 mt-1">

          Sri Sairam Engineering College

        </p>

        {/* Countdown */}

        <div className="mt-8">

          <EventCountdown />

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4 justify-center">

          <button

            onClick={() => {

              document

                .getElementById("register")

                ?.scrollIntoView({

                  behavior: "smooth"

                });

            }}

            className="
            px-6

            py-3

            rounded-full

            bg-gradient-to-r

            from-blue-600

            to-cyan-500

            hover:scale-105

            transition-all

            duration-300

            text-sm

            md:text-base
            "

          >

            Register Now

          </button>

          <button

            onClick={() => {

              document

                .getElementById("events")

                ?.scrollIntoView({

                  behavior: "smooth"

                });

            }}

            className="
            px-6

            py-3

            border

            border-white/20

            rounded-full

            hover:bg-white/10

            hover:scale-105

            transition-all

            duration-300

            text-sm

            md:text-base
            "

          >

            Explore Events

          </button>

        </div>

      </div>

    </section>

  );

}