import React, { useState, useRef } from "react";
import { Audio } from "./Audio.js";

export function Home() {
	const [nextSong, setNextSong] = useState(
		"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
	);
	const [songId, setSongId] = useState(0);

	const [songList, setSongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

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
		} else if (!audio.current.paused) {
			audio.current.pause();
		}
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					{songList.map((elem, i) => {
						return (
							<Audio
								key={i}
								id={elem.id}
								name={elem.name}
								url={elem.url}
								setNextSong={setNextSong}
								setSongId={setSongId}
							/>
						);
					})}
				</div>
				<div className="col">
					<audio
						ref={audio}
						src={nextSong}
						autoPlay
						onEnded={cancionAdelante}
					/>
					<div className="col">
						<p className="text-white">
							{songId + 1} -{" " + songList[songId].name}
						</p>
					</div>
					<button
						onClick={cancionAtras}
						className="btn bg-dark text-white">
						Prev
					</button>
					<button
						onClick={controlAudio}
						className="btn bg-dark text-white">
						Play
					</button>
					<button
						onClick={cancionAdelante}
						className="btn bg-dark text-white">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
