import React, { useState } from 'react';
import '../App.css';

const Increament = () => {
	const [ count, setCount ] = useState(0);

	const increament = () => {
		setCount(count + 1);
	};

	const decreament = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p
				style={{
					fontSize: '34px',
					fontWeight: '600',
					color: 'red'
				}}
			>
				Count: {count}
			</p>
			<button type="button" className="btn" onClick={() => increament()}>
				Increament
			</button>
			<button type="button" className="btn" onClick={() => decreament()}>
				Decreament
			</button>
		</div>
	);
};

export default Increament;
