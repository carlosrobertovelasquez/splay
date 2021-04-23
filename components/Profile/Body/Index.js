import React from 'react';
import Information from '../Body/Information';
import Friends from '../Body/Friends';
import Photo from '../Body/Photo';
import Section01 from '../Body/Section01';
import Section02 from '../Body/Section02';
import Publications from '../Body/Publications';
import Link from 'next/link';
export default function Index() {
	return (
		<React.Fragment>
			<section>
				<div className="container2 mx-auto">
					<div className="grid grid-cols-5 gap-4 profileOptions">
						<div className="col-span-2 navbar">
						  <Information/>
                          <Friends/>
						  <Photo/>	
						</div>
						<div className="col-span-3">
							<Section01/>
							<Section02/>
							<Publications/>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
