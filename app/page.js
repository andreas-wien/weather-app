import WeatherOutput from "../components/WeatherOutput";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <>
      <header className="text-center text-3xl font-extrabold m-0 p-4 bg-slate-950 text-gray-300">
        <h1>Current Weather</h1>
      </header>
      <main className="bg-slate-900 text-gray-300">
        <WeatherOutput />
      </main>
      <Footer />
    </>
  );
}
