import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log }) => {
	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					style={{ fontWeight: '600', verticalAlign: 'super' }}
					className={`modal-trigger ${log.attention ? 'red-text' : 'purple-text'}`}
				>
					{log.attention && (
						<i className='material-icons' style={{ fontSize: '20px', verticalAlign: 'sub' }}>
							error
						</i>
					)}
					{log.message}
				</a>

				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by
					<span className='black-text'> {log.tech} </span> on{' '}
					<Moment parse='YYYY-MM-DDTHH:mm:ss' format='MMMM Do, YYYY, h:mm a'>
						{log.date}
					</Moment>
				</span>
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default LogItem;
