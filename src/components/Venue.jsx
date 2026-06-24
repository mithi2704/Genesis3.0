import {
  FaBuilding,
  FaMapMarkerAlt,
  FaUsers
} from "react-icons/fa";

const venues = [
  {
    name: "Sigma Auditorium",
    icon: <FaBuilding />,
    desc: "Keynotes & Panel Discussions",
  },

  {
    name: "Alpha Hall",
    icon: <FaUsers />,
    desc: "Cyber Security Quiz",
  },

  {
    name: "Beta Hall",
    icon: <FaBuilding />,
    desc: "Workshop 1",
  },

  {
    name: "Apple Hall",
    icon: <FaMapMarkerAlt />,
    desc: "Workshop 2",
  },
];

export default function Venue() {
  return (
    <section
      id="venue"
      className="max-w-7xl mx-auto py-28 px-6"
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 tracking-[4px] uppercase">
          Venue
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Event Spaces
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {venues.map((venue) => (

          <div

            key={venue.name}

            className="
            group

            bg-white/5

            border

            border-white/10

            rounded-3xl

            p-10

            hover:border-blue-500/40

            hover:-translate-y-2

            transition-all

            duration-300
            "
          >

            <div className="text-4xl text-blue-400">

              {venue.icon}

            </div>

            <h3 className="text-3xl font-bold mt-6">

              {venue.name}

            </h3>

            <p className="text-gray-400 mt-4">

              {venue.desc}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}