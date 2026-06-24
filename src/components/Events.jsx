import { events } from "../data/events";

export default function Events() {
  return (
    <section
      id="events"
      className="max-w-7xl mx-auto py-28 px-6"
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-[4px] mb-3">
          Events
        </p>

        <h2 className="text-4xl font-bold">
          Featured Events
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {events.map((event) => (

          <div
            key={event.title}

            className="
            group

            bg-white/5

            border

            border-white/10

            rounded-3xl

            p-8

            hover:-translate-y-3

            hover:border-blue-500/40

            hover:bg-blue-500/10

            transition-all

            duration-300
            "
          >

            <div className="text-5xl">

              {event.icon}

            </div>

            <h3 className="text-2xl font-bold mt-6">

              {event.title}

            </h3>

            <p className="text-gray-400 mt-4">

              {event.location}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}