import "./style.scss";
import { useState } from "react";
import Search from "./components/Search";
import Courses from "./components/Courses";

function App() {
  const courses = [
    {
      name: "HTML y CSS",
      color: "rgb(47, 164, 171)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria"
    },
    {
      name: "Javascript",
      color: "rgb(222, 145, 3)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web"
    }
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);

  function handleChange(inputValue) {
    // const { value } = e.target; //<-- Esto potencialmente sea un problema

    if (inputValue == "") {
      setFilteredCourses(courses);
    }

    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredCourses(filtered);
  }

  return (
    <div className="App">
      <Search handleCallback={handleChange} />
      <div className="cardsContainer">
        <Courses data={filteredCourses} />
      </div>
    </div>
  );
}

export default App;
