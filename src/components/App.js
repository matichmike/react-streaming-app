import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div>
    PageOne
    <Link to="/two">To page 2</Link>
  </div>
}

const PageTwo = () => {
  return <div>
    <button>PageTwo</button>
    <Link to="/">To page 1</Link>
    </div>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/two" component={PageTwo} />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;