import React from 'react';
import '../FaceRecognition/FaceRecognition.css'

const Box = ({ top, right, bottom, left }) => {
	return (
			<div className='bounding-box' style={{top: {top},right: {right},bottom: {bottom},left: {left}}}></div>
	);
}

export default Box;
