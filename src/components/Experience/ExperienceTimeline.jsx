import experienceData from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <div className="mx-auto w-full flex flex-col gap-10 lg:gap-6">
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
