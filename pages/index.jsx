//-- ReactからNext.jsへ page2
/* npmからinstallしたのでパッケージは消えるし、HTMLとかはnext.jsが作るので消える
jsxも読めるのでbabelが必要なくなるとか　とにかく色々消える */
/*
	npm run dev でlocalhost:3000にローカルサーバが立つ
	package.jsonにdevの設定も書く。runで直接ファイルを指定もできる？一旦名前をつけてるっぽい。
	FastRefreshはちょっと感動した。
	この後は最初のアプリ作成に進むか、次のレッスンに進むかになる。
 */

import { useState } from 'react';

function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
	const names = ['john moxley', 'bryan danielson', 'chris jericho'];

	const [likes, setLikes] = useState(0);

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship. 🚀" />
			<Header title="React to Next.js 自動反映テスト" />

			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Like({likes})</button>
		</div>
	);
}