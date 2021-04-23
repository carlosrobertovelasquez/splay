import React from 'react'
import Link from 'next/link'
export default function index() {
    return (
        <div className="mt-4 boxWidget">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<h2
											className="mb-4"
											style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#58595B' }}
										>
											Amigos
										</h2>
									</div>
									<div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
										<p className="link1 text-right">
											<Link href="#">
												<a>Ver todos los amigos</a>
											</Link>
										</p>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div>
										<p className="text-center">
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Melvin Antonio</a>
											</Link>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Alma Cruz</a>
											</Link>
										</p>
									</div>
									<div>
										<p className="text-center">
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Joel Sorto</a>
											</Link>
										</p>
									</div>
									<div>
										<p className="text-center">
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Luis Canales</a>
											</Link>
										</p>
									</div>
									<div>
										<p className="text-center">
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Vannesa Melgar</a>
											</Link>
										</p>
									</div>
									<div>
										<p className="text-center">
											<Link href="#">
												<a>
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															height: '80px',
															width: '80px'
														}}
													/>
												</a>
											</Link>
										</p>
										<p className="text-center friendname">
											<Link href="#">
												<a>Astrid Ruiz</a>
											</Link>
										</p>
									</div>
								</div>
							</div>
    )
}
