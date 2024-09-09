import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface Props {
  title: string;
  color: string;
  icon: IconDefinition ;
  niveau : number;
}
function Card({ title, color, icon, niveau }: Props) {
  return (
    <div
      className={`flex-col text-xl font-bold text-center shadow-lg border-2 border-black rounded-lg 
        p-4 m-2 transition-transform transform hover:scale-105 hover:shadow-2xl`}
     >
      <p className=" ">{title}</p>
      <div className="  ">
        <FontAwesomeIcon className="w-8 h-8 pt-2" style={{color : `${color}`
          }}
          icon={icon} />
      </div>
    </div>
  );
}

export default Card;
