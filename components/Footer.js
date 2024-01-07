import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="text-center m-0 p-2 bg-slate-950 text-gray-300">
      <div>
        <span>
          {new Date().getFullYear()} &copy;{" "}
          <Link className="hover:text-blue-600" href={"https://www.linkedin.com/in/andreas-prager/"}>
            Andreas Prager
          </Link>
          . Powered by{" "}
          <Link className="hover:text-blue-600" href={"https://www.weatherapi.com/"}>WeatherAPI.com</Link>
        </span>
      </div>
    </footer>
  );
}
