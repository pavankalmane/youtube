import React, { useEffect, useCallback } from "react";
import Buttons from "./Buttons";
import { suggestion_API } from "../utilities/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestions } from "../utilities/suggestionSlice";

const Suggestions = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector((store) => store.suggestion.Suggestions);

  const fetchSuggestions = useCallback(async () => {
    try {
      const data = await fetch(suggestion_API);
      const json = await data.json();
      console.log("Fetched suggestions:", json);
      dispatch(setSuggestions(json.items));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return (
    <div>
      <ul>
        {suggestions?.length > 0 && (
          <li>
            <Buttons title={suggestions[0]?.snippet?.title} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Suggestions;