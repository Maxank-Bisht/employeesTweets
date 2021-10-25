import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
	const [message, setMessage] = useState('');
	const [tech, setTech] = useState('');
	const [attention, setAttention] = useState(false);

	const onSubmit = () => {
		if (message === '') {
			M.toast({
				html: 'Please Enter Message',
				displayLength: 2500,
				classes: 'red',
			});
		} else if (tech === '') {
			M.toast({
				html: 'Please Select Technician',
				displayLength: 2500,
				classes: 'red',
			});
		} else {
			console.log(message, tech, attention);
		}
	};

	return (
		<div id='add-log-modal' className='modal'>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Enter log message:
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}
						>
							<option value='' disabled>
								Select a technician
							</option>
							<option value='John Doe'>John Doe</option>
							<option value='Sam Smith'>Sam Smith</option>
							<option value='Sara Wilson'>Sara Wilson</option>
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer' style={{ textAlign: 'center' }}>
				<a href='#!' onClick={onSubmit} className='modal-close wave-effect wave-light purple btn'>
					Enter
				</a>
			</div>
		</div>
	);
};

export default AddLogModal;
