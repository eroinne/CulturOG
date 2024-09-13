import {
  faBook,
  faEarthEurope,
  faPencil,
  faMusic,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Part from "./Part";
import Streak from "./streak";

function CardList() {
  return (
    <>
      <div className="text-center text-2xl pt-10 pb-10">
        <Streak />
      </div>

      <div className="pt-4" id="Histoire">
        <Part
          title="Histoire"
          color="#0466c8"
          icon={faBook}
          content="Apprenez les grands moments de l'histoire"
        />
      </div>

      <div className="pt-4" id="Geographie">
        <Part
          title="Geographie"
          color="#38b000"
          icon={faEarthEurope}
          content="Testez vos connaissances du monde"
        />
      </div>

      <div className="pt-4" id="Personnalité">
        <Part
          title="Personnalité"
          color="#dc2f02"
          icon={faUser}
          content="Testez vos connaissances des personnalités"
        />
      </div>

      <div className="pt-4" id="Musique">
        <Part
          title="Musique"
          color="#b5838d"
          icon={faMusic}
          content="Que savez-vous de la musique ?"
        />
      </div>

      <div className="pt-4" id="Art">
        <Part
          title="Art"
          color="#02040f"
          icon={faPencil}
          content="Testez votre esprit artistique"
        />
      </div>
    </>
  );
}

export default CardList;
