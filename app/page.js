import WeatherOutput from "../components/WeatherOutput";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <>
      <header className="text-center text-3xl font-extrabold m-4">
        <h1>Current Weather</h1>
      </header>
      <main className="bg-gray-900 text-gray-300">
        <WeatherOutput />
      </main>
      <Footer />
    </>
  );
}
