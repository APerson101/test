import React, {useState} from 'react';
import Search from '../../Components/Search/Search';
import "./Homepage.css";

const Homepage = () => {

  const [searchStarted, setSearchStarted] = useState(false);

  const handleSearchStarted = () => {
    document.body.style.backgroundColor = "#222831";
    setSearchStarted(true);
  }

  const handleSearchFinished = () => {
    document.body.style.backgroundColor = null;
  }

  return (
    <>
      <div className={"App " + (searchStarted ? "" : "DisplayCenter")}>
        <Search searchStarted={searchStarted} searchTrigger={handleSearchStarted} afterSearchTrigger={handleSearchFinished} />
      </div>
      <div className="AppFooter">
        Made by Abdulhadi Hashim.
      </div>
    </>

  )
}

export default Homepage;
