import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({
			html: 'Log Successfully Deleted',
			displayLength: 2500,
			classes: 'orange',
		});
	};

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
				<a href='#!' onClick={onDelete} className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
