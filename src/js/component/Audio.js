import React from "react";
import PropTypes from "prop-types";

export function Audio(props) {
	return (
		<div
			onClick={() => {
				props.setNextSong(props.url);
				props.setSongId(props.id - 1);
			}}
			className="bg-secondary rounded mb-1 text-dark">
			<div className="d-flex">
				<p className="numero mx-1 text-white">{props.id}</p>
				<p className="titulo text-white">{props.name}</p>
			</div>
		</div>
	);
}

Audio.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	url: PropTypes.string,
	setSongId: PropTypes.func,
	setNextSong: PropTypes.func
};
