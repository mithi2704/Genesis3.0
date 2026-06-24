import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      className="
      max-w-7xl

      mx-auto

      py-20

      px-6
      "
    >
      <div
        className="
        border-t

        border-white/10

        pt-16

        flex

        flex-col

        md:flex-row

        justify-between

        items-center

        gap-8
        "
      >
        <div className="flex items-center gap-4">

          <img
            src={logo}
            className="w-14"
          />

          <div>

            <h3 className="font-bold text-2xl">

              GENESIS 3.0

            </h3>

            <p className="text-gray-400">

              IEEE-HKN Annual Symposium

            </p>

          </div>

        </div>

        <div className="text-gray-400 text-center">

          <p>

            21 - 22 July 2026

          </p>

          <p>

            Sri Sairam Engineering College

          </p>

        </div>

      </div>
    </footer>
  );
}