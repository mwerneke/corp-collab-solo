import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import "./Search.css";
function Search() {
  const searchReducer = useSelector((store) => store.searchReducer);

  return (
    <div>
      <h1> Search Results</h1>
      <div className="library__videos">
      {searchReducer &&
          searchReducer.map((searchReducer) => {
            return (
              <VideoCard
                key={searchReducer.key}
                video={
                  "https://corp-collab.s3.us-east-2.amazonaws.com/" +
                  searchReducer.key
                }
                title={searchReducer.question}
                dept={searchReducer.department}
              />
            );
          })}
     </div>
    </div>
  );
}

export default Search;
