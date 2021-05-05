import React, { useState, useEffect, useRef } from "react";
import { Audio } from "./Audio.js";

export function Home() {
	const [nextSong, setNextSong] = useState(
		"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
	);
	const [songId, setSongId] = useState(0);
	const [songList, setSongList] = useState([]);
	const [buttonPlay, setButtonPlay] = useState("d-none");
	const [buttonPause, setButtonPause] = useState("d-block");

	useEffect(() => {
		obtenerCanciones();
	}, []);

	const obtenerCanciones = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setSongList(data);
		} catch (error) {
			console.log(error);
		}
	};

	const cancionAdelante = () => {
		let cancionSiguiente = "https://assets.breatheco.de/apis/sound/";
		if (songId >= 0) {
			cancionSiguiente += songList[songId + 1].url;
			setNextSong(cancionSiguiente);
			setSongId(songId + 1);
		}
		cancionSiguiente = "";
	};

	const cancionAtras = () => {
		let cancionSiguiente = "https://assets.breatheco.de/apis/sound/";

		if (songId > 0) {
			cancionSiguiente += songList[songId - 1].url;
			setNextSong(cancionSiguiente);
			setSongId(songId - 1);
		}
		cancionSiguiente = "";
	};

	let audio = useRef();
	const controlAudio = () => {
		if (audio.current.paused) {
			audio.current.play();
			setButtonPause("d-block");
			setButtonPlay("d-none");
		} else if (!audio.current.paused) {
			audio.current.pause();
			setButtonPause("d-none");
			setButtonPlay("d-block");
		}
	};
	const changeSong = songId => {
		audio.current.src = "https://assets.breatheco.de/apis/sound/" + songId;
		setNextSong();
	};
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="flex-row col-sm-6 col-md-6 col-lg-3">
				<h1 className="head text-secondary text-center my-2">
					<i className="fas fa-headphones mr-3"></i>Audio Player with
					React.js
				</h1>
				<div className="col box">
					{songList.map((elem, i) => {
						return (
							<Audio
								key={i}
								id={elem.id}
								name={elem.name}
								url={elem.url}
								changeSong={changeSong}
								setSongId={setSongId}
								setButtonPlay={setButtonPlay}
								setButtonPause={setButtonPause}
								setNextSong={setNextSong}
							/>
						);
					})}
				</div>
				<div className="col text-center">
					<audio
						ref={audio}
						src={nextSong}
						autoPlay
						onEnded={cancionAdelante}
					/>
					<button
						onClick={cancionAtras}
						className="btn text-white m-2">
						<i className="fas fa-chevron-circle-left"></i>
					</button>
					<button
						onClick={controlAudio}
						className="btn text-white m-2">
						<i className={"fas fa-play " + buttonPlay}></i>
						<i className={"fas fa-pause " + buttonPause}></i>
					</button>
					<button
						onClick={cancionAdelante}
						className="btn text-white m-2">
						<i className="fas fa-chevron-circle-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
