import React, { useState, useEffect } from 'react';
import { getUserByUserId } from '../../../lib/db';
import useTimeAgo from '../../../hooks/useTimeAgo';
import Link from 'next/link';
const index = (props) => {
	const timego = useTimeAgo(props.dateCreate);

	const [ dataUser, setDataUser ] = useState(undefined);

	useEffect(
		() => {
			async function datosUser() {
				const [ response ] = await getUserByUserId(props.idUser);
				setDataUser(response);
			}
			if (props.idUser) {
				datosUser();
			}
		},
		[ props.idUser ]
	);
	if (dataUser === undefined) return null;

	return (
		<React.Fragment>
			<div className="flex max-w-md  shadow-lg rounded-lg overflow-hidden contenedor-item">
				<div className="w-2 bg-gray-800" />
				<Link href="/F/[id]" as={`/F/${props.idUser}`}>
					<div className="flex items-center px-2 py-3">
						<img className="w-12 h-12 object-cover rounded-full" src={dataUser.avatar} />
						<div className="mx-3">
							<h2 className="text-xl font-semibold text-gray-800">{dataUser.firstName}</h2>
							<p className="text-gray-600">Publico:{props.comments} </p>
							<p className=" text-blue-900">{timego} </p>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default index;
