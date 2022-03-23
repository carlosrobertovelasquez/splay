import React, { useState, useEffect } from 'react';
import { listenLatesPublications } from '../../../../lib/db';
import Notificaciones from '../../../atoms/Notificaciones';
const index = (props) => {
	const [ dataPublication, setDataPublication ] = useState(undefined);
	const { userid, following } = props.datos[0];

	const { show, setShowModal } = props;
	const { setResultado } = props;
	useEffect(
		() => {
			let unsubscribe;
			if (userid) {
				unsubscribe = listenLatesPublications((newPublications) => {
					setDataPublication(newPublications);
				});

				return () => unsubscribe && unsubscribe();
			}
		},
		[ userid ]
	);

	if (dataPublication === undefined) return null;

	const userExits = (arry) => {
		const resul = arry.includes(userid);
		if (!resul) {
			following.push(userid);
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
	setResultado(datos.length);
	return (
		<React.Fragment>
			{show ? (
				<React.Fragment>
					<div className="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
						<div className="containerNotificaciones">
							<h1 className="encabezado">Notificaciones</h1>
							{datos
								.sort((a, b) => a.dateCreate - b.dateCreate)
								.map((publi) => (
									<Notificaciones
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
						</div>
					</div>
				</React.Fragment>
			) : null}
		</React.Fragment>
	);
};

export default index;
