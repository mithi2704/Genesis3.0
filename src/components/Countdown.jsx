import Countdown from "react-countdown";

export default function EventCountdown() {

  const targetDate = new Date(
    "2026-07-21T09:00:00"
  );

  return (

    <Countdown

      date={targetDate}

      renderer={({
        days,
        hours,
        minutes,
        seconds
      }) => (

        <div className="flex gap-4 flex-wrap justify-center">

          {[

            {
              label: "Days",
              value: days
            },

            {
              label: "Hours",
              value: hours
            },

            {
              label: "Minutes",
              value: minutes
            },

            {
              label: "Seconds",
              value: seconds
            }

          ].map((item) => (

            <div

              key={item.label}

              className="
              w-24
h-24
md:w-28
md:h-28
              rounded-3xl
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              flex
              flex-col
              justify-center
              items-center
              "

            >

              <h2 className="text-4xl font-bold">

                {item.value}

              </h2>

              <p className="text-gray-400">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      )}

    />

  );

}