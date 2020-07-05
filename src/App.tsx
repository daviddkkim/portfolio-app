import React from 'react';
import './App.css';
import Header from './components/header/header'
import Home from './pages/home/home'
import { Switch, Route, withRouter} from 'react-router-dom'
import StickyHeader from './components/header/stickyHeader';

function App() {
  return (
      <div >
        <StickyHeader/>
        <div>
        <Switch>
                <Route path="/" component= {Home} exact />
                <Route path="/david" render = { () => (<div>david</div>)} />
                <Route path="/about" render = { () => (<div>about</div>)} />
                <Route path="/work" render = { () => (<div>work</div>)} />
                <Route path="/resume" render = { () => (<div>resume</div>)} />

        </Switch>
        </div>
      </div>
  );
}

export default App;
