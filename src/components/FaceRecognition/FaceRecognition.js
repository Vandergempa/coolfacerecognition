import React from 'react';
// import Box from '../Box/Box.js'
import '../FaceRecognition/FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	// const boxArray = 
	// 	box.map((user, i) => {
	// 		return (
	// 			<Box 
	// 				key={i}
	// 				top={box[i].topRow} 
	// 				right={box[i].rightCol} 
	// 				bottom={box[i].bottomRow}
	// 				left={box[i].leftCol}
	// 			/>
	// 		);
	// 	})

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
	          <img id='inputimage' src={ imageUrl } alt='' width='500px' height='auto'/>
	          {box.map(box => {
	                            return <div key={box.topRow} className='bounding-box'
	                                   style={{
	                                           top: box.topRow,
	                                           right: box.rightCol,
	                                           bottom: box.bottomRow,
	                                           left: box.leftCol
	                                         }}
	                                   >
	                                   </div>
	                          })
	          }
			</div>
		</div>
	);
}
	
export default FaceRecognition;