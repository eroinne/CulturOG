import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props{
    day : string;
    validate : boolean;
}

function StreakEmblem({day,validate}:Props){
    return(
        <div className="flex-col">
            <FontAwesomeIcon icon={faCircleCheck}className={validate ? 'text-green-500' : ''} 
            />
            <p className="text-sm font-bold">{day}</p>
        </div>
    )
}

export default StreakEmblem