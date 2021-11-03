import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '') {
			M.toast({
				html: 'Please Enter First Name',
				displayLength: 2500,
				classes: 'red',
			});
		} else if (lastName === '') {
			M.toast({
				html: 'Please Enter Last Name',
				displayLength: 2500,
				classes: 'red',
			});
		} else {
			addTech({
				firstName,
				lastName,
			});
			M.toast({
				html: `${firstName} ${lastName} was added!`,
				displayLength: 2500,
				classes: 'green',
			});

			// clear fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id='add-tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>Enter Teachnician Details</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label htmlFor='firstName' className='active'>
							Enter First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor='lastName' className='active'>
							Enter Last Name
						</label>
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

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
