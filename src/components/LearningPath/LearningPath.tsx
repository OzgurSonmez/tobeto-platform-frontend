import React from "react";
import "./LearningPath.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import LearningPathElement from "./LearningPathElement";

type Props = {};

const learningPathElementFakeData: any[] = [
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: ".NET & React Fullstack - 1A",
    datetime: "19 Eylül 2023 15:20",
    isContinue: false,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Java & React Fullstack - 1A",
    datetime: "20 Eylül 2023 16:00",
    isContinue: false,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: ".NET & React Fullstack - 1B",
    datetime: "21 Eylül 2023 18:00",
    isContinue: true,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Java & React Fullstack - 1B",
    datetime: "22 Eylül 2023 00:00",
    isContinue: true,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Yazılım Test - 1A",
    datetime: "23 Eylül 2023 18:00",
    isContinue: true,
    isComplete: true,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Yazılım Test - 1B",
    datetime: "24 Eylül 2023 17:00",
    isContinue: true,
    isComplete: true,
  },
];

const LearningPath = (props: Props) => {
  return (
    <>
      <div className="learning-path-component">
        {learningPathElementFakeData.slice(0, 4).map((value, index) => (
          <LearningPathElement
            key={index}
            imageUrl={value.imageUrl}
            name={value.name}
            datetime={value.datetime}
          />
        ))}
      </div>
      <ShowMoreButton redirectUrl="/my-learning-paths" />
    </>
  );
};

export default LearningPath;
