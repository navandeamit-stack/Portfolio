import pythonImage from "../assets/python.png";
import htmlImage from "../assets/html5.png";
import cssImage from "../assets/css3.png";
import jsImage from "../assets/javascript.png";
import reactImage from "../assets/reactjs.png";
import tailwindImage from "../assets/tailwind.png";

import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";
import sqlImage from "../assets/sql.png";


const Skills = () => {
  const skill = [
    { id: 1, image: pythonImage, name: "Python" },
    { id: 2, image: gitImage, name: "git" },
    { id: 3, image: githubImage, name: "github" },
    { id: 4, image: htmlImage, name: "html" },
    { id: 5, image: cssImage, name: "css" },
    { id: 6, image: jsImage, name: "js" },
    { id: 7, image: reactImage, name: "React" },
    { id: 8, image: tailwindImage, name: "tailwind" },


    { id: 9, image: sqlImage, name: "SQL" },
    
  ];
  return (
    <div id="Skills" className="bg-yellow-50 py-10">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-yellow-500">Skills</span>
        </h1>
        <div className="max-w-xl mx-auto my-10 px-5">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
            {skill.map(({ id, image, name }) => (
              <img
                key={id}
                className="h-fit w-fit object-cover"
                src={image}
                alt={name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
