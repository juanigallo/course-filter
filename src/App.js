import "./style.scss";
import { useState } from "react";

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

  function handleChange(e) {
    const { value } = e.target;

    if (value == "") {
      setFilteredCourses(courses);
    }

    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredCourses(filtered);
  }

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Empeza a tipear el nombre de un curso"
          onChange={handleChange}
        />
      </div>
      <div className="cardsContainer">
        {filteredCourses.map((course, key) => {
          return (
            <div className="cardContainer" key={key}>
              <div
                style={{
                  backgroundColor: course.color,
                  backgroundImage: `url(${course.img})`
                }}
                className="imgContainer"
              ></div>
              <h1 className="title">{course.name}</h1>
              <p className="desc">{course.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
