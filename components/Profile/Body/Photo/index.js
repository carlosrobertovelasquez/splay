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
											Fotografías
										</h2>
									</div>
									<div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
										<p className="link1 text-right">
											<Link href="#">
												<a>Ver todas las fotos</a>
											</Link>
										</p>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
									<div>
										<p style={{ textAlign: 'center' }}>
											<img
												src="/Quetzal.jpeg"
												style={{ display: 'inline-block', borderRadius: '20px' }}
											/>
										</p>
									</div>
								</div>
							</div>
    )
}
