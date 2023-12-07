import Score from "./Score";

const ScoreWrapper = ({ scores, direction, size }) => {

  if (!scores || scores.length === 0) {
    return <></>;
  }

  direction = direction ? direction : "row";

  const max = scores.reduce((acc, cur) => (acc.score > cur.score ? acc : cur));
  const others = scores.filter((e) => e.studyType !== max.studyType);

  return (
    <>
      {direction === "row" && (
        <div className="group h-fit w-fit flex flex-row p-[5px] rounded-full opacity-[0.8] bg-charcoal">
          <div className="m-[10px]">
            <Score score={max} size={size} />
          </div>
          {others.map((score) => (
            <div className="hidden m-[10px] group-hover:block hover:block">
              <Score score={score} size={size} />
            </div>
          ))}
        </div>
      )}
      {direction === "column" && (
        <div className="group h-fit w-fit flex flex-col p-[5px] rounded-full opacity-[0.8] bg-charcoal">
          <div className="m-[10px]">
            <Score score={max} size={size} />
          </div>
          {others.map((score) => (
            <div className="hidden m-[10px] group-hover:block hover:block" key={score.studyType.studyId}>
              <Score score={score} size={size} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ScoreWrapper;
