import experienceData from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:gap-6 lg:gap-8">
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={experience._id}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
