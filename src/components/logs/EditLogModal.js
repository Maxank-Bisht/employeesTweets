import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ updateLog, current }) => {
	const [message, setMessage] = useState('');
	const [tech, setTech] = useState('');
	const [attention, setAttention] = useState(false);

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setTech(current.tech);
			setAttention(current.attention);
		}
	}, [current]);

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
			const updatedLog = {
				id: current.id,
				message,
				tech,
				attention,
				date: new Date(),
			};

			updateLog(updatedLog);
			M.toast({
				html: 'Log Succesfully updated!',
				displayLength: 2500,
				classes: 'green',
			});

			// clear fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
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

const modalStyle = {
	height: '75%',
	width: '75%',
};

EditLogModal.propTypes = {
	current: PropTypes.object,
	updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
