import Link from "next/link";

export default function Footer() {
  return (
      <footer className="footer absolute bottom-0 w-full">
        <div className="w-full max-w-screen text-center">
          <span>
            {new Date().getFullYear()} &copy;{" "}
            <Link
              href={"https://www.linkedin.com/in/andreas-prager/"}
              className="hover:underline"
            >
              Andreas Prager
            </Link>
            . Powered by{" "}
            <Link href={"https://www.weatherapi.com/"}>WeatherAPI.com</Link>
          </span>
        </div>
      </footer>
  );
}
