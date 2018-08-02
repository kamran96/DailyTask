import React from 'react';
// import img1 from './imgs/1.jpg';
import './imageBox.css';
// import App from '../../App'

class ImageBox extends React.Component{
	render(){
		return(
			<div className="col-md-4">
				<div className="imageBoxesStyle text-left">
					<img src={this.props.img} className="imgBox1 img-responsive" alt="boxImg"/>
					<h1 className="titleStyle text-left text-capitalize"> {this.props.title} </h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
					  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
					  culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			)
	}
}

export default ImageBox;