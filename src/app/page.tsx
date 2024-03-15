import Banner from "./components/Banner";
import CategoryCard from "./components/Cards/Category";
import MovieCard from "./components/Cards/Movie";
import Carousel from "./components/Carousel";
import Layout from "./components/Layout";
import { movies, categories } from "@/app/assets/data/movies";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
       <Banner/>
       <div className="mb-[50px]">
          <Carousel data={movies} type="movies" title="Movies"/>
          <Carousel data={categories} type="categories" title="Categories"/>
        </div>
     
    </main>
  );
}
