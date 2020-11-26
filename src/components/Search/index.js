function Search(props) {
  function handleChange(e) {
    //Esta seria nuestra accion
    const { value } = e.target;
    props.handleCallback(value);
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Empeza a tipear el nombre de un curso"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
