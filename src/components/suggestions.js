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
      dispatch(setSuggestions(json.items));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return (
    <div className="flex overflow-x-auto [scrollbar-width:none]">
        {suggestions?.length > 0 && 
            suggestions?.map((suggestion) => (
              <Buttons key={suggestion.id} title={suggestion.snippet.title} />
            ))}
      </div>
  );
};

export default Suggestions;