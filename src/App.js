import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BookCard from './components/BookCard';
import Search from './components/Search';

export default function App() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    searchIBN().then()
  }, [input])

  async function searchIBN() {
    const response = await fetch (
      `https://openlibrary.org/api/books?bibkeys=ISBN:${input}&jscmd=data&format=json`
    );
    const data = await response.json()
    setBooks(data)
  }

  const searchUserInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <Router>
        <Search input={input} onClick={searchIBN} onChange={searchUserInput} />
        <Switch>
          <Route path={`/isbn/${input}`}>
          <BookCard bookData={books}/>
          </Route>
        </Switch>
      </Router>

    </div>
  )
}