const stats = [
  {
    number: 5,
    label: "Events",
  },

  {
    number: 2,
    label: "Days",
  },

  {
    number: 4,
    label: "Venues",
  },

  {
    number: 500,
    label: "Participants",
  },
];

export default function EventHighlights() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        {stats.map((item) => (

          <div

            key={item.label}

            className="
            bg-white/5

            border

            border-white/10

            rounded-3xl

            p-12

            text-center

            hover:-translate-y-3

            hover:border-blue-500/40

            hover:bg-blue-500/10

            transition-all

            duration-300
            "

          >

            <h2 className="text-5xl font-bold">

              {item.number}

              {item.label === "Participants" && "+"}

            </h2>

            <p className="mt-3 text-gray-400">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}