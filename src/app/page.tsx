import CategoryCard from "./components/Cards/Category";
import MovieCard from "./components/Cards/Movie";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      this is
      <CategoryCard
        label='Action'
        image='https://s3-alpha-sig.figma.com/img/30ec/19d3/f3faef8fa8fea2c5bca3cd10f48bcd4b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3qsNFRFezLPw6vPm1fHrw-IH~D9RLTgIexNKNX5N2XBiT0kufnbgbE-jrw22sEF2PSS~el4Z2bLOMEVIe6toi~9dd5GRlJmpWDxQ2VsQ9xdpNJLPQJAApcpu0j4JGjfYB8xTTPSvPoosqIy0TEDsmrQWrNwzMT874cKFUImjeZ6hiBHWdyFLvc5LdYKHQ6dZH0mu-KA4LNOAvIM375Pv6I4y9IPFzj6XWYwqZxyXNO6LByGLiT9GyK~hZgJAXooW0VytsamnxECERRCe0f2PdFI0yWWAmiKiK0vd40zDXQfFAZiZQfbObNDEuHdJFEQaCgZpDHH2vdDVWomjmlhmw__'
      />
      <MovieCard
        label='Action'
        image='https://s3-alpha-sig.figma.com/img/30ec/19d3/f3faef8fa8fea2c5bca3cd10f48bcd4b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3qsNFRFezLPw6vPm1fHrw-IH~D9RLTgIexNKNX5N2XBiT0kufnbgbE-jrw22sEF2PSS~el4Z2bLOMEVIe6toi~9dd5GRlJmpWDxQ2VsQ9xdpNJLPQJAApcpu0j4JGjfYB8xTTPSvPoosqIy0TEDsmrQWrNwzMT874cKFUImjeZ6hiBHWdyFLvc5LdYKHQ6dZH0mu-KA4LNOAvIM375Pv6I4y9IPFzj6XWYwqZxyXNO6LByGLiT9GyK~hZgJAXooW0VytsamnxECERRCe0f2PdFI0yWWAmiKiK0vd40zDXQfFAZiZQfbObNDEuHdJFEQaCgZpDHH2vdDVWomjmlhmw__'
        withDetails={true}
        description="The Rings of Power is an American fantasy TV series based on novel The Lord of the Rings and its appendices by J. R. R."
      />
    </main>
  );
}
