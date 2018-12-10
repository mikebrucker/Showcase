import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BlobMan from './components/projects/BlobMan';
import Blog from './components/projects/Blog';
import PhaserWebpack from './components/projects/PhaserWebpack';
import Rostered from './components/projects/Rostered';
import TowerDefense from './components/projects/TowerDefense';
import WheelOfFortune from './components/projects/WheelOfFortune';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/projects/blobman' component={BlobMan} />
              <Route exact path='/projects/blog' component={Blog} />
              <Route exact path='/projects/phaserwebpack' component={PhaserWebpack} />
              <Route exact path='/projects/rostered' component={Rostered} />
              <Route exact path='/projects/towerdefense' component={TowerDefense} />
              <Route exact path='/projects/wheeloffortune' component={WheelOfFortune} />
            </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
