import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDaKhj3bfyKuNG6YyR0cVKQq016lfjz93M';

YTSearch({ key: API_KEY, term: 'surfboards' }, data => console.log(data));

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
