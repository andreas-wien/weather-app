import "./globals.css";
import Head from "next/head";

//👇 Import Open Sans font
import { Oswald } from "next/font/google";

//👇 Configure our font object
const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "A Weather App",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charset="UTF-8" />
        <meta
          name="Weather App"
          content="A weather app that shows the current weather based on your current location."
        />
        <meta
          name="keywords"
          content="Weather, Wetter, weather, weather app, weather forecast, wettervorhersage, wettervorhersage-app, wettervorhersage-app"
        ></meta>
        <meta name="author" content="Andreas Prager"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={oswald.className}>{children}</body>
    </html>
  );
}
