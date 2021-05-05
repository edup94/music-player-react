import React from "react";
import PropTypes from "prop-types";

export function Audio(props) {
	return (
		<div
			onClick={() => {
				props.setNextSong(props.url);
				props.setSongId(props.id - 1);
				props.changeSong(props.url);
			}}
			className="bg-dark rounded mb-1">
			<div className="d-flex canciones">
				<p className="numero mx-3 text-secondary">{props.id}</p>
				<p className="titulo mr-3 text-white">{props.name}</p>
			</div>
		</div>
	);
}

Audio.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	url: PropTypes.string,
	setSongId: PropTypes.func,
	setNextSong: PropTypes.func,
	changeSong: PropTypes.func
};
