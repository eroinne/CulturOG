import CardList from "./CardList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Body() {
  return (
    <>
      <div className="grid gap-0 grid-cols-3 grid-rows-3 text-center h-72 md:h-auto p-1">
        {/* Histoire */}
        <div
          className="text-xl mt-8 md:text-3xl flex-col"
          style={{ color: "#0466c8" }}
        >
          <a href="#Histoire">
            <p>Histoire</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ transform: "rotate(45deg)" }}
            />
          </a>
        </div>

        <div></div>

        {/* Geographie */}
        <div
          className="text-xl mt-8 md:text-3xl flex-col"
          style={{ color: "#38b000" }}
        >
          <a href="#Geographie">
            <p>Geographie</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ transform: "rotate(135deg)" }}
            />
          </a>
        </div>

        <div></div>

        <div className="text-center text-black">
          <h1 className="text-xl md:text-4xl font-extrabold">CulturOG</h1>
          <h2 className="text-sm md:text-2xl">Que savez vous vraiment ? </h2>
        </div>

        <div></div>

        {/* Personaliter */}
        <div className="text-xl md:text-3xl" style={{ color: "#dc2f02" }}>
          <a href="#Personaliter">
            <div className="flex-col">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p>Personaliter</p>
            </div>
          </a>
        </div>

        {/* Musique */}
        <div className="text-xl md:text-3xl " style={{ color: "#b5838d" }}>
          <a href="#Musique">
            <div className="flex-col">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ transform: "rotate(-90deg)" }}
              />
              <p>Musique</p>
            </div>
          </a>
        </div>

        {/* Art */}
        <div className="text-xl md:text-3xl " style={{ color: "#02040f" }}>
          <a href="#Art">
            <div className="flex-col">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ transform: "rotate(-135deg)" }}
              />
              <p>Art</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-white">
        <CardList />
      </div>
    </>
  );
}

export default Body;
