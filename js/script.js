'use strict';

const num = 10 // 定数の定義
const winer = Math.floor(Math.random() * num); // ランダムでwinerが出る

for (let i = 0; i < num; i++) { // numの分、繰り返す
	const div = document.createElement('div') // 定数の定義
	div.classList.add('box');

	div.addEventListener('click', () => {
		if (i === winer) {
			div.textContent = 'Win!';
			div.classList.add('win');
		} else {
			div.textContent = 'Lose!';
			div.classList.add('lose');
		}
		// div.classList.toggle('circle'); // toggleはcircleクラスがあったら外しなかったら付ける(繰り返すことができる)
	});

	document.body.appendChild(div);
}
