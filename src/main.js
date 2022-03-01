import Phaser from "phaser";

import TitleScreen from "./scenes/titleScreen";
import Game from "./scenes/game";

const config = {
	width: 800,
	height: 500,
	type: Phaser.AUTO,
};

const game = new Phaser.Game(config);

game.scene.add("titlescreen", TitleScreen);
game.scene.add("game", Game);

game.scene.start("game");
