function Authordropmenu() {
  const authors = [{ label: "Fady" }, { label: "Mona" }, { label: "SS" }];

  return (
    <>
      <select class="form-control mb-3 mt-1" id="exampleFormControlSelect1">
        {authors.map((author, index) => (
          <option>{author.label}</option>
        ))}
      </select>
    </>
  );
}

export default Authordropmenu;
