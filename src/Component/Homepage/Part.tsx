import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

interface Props {
  title: string;
  color: string;
  icon: IconDefinition;
  content: string;
}

function Part({ title, color, icon, content }: Props) {
  const link = `/question/${title}`; // Créer un lien dynamique en fonction du titre

  return (
    <div className="text-center bg-slate-500" style={{ color: `${color}` }}>
      <h1 className="md:text-2xl font-bold pb-4">{title}</h1>
      <p className="md:text-lg pb-4">{content}</p>
      <div className="pb-8 grid grid-rows-1 grid-flow-col md:gap-4 justify-items-center">
        <div className="h-full w-full object-cover lg:w-5/6">
          <a href={link}>
            <Card title="1" color={color} icon={icon} niveau={1} />
          </a>
        </div>
        <div className="h-full w-full object-cover lg:w-5/6">
          <a href={link}>
            <Card title="2" color={color} icon={icon} niveau={2} />
          </a>
        </div>
        <div className="h-full w-full object-cover lg:w-5/6">
          <a href={link}>
            <Card title="3" color={color} icon={icon} niveau={3} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Part;
