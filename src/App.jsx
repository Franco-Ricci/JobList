import { useState } from "react";
import data from "./json/data.json";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { JobList } from "./components/JobList";
import { JobFiltered } from "./components/JobFiltered";
import { TagsFiltered } from "./components/TagsFiltered";
import { Footer } from "./components/Footer";

function App() {
  const [filter, setFilter] = useState("");

  const [results, setResults] = useState("");


  //handle the click tag and avoid to add twice the same tag
  function handleClick(e) {
    let clickedTag = e.target.innerHTML;

    if (!filter.includes(clickedTag)) {

      setFilter((prevFilter) => [...prevFilter, e.target.innerHTML]);

    }
  }

  //save the filtered data in results hook
  useEffect(() => {
    const filtered = data.filter((datos) => {
      return (
        filter.includes(datos.role) ||
        filter.includes(datos.level) ||
        datos.languages.some((language) => filter.includes(language)) ||
        (datos.tools && datos.tools.some((tool) => filter.includes(tool)))
      );
    });
    setResults(filtered);
  }, [filter]);

  //function to remove the tag
  function handleClose(tagToRemove) {
    const newFilter = filter.filter((tag) => tag !== tagToRemove);
    setFilter(newFilter);
  }

  //clear all tags filtered
  function clearTags() {
    setFilter("");
  }

  return (
    <>
      <Header></Header>

      <main className="card__container">
        {filter.length > 0 && (
          <TagsFiltered
            filter={filter}
            handleClose={handleClose}
            clearTags={clearTags}
          />
        )}
        {filter.length > 0 ? (
          <JobFiltered results={results} handleClick={handleClick} />
        ) : (
          <JobList data={data} handleClick={handleClick} />
        )}
      </main>
      {filter.length == "" && <Footer />}
    </>
  );
}

export default App;
