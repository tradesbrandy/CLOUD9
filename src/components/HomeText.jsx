function HomeText({ title, tagline }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-3 text-white">
        {title}
        <span className="text-red-400">.</span>
      </h1>
      <p className="text-lg sm:text-xl text-blue-50">{tagline}</p>
    </div>
  );
}

export default HomeText;
