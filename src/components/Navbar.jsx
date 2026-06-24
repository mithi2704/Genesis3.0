import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [active, setActive] = useState("hero");

  const sections = [
    "hero",
    "about",
    "events",
    "venue",
    "faq",
  ];

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {

        threshold: 0.4,

      }

    );

    sections.forEach((section) => {

      const element = document.getElementById(section);

      if (element) {

        observer.observe(element);

      }

    });

    return () => observer.disconnect();

  }, []);

  const handleNavigation = (section) => {

    setMobileOpen(false);

    document

      .getElementById(section)

      ?.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

  };

  return (

    <nav

      className="
      fixed

      top-4

      left-1/2

      -translate-x-1/2

      w-[96%]

      max-w-7xl

      z-50
      "

    >

      <div

        className="
        h-16

        md:h-20

        px-5

        md:px-8

        backdrop-blur-xl

        bg-black/40

        border

        border-white/10

        rounded-3xl

        flex

        justify-between

        items-center
        "

      >

        {/* Logo */}

        <button

          onClick={() => handleNavigation("hero")}

          className="
          flex

          items-center

          gap-4
          "

        >

          <img

            src={logo}

            alt="HKN"

            className="
            w-10

            md:w-12

            hover:scale-110

            transition-all

            duration-300
            "

          />

          <div className="text-left">

            <h1 className="font-bold text-lg md:text-2xl">

              GENESIS 3.0

            </h1>

            <p className="text-xs text-gray-400">

              IEEE-HKN

            </p>

          </div>

        </button>

        {/* Desktop Menu */}

        <div

          className="
          hidden

          md:flex

          items-center

          gap-10
          "

        >

          {

            sections.map((section) => (

              <button

                key={section}

                onClick={() =>

                  handleNavigation(section)

                }

                className={`
                capitalize

                font-medium

                transition-all

                duration-300

                ${

                  active === section

                  ? "text-blue-400"

                  : "text-white hover:text-blue-400"

                }
                `}

              >

                {section}

              </button>

            ))

          }

        </div>

        {/* Mobile Icon */}

        <button

          className="md:hidden text-2xl"

          onClick={() =>

            setMobileOpen(

              !mobileOpen

            )

          }

        >

          {

            mobileOpen

            ?

            <FaTimes />

            :

            <FaBars />

          }

        </button>

      </div>

      {/* Mobile Menu */}

      {

        mobileOpen && (

          <div

            className="
            md:hidden

            mt-3

            rounded-3xl

            bg-black/70

            backdrop-blur-xl

            border

            border-white/10

            p-6

            flex

            flex-col

            gap-5
            "

          >

            {

              sections.map((section) => (

                <button

                  key={section}

                  onClick={() =>

                    handleNavigation(section)

                  }

                  className={`
                  capitalize

                  text-left

                  ${

                    active === section

                    ? "text-blue-400"

                    : ""

                  }
                  `}

                >

                  {section}

                </button>

              ))

            }

          </div>

        )

      }

    </nav>

  );

}