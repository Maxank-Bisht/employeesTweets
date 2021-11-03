import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header' style={myStyle}>
			<li className='collection-header'>
				<h4 className='center' style={{ fontWeight: '700' }}>
					System Logs
				</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs to show...</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

const myStyle = {
	borderRadius: '10px',
	boxShadow: '3px 5px 13px #0000005c',
};

Logs.propTypes = {
	// logs: PropTypes.array.isRequired,
	// loading: PropTypes.bool.isRequired,
	getLogs: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	// logs: state.log.logs,
	// loading: state.log.loading,
	log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
