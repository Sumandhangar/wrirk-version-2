import React, { useEffect, useState } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"

export default connectSearchBox(
  ({ refine, currentRefinement, className,getdata ,onFocus }) => {

    const [data, setData] = useState("");
    useEffect(() => {
        refine(data);
        
        getdata(data);
    }, [data])

    return (
      <form className={className}>
        <input
          className="SearchInput"
          type="text"
          placeholder="Search Your Research Topic"
          aria-label="Search Your Research Topic"
          onChange={(e)=>{
              setData(e.target.value);
              // refine(e.target.value)
          }}
          value={data}
          id="search"
          onFocus={onFocus}
          required
          autoComplete="off"

        />
        <SearchIcon className="SearchIcon" style={{fontSize:"2px"}}/>
      </form>
    )
  }
)
