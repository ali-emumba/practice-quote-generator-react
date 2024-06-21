import { useState } from "react";
import styles from "./SearchQuotePage.module.css";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { quotesAdded, todoDeleted } from '../../slices/quotesSlice'

import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

const SearchQuotePage = () => {
  const filters = [
    {
      value: "author",
      url: "/quotes?author=",
    },
    {
      value: "text",
      url: "/search/quotes?query=",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(filters[0].value);

  const dispatch = useDispatch()

  const filterOptionsRendered = filters.map((filter) => (
    <option className={styles.options} key={filter.value} value={filter.value}>
      {filter.value}
    </option>
  ));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchQuotesWithFilters();
  };

  const fetchQuotesWithFilters = async () => {
    const BASE_URL = "https://api.quotable.io";
    
    if (searchQuery && filter){
        const selectedFilter = filters.find(({value})=> value === filter);

        const SEARCH_URL = `${BASE_URL}${selectedFilter.url}${searchQuery}`

        console.log(SEARCH_URL);
        axios
          .get(SEARCH_URL)
          .then((response) => {
            console.log(response.data.results);

            const extractedQuotes = response.data.results;
            const payload = [];
            extractedQuotes.forEach(quote => {
              payload.push({
                author: quote.author,
                content: quote.content,
                tags: quote.tags,
              })
            });

            console.log(payload)

            dispatch(quotesAdded(payload))

            // setTimeout(()=>dispatch(todoDeleted()), 10000)
          })
          .catch((err) => {
            console.log(err);
          });
    }
    
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <form className={styles.input} onSubmit={handleSearchSubmit}>
          <input
            className={styles.input_box}
            type="text"
            placeholder="enter search filter"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={styles.input_submit}>
            <FiSearch />
          </button>
        </form>

        <div
          className={styles.filter_wrapper}
          onChange={(e) => setFilter(e.target.value)}
        >
          <div className={styles.filter_icon}>
            <FaFilter />
          </div>
          <select className={styles.filter}>{filterOptionsRendered}</select>
        </div>
      </div>

    </div>
  );
};

export default SearchQuotePage;
