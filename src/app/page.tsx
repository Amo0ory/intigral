import Banner from "./components/Banner";
import CategoryCard from "./components/Cards/Category";
import MovieCard from "./components/Cards/Movie";
import Carousel from "./components/Carousel";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
       <Banner/>
       <Carousel/>
    </main>
  );
}
