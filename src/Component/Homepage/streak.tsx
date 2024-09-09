import StreakEmblem from "./streakEmblem";

function Streak() {
  return (
    <div className="p-2">
      <p className="text-lg">Repondez a 5 quiz pour valider la streak</p>
      <div className="grid grid-rows-1 grid-flow-col justify-items-center mt-8 p-2 md:pl-60 md:pr-60 md:">
        <StreakEmblem validate={true} day="M" />
        <StreakEmblem validate={false} day="T" />
        <StreakEmblem validate={false} day="W" />
        <StreakEmblem validate={false} day="T" />
        <StreakEmblem validate={false} day="F" />
        <StreakEmblem validate={false} day="S" />
        <StreakEmblem validate={false} day="S" />
      </div>
    </div>
  );
}

export default Streak;
