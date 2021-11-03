import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<h3>Technicians Lists</h3>
				<ul className='collection'>
					{!loading && techs !== null && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	getTechs: PropTypes.func.isRequired,
	tech: PropTypes.object,
};

const mapStateToProps = (state) => ({
	tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
