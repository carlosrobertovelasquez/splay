import React from 'react'

export default function index() {
    return (
        <React.Fragment>
            <div className="mt-5 boxWidget">
								<div className="grid grid-cols-12">
									<div className="col-span-1">
										<p className="text-left" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
											<img
												src="/Quetzal.jpeg"
												style={{
													display: 'inline-block',
													borderRadius: '50%',
													width: '40px',
													height: '40px'
												}}
											/>
										</p>
									</div>
									<div className="col-span-10">
										<p
											className=""
											style={{ fontSize: '1rem', color: '#00A59B', fontWeight: 'bold' }}
										>
											Juan Pineda
										</p>
										<p style={{ fontSize: '0.8rem', color: '#9d9d9d' }}>
											12 de Marzo 2010 a las 5:45 P.M
										</p>
									</div>
									<div className="col-span-1" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
										<p className="text-right">
											<button>
												<img src="/icons/icon2.png" style={{ width: '30px' }} />
											</button>
										</p>
									</div>
									<div className="col-span-12 mt-4 mb-4">
										<p className="text-left" style={{ fontSize: '0.9rem' }}>
											Bienvenidos a Splay, la plataforma de conectividad más completa
										</p>
									</div>
									<div
										className="col-span-11"
										style={{
											borderBottom: '1px solid #ddd',
											paddingBottom: '10px',
											color: '#9d9d9d'
										}}
									>
										<div className="grid grid-cols-12">
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>12 comentarios</p>
											</div>
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>8 veces guardado</p>
											</div>
										</div>
									</div>
									<div
										className="col-span-11 mb-5"
										style={{
											borderBottom: '2px solid #bbb',
											paddingBottom: '10px',
											paddingTop: '10px'
										}}
									>
										<div className="grid grid-cols-3">
											<div className="text-center">
												<button>
													<img
														src="/icons/icon6.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Guardar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/comment.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Comentar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/like.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Me gusta
												</button>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p>Melvin Antonio</p>
													<p>Exelente, bienvenido!</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
														Juan Pineda
													</p>
													<p>
														<textarea
															placeholder="Escribe un comentario"
															style={{
																width: '100%',
																background: 'unset',
																fontSize: '0.8rem'
															}}
														/>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-5 boxWidget">
								<div className="grid grid-cols-12">
									<div className="col-span-1">
										<p className="text-left" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
											<img
												src="/Quetzal.jpeg"
												style={{
													display: 'inline-block',
													borderRadius: '50%',
													width: '40px',
													height: '40px'
												}}
											/>
										</p>
									</div>
									<div className="col-span-10">
										<p
											className=""
											style={{ fontSize: '1rem', color: '#00A59B', fontWeight: 'bold' }}
										>
											Juan Pineda
										</p>
										<p style={{ fontSize: '0.8rem', color: '#9d9d9d' }}>
											12 de Marzo 2010 a las 5:45 P.M
										</p>
									</div>
									<div className="col-span-1" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
										<p className="text-right">
											<button>
												<img src="/icons/icon2.png" style={{ width: '30px' }} />
											</button>
										</p>
									</div>
									<div className="col-span-12 mt-4 mb-4">
										<video width="100%" height="240">
											<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
											Tu browser no soporte est tipo de formato de video.
										</video>
									</div>
									<div
										className="col-span-11"
										style={{
											borderBottom: '1px solid #ddd',
											paddingBottom: '10px',
											color: '#9d9d9d'
										}}
									>
										<div className="grid grid-cols-12">
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>12 comentarios</p>
											</div>
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>8 veces guardado</p>
											</div>
										</div>
									</div>
									<div
										className="col-span-11 mb-5"
										style={{
											borderBottom: '2px solid #bbb',
											paddingBottom: '10px',
											paddingTop: '10px'
										}}
									>
										<div className="grid grid-cols-3">
											<div className="text-center">
												<button>
													<img
														src="/icons/icon6.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Guardar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/comment.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Comentar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/like.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Me gusta
												</button>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p>Melvin Antonio</p>
													<p>Exelente, bienvenido!</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
														Juan Pineda
													</p>
													<p>
														<textarea
															placeholder="Escribe un comentario"
															style={{
																width: '100%',
																background: 'unset',
																fontSize: '0.8rem'
															}}
														/>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-5 boxWidget">
								<div className="grid grid-cols-12">
									<div className="col-span-1">
										<p className="text-left" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
											<img
												src="/Quetzal.jpeg"
												style={{
													display: 'inline-block',
													borderRadius: '50%',
													width: '40px',
													height: '40px'
												}}
											/>
										</p>
									</div>
									<div className="col-span-10">
										<p
											className=""
											style={{ fontSize: '1rem', color: '#00A59B', fontWeight: 'bold' }}
										>
											Juan Pineda
										</p>
										<p style={{ fontSize: '0.8rem', color: '#9d9d9d' }}>
											12 de Marzo 2010 a las 5:45 P.M
										</p>
									</div>
									<div className="col-span-1" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
										<p className="text-right">
											<button>
												<img src="/icons/icon2.png" style={{ width: '30px' }} />
											</button>
										</p>
									</div>
									<div className="col-span-12 mt-4 mb-4">
										<img src="/images/beatiful-nature.jpg" style={{ width: '100%' }} />
									</div>
									<div
										className="col-span-11"
										style={{
											borderBottom: '1px solid #ddd',
											paddingBottom: '10px',
											color: '#9d9d9d'
										}}
									>
										<div className="grid grid-cols-12">
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>12 comentarios</p>
											</div>
											<div className="col-span-4">
												<p style={{ fontSize: '0.8rem' }}>8 veces guardado</p>
											</div>
										</div>
									</div>
									<div
										className="col-span-11 mb-5"
										style={{
											borderBottom: '2px solid #bbb',
											paddingBottom: '10px',
											paddingTop: '10px'
										}}
									>
										<div className="grid grid-cols-3">
											<div className="text-center">
												<button>
													<img
														src="/icons/icon6.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Guardar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/comment.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Comentar
												</button>
											</div>
											<div className="text-center">
												<button>
													<img
														src="/icons/like.png"
														style={{ width: '20px', display: 'inline-block' }}
													/>{' '}
													Me gusta
												</button>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p>Melvin Antonio</p>
													<p>Exelente, bienvenido!</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 mb-5">
										<div
											className="grid grid-cols-10 gap-1"
											style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
										>
											<div className="col-span-1">
												<p className="text-left">
													<img
														src="/Quetzal.jpeg"
														style={{
															display: 'inline-block',
															borderRadius: '50%',
															width: '30px',
															height: '30px'
														}}
													/>
												</p>
											</div>
											<div className="col-span-9" style={{ gridColumn: 'span 14 / span 14' }}>
												<div
													style={{
														padding: '7px 15px',
														background: '#ddd',
														borderRadius: '10px',
														border: '1px solid #ccc'
													}}
												>
													<p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
														Juan Pineda
													</p>
													<p>
														<textarea
															placeholder="Escribe un comentario"
															style={{
																width: '100%',
																background: 'unset',
																fontSize: '0.8rem'
															}}
														/>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
        </React.Fragment>
    )
}
