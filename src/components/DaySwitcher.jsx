export default function DaySwitcher() {
  const schedule = {
    day1: [
      {
        time: "9:00 AM",
        event: "Inauguration",
      },

      {
        time: "10:00 AM",
        event: "Cyber Security Quiz",
      },

      {
        time: "11:30 AM",
        event: "Workshop",
      },

      {
        time: "2:00 PM",
        event: "Panel Discussion",
      },
    ],

    day2: [
      {
        time: "9:00 AM",
        event: "Workshop",
      },

      {
        time: "11:00 AM",
        event: "Mini Hackathon",
      },

      {
        time: "3:00 PM",
        event: "Valedictory",
      },
    ],
  };

  return (
    <section
      className="
      max-w-7xl
      mx-auto
      py-28
      px-6
      "
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-[4px]">
          Schedule
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Event Timeline
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Day 1 */}

        <div
          className="
          bg-white/5

          border

          border-white/10

          rounded-3xl

          p-10
          "
        >

          <h3 className="text-3xl font-bold mb-2">

            Day 1

          </h3>

          <p className="text-blue-400 mb-8">

            21 July 2026

          </p>

          <div className="space-y-6">

            {schedule.day1.map((item) => (

              <div

                key={item.time}

                className="
                flex

                gap-5

                items-start

                border-l-2

                border-blue-500

                pl-5
                "

              >

                <div>

                  <p className="font-bold">

                    {item.time}

                  </p>

                  <p className="text-gray-400">

                    {item.event}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Day 2 */}

        <div
          className="
          bg-white/5

          border

          border-white/10

          rounded-3xl

          p-10
          "
        >

          <h3 className="text-3xl font-bold mb-2">

            Day 2

          </h3>

          <p className="text-blue-400 mb-8">

            22 July 2026

          </p>

          <div className="space-y-6">

            {schedule.day2.map((item) => (

              <div

                key={item.time}

                className="
                flex

                gap-5

                items-start

                border-l-2

                border-cyan-500

                pl-5
                "

              >

                <div>

                  <p className="font-bold">

                    {item.time}

                  </p>

                  <p className="text-gray-400">

                    {item.event}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}