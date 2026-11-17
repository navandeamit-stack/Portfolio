
// import sgap from "../assets/sgpa.png";
import ecommrece from "../assets/Techstack.png";
import DDE from "../assets/Techstack.png";
import bankingsystem from "../assets/hero.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: bankingsystem,
      title: "Iphone E-Commerce Store",
      desc: "I built an iPhone E-commerce Website using modern frontend technologies to provide a smooth and user-friendly online shopping experience. Users can explore different iPhone models, view product details, compare prices, and browse available options through an interactive interface. The website focuses on responsive design, attractive layouts, and easy navigation, making it convenient for customers to explore and select their preferred iPhone models across different devices.",
      stack: [
        "Vite + React.js | Tailwind CSS",
        "HTML5 | CSS3 | JavaScript",
        "VS Code | Git | GitHub",
        "Vite ",
      ],
      
      sourceCode: "https://github.com/navandeamit-stack/iphone-ecommerce-store", // Add Github Source Code Link
    },
    {
      id: 4,
      image: DDE, // Replace with the image for the LMS
      title: "Data Driven Valuation Of Used Vehicles Using Machine Learning",
      desc: "Developed a machine learning–based web application using Python, Flask, HTML, CSS, Bootstrap, and JavaScript to predict the resale value of used cars. The system uses a trained Scikit-learn model built with key features such as age, mileage, fuel type, and brand to ensure accurate price predictions. A responsive and user-friendly interface connects seamlessly with the model, allowing users to input details and receive real-time valuation results, delivering an interactive and efficient prediction platform.",
      stack: [
        "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render",
      ],
      // liveLink: "https://lms-gtai.onrender.com/", // Add Live Link
      sourceCode: "https://github.com/Vaishnav4562/Data-Driven-Valuation-of-Used-Vehicles-.git", // Add Github Source Code Link
    },
    {
      id: 2,
      image: ecommrece,
      title: "ECommerce Website",
      desc: "Developed an E-commerce Electronics web application using React.js for the frontend and Java Spring Boot for the backend to enhance the online shopping experience. Users can effortlessly explore products across categories such as mobiles, laptops, watches, and accessories, make secure purchases, and receive instant order updates. This system not only reduces manual effort and minimizes errors but also improves product and inventory management for store owners, ensuring a faster, more reliable, and user-friendly experience for both customers and businesses.",
      stack: [
        "Vite + React.js |",
        "Java | Spring Boot | MySQL",
        "VS Code | Postman",
        "Render | Versal",
      ],

      sourceCode: "https://github.com/nagesh5454/Ecommerce-Platform", // Add Github Source Code Link
    },
  ];

  return (
    <div id="Projects" className="py-10 bg-gray-50">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">Projects</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-5 mt-5 place-items-center lg:place-items-stretch">
        {projects.map(({ id, image, title, desc, stack,  sourceCode }) => (
          <div
            key={id}
            className="max-w-md flex flex-col justify-between mx-auto p-5 border rounded-md shadow-md"
          >
            <div>
              <img className="rounded-md border" src={image} alt={title} />
              <h2 className="text-2xl font-semibold text-center my-3">{title}</h2>
              <p className="text-justify my-3">{desc}</p>
            </div>
            <div className="text-lg font-semibold my-3">Tech Stack:</div>
            <ul className="my-3 text-lg">
              {stack.map((tech, index) => (
                <li key={index} className="flex items-center">
                  🚀 {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 text-sm flex-col lg:flex-row text-center justify-between my-3">
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 border border-green-200 text-green-700 hover:bg-green-200 px-4 py-2 rounded-sm"
                href={liveLink}
              >
                Live Deployment
              </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-sm"
                href={sourceCode}
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
