const PlanetInfo = (props) => {
  return (
    <div className="flex justify-center mt-16 xl:w-4/5 lg:w-4/5 self-center mx-auto sm:flex-row flex-col">
      <img
        className="lg:w-64 md:w-44 animate-pulse sm:ml-16 w-36 ml-11"
        src="https://www.svgrepo.com/show/76881/planet-saturn.svg"
        alt="Random planet"
      ></img>
      <div className="md:mx-20 mx-10 sm:mt-0 mt-4">
        <p className="text-white lg:mt-24 md:mt-16 mt-6">
          <span className="italic text-amber-100 mr-1">Name: </span>
          {props.planet.name}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Rotation period: </span>
          {props.planet.rotation_period}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Orbital period: </span>
          {props.planet.orbital_period}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Gravity: </span>
          {props.planet.gravity}{" "}
        </p>
      </div>
    </div>
  );
};

export default PlanetInfo;
