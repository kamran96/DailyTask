import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/bs4.css';
import Navbar from './components/navbar/navbar';
import Todo from './components/todo/todo';
import Wellcome from './components/wellcome';
import ImageBox from './components/imageBoxes/imageBox';
import img1 from './components/imageBoxes/imgs/1.jpg';
import img2 from './components/imageBoxes/imgs/2.jpg';
import img3 from './components/imageBoxes/imgs/3.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <Navbar/>
        </header>
        <section className="todoApp">
          <div className="container">
            <div className="row">
              <div class="col-md-4 col-md-offset-4 text-left">
               <Todo />
              </div>
            </div>

          </div>
        </section>

        

        {/* <section>
          <div className="container">
            <div className="row">
                <ImageBox img={img1} title="green tea"/>
                <ImageBox img={img2} title="tour de hunza"/>
                <ImageBox img={img3} title="green valley"/>
                
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default App;
