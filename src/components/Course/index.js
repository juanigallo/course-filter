function Course(props) {
  return (
    <div className="cardContainer">
      <div
        style={{
          backgroundColor: props.course.color,
          backgroundImage: `url(${props.course.img})`
        }}
        className="imgContainer"
      ></div>
      <h1 className="title">{props.course.name}</h1>
      <p className="desc">{props.course.desc}</p>
    </div>
  );
}

export default Course;
