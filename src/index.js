import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Headline from './component/headline';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="click the button to render props" />
      </section>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
