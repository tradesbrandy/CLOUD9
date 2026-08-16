import HomeText from "./HomeText.jsx";

function Home() {
  return (
    <section className="bg-navy text-white text-center py-24 px-8 border-b-4 border-red-500">
      <HomeText
        title="MedCore"
        tagline="Your trusted source for pharmacy essentials"
      />
    </section>
  );
}

export default Home;
