import React, { useEffect, useState } from 'react';
import { listenLatesPublications } from '../../../../lib/db';

import Body from './Body';
export default function index({ userId, following }) {
	const [ dataPublication, setDataPublication ] = useState(undefined);

	useEffect(
		() => {
			let unsubscribe;
			if (userId) {
				unsubscribe = listenLatesPublications((newPublications) => {
					setDataPublication(newPublications);
				});

				return () => unsubscribe && unsubscribe();
			}
		},
		[ userId ]
	);

	if (dataPublication === undefined) return null;

	const userExits = (arry) => {
		const resul = arry.includes(userId);
		if (!resul) {
			following.push(userId);
		}
		return following;
	};

	userExits(following);

	const datos = [];
	dataPublication.forEach(function(task) {
		for (let index = 0; index < following.length; index++) {
			if (following[index] === task.idUser) {
				datos.push(task);
			}
		}
	});

	return (
		<React.Fragment>
			{datos
				.sort((a, b) => a.dateCreate - b.dateCreate)
				.map((publi) => (
					<Body
						key={publi.id}
						comments={publi.comments}
						dateCreate={publi.dateCreate}
						file={publi.file}
						idUser={publi.idUser}
						typeFile={publi.typeFile}
						id={publi.id}
						likes={publi.likes}
					/>
				))
				.reverse()}
		</React.Fragment>
	);
}
