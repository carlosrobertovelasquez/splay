import React from 'react';
import Header from '../components/organims/header';
import ImagenPortada from '../public/images/shemaisrael.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Icon1 from '../public/icons/icon1.png';


export default function index() { 
    return (
        <React.Fragment>
            <Header/>
            <section className="mb-4" style={{background: '#d5eceb', padding: '5px 0px 15px 0px'}}>
            <div className="container mx-auto">
                <div className="imagenPortada" style={{ height: '320px'}}>
                    <div style={{backgroundImage:'url(' + '/images/shemaisrael.jpg' + ')', height: '280px', borderRadius: '0px 0px 30px 30px'}}>
                        <button className="updateBackground" style={{ position: 'relative', top: '230px', background:'#58595B', color: '#fff', padding: '5px 20px', left: '20px', borderRadius: '5px'}}>Actualizar Portada<img src="/icons/icon8.png" style={{ width: '35px', display: 'inline-block', paddingLeft: '13px'}}/></button>
                    </div>
                    
                </div>
                <div className="grid grid-cols-4 gap-4 profileOptions">
                    
                    <div className="profilePhoto" style={{textAlign: 'center'}}>
                        <p><img src="/Quetzal.jpeg" style={{borderRadius: '50%', height: '150px', width: '150px'}}/></p>
                    </div>
                    <div className="profileAlias">
                        <h1 style={{ fontSize: '2.5rem', fontWeight:'bold', color: '#00A59B' }}>Juan Pineda</h1>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#58595B' }}>Desarollador</h2>
                    </div>
                    <div className="profileActions">
                        <p className="my-4"><Link href="/"><a className="button2">Añadir Historia</a></Link></p>
                        <p><button className="button3">Editar Perfil</button></p>
                    </div>
                    <div className="profileMore text-right">
                        <p><Link href="/"><a style={{ fontSize:'1.5rem', color: '#808080' }}>Publicaciones</a></Link></p>
                        <p><Link href="/"><a style={{ fontSize:'1.5rem', color: '#808080' }}>Información</a></Link></p>
                        <p><Link href="/"><a style={{ fontSize:'1.5rem', color: '#808080' }}>Amigos</a></Link></p>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <div className="container2 mx-auto">
                    <div className="grid grid-cols-5 gap-4 profileOptions">
                        <div className="col-span-2 navbar">
                            <div className="boxWidget">
                                <h2 className="mb-4" style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#58595B' }}>Información</h2>
                                <ul>
                                    <li className="mb-2" style={{fontSize: '1.2rem'}}>
                                    <img src="/icons/job.png" style={{ width:'35px', display:'inline-block', paddingRight: '13px'}}/>Trabaja en Google
                                    </li>
                                    <li className="mb-2" style={{fontSize: '1.2rem'}}>
                                    <img src="/icons/felling-status.png" style={{ width:'35px', display:'inline-block', paddingRight: '13px'}}/>Comprometido
                                    </li>
                                    <li className="mb-2" style={{fontSize: '1.2rem'}}>
                                    <img src="/icons/schedule.png" style={{ width:'35px', display:'inline-block', paddingRight: '13px'}}/>En Splay desde 2010
                                    </li>
                                </ul>
                                
                                <p style={{marginTop: '50px'}}><button className="button1">Editar Perfil</button></p>
                                
                            </div>
                            <div className="mt-4 boxWidget">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h2 className="mb-4" style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#58595B' }}>Amigos</h2>
                                    </div>
                                    <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="link1 text-right"><Link href='#'><a>Ver todos los amigos</a></Link></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div >
                                        <p className="text-center"><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Melvin Antonio</a></Link></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Alma Cruz</a></Link></p>
                                    </div>
                                    <div>
                                        <p className="text-center"><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Joel Sorto</a></Link></p>
                                    </div>
                                    <div>
                                        <p className="text-center"><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Luis Canales</a></Link></p>
                                    </div>
                                    <div>
                                        <p className="text-center"><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Vannesa Melgar</a></Link></p>
                                    </div>
                                    <div>
                                        <p className="text-center"><Link href='#'><a><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></a></Link></p>
                                        <p className="text-center friendname"><Link href='#'><a>Astrid Ruiz</a></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 boxWidget">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h2 className="mb-4" style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#58595B' }}>Fotografías</h2>
                                    </div>
                                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                        <p className="link1 text-right"><Link href='#'><a>Ver todas las fotos</a></Link></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div >
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '20px'}}/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="boxWidget">
                                <div className="grid grid-cols-5 gap-4">
                                    <div>
                                    <p style={{ textAlign: 'center' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', height: '80px', width: '80px'}}/></p>
                                    </div>
                                    <div className="col-span-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="col-span-3">
                                                <p style={{marginBottom:'2rem', height:'45px', background: 'initial', fontSize: '2.2rem'}}><span style={{ borderBottom: '1px solid #333', paddingBottom: '12px' }}>¿Que está pasando?</span></p>
                                            </div>
                                            <div>
                                                <p><img src="/icons/icon5.png" style={{ width:'48px', display:'inline-block', paddingRight: '10px'}}/>Multimedia</p>
                                            </div>
                                            <div>
                                                <p><img src="/icons/icon4.png" style={{ width:'38px', display:'inline-block', paddingRight: '10px'}}/>Etiqueta amigo</p>
                                            </div>
                                            <div>
                                                <p><img src="/icons/icon3.png" style={{ width:'38px', display:'inline-block', paddingRight: '10px'}}/>Ubicación</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 boxWidget">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-center" style={{ fontSize:'1.8rem', fontWeight:'bold', color:'#00A59B' }}>Publicaciones</p>
                                    </div>
                                    <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="text-center" style={{ fontSize: '0.9rem' }}>Mis Publicaciones</p>
                                    </div>
                                    <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="text-center" style={{ fontSize: '0.9rem' }}>Publicaciones Etiquetadas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 boxWidget">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-1">
                                        <p className="text-left" style={{ fontSize:'1.8rem', fontWeight:'bold' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '40px', height: '40px'}}/></p>
                                    </div>
                                    <div className="col-span-10">
                                        <p className="" style={{ fontSize: '1rem', color: '#00A59B', fontWeight:'bold' }}>Juan Pineda</p>
                                        <p style={{ fontSize: '0.8rem', color:'#9d9d9d' }}>12 de Marzo 2010 a las 5:45 P.M</p>
                                    </div>
                                    <div className="col-span-1" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="text-right"><button><img src="/icons/icon2.png" style={{ width: '30px'}}/></button></p>
                                    </div>
                                    <div className="col-span-12 mt-4 mb-4">
                                        <p className="text-left" style={{ fontSize: '0.9rem' }}>Bienvenidos a Splay, la plataforma de conectividad más completa</p>
                                    </div>
                                    <div className="col-span-11" style={{ borderBottom: '1px solid #ddd', paddingBottom:'10px', color:'#9d9d9d' }}>
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>12 comentarios</p>
                                            </div>
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>8 veces guardado</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-11 mb-5" style={{ borderBottom: '2px solid #bbb', paddingBottom:'10px', paddingTop: '10px' }}>
                                        <div className="grid grid-cols-3">
                                            <div className="text-center"><button><img src="/icons/icon6.png" style={{ width: '20px', display:'inline-block'}}/> Guardar</button></div>
                                            <div className="text-center"><button><img src="/icons/comment.png" style={{ width: '20px', display:'inline-block'}}/> Comentar</button></div>
                                            <div className="text-center"><button><img src="/icons/like.png" style={{ width: '20px', display:'inline-block'}}/> Me gusta</button></div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p>Melvin Antonio</p>
                                                    <p>Exelente, bienvenido!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p style={{fontSize:'1.1rem', fontWeight:'bold'}}>Juan Pineda</p>
                                                    <p><textarea placeholder="Escribe un comentario" style={{width: '100%', background: 'unset', fontSize:'0.8rem'}}></textarea></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5 boxWidget">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-1">
                                        <p className="text-left" style={{ fontSize:'1.8rem', fontWeight:'bold' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '40px', height: '40px'}}/></p>
                                    </div>
                                    <div className="col-span-10">
                                        <p className="" style={{ fontSize: '1rem', color: '#00A59B', fontWeight:'bold' }}>Juan Pineda</p>
                                        <p style={{ fontSize: '0.8rem', color:'#9d9d9d' }}>12 de Marzo 2010 a las 5:45 P.M</p>
                                    </div>
                                    <div className="col-span-1" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="text-right"><button><img src="/icons/icon2.png" style={{ width: '30px'}}/></button></p>
                                    </div>
                                    <div className="col-span-12 mt-4 mb-4">
                                        <video width="100%" height="240">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                                            Tu browser no soporte est tipo de formato de video.
                                        </video>
                                    </div>
                                    <div className="col-span-11" style={{ borderBottom: '1px solid #ddd', paddingBottom:'10px', color:'#9d9d9d' }}>
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>12 comentarios</p>
                                            </div>
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>8 veces guardado</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-11 mb-5" style={{ borderBottom: '2px solid #bbb', paddingBottom:'10px', paddingTop: '10px' }}>
                                        <div className="grid grid-cols-3">
                                            <div className="text-center"><button><img src="/icons/icon6.png" style={{ width: '20px', display:'inline-block'}}/> Guardar</button></div>
                                            <div className="text-center"><button><img src="/icons/comment.png" style={{ width: '20px', display:'inline-block'}}/> Comentar</button></div>
                                            <div className="text-center"><button><img src="/icons/like.png" style={{ width: '20px', display:'inline-block'}}/> Me gusta</button></div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p>Melvin Antonio</p>
                                                    <p>Exelente, bienvenido!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p style={{fontSize:'1.1rem', fontWeight:'bold'}}>Juan Pineda</p>
                                                    <p><textarea placeholder="Escribe un comentario" style={{width: '100%', background: 'unset', fontSize:'0.8rem'}}></textarea></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 boxWidget">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-1">
                                        <p className="text-left" style={{ fontSize:'1.8rem', fontWeight:'bold' }}><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '40px', height: '40px'}}/></p>
                                    </div>
                                    <div className="col-span-10">
                                        <p className="" style={{ fontSize: '1rem', color: '#00A59B', fontWeight:'bold' }}>Juan Pineda</p>
                                        <p style={{ fontSize: '0.8rem', color:'#9d9d9d' }}>12 de Marzo 2010 a las 5:45 P.M</p>
                                    </div>
                                    <div className="col-span-1" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <p className="text-right"><button><img src="/icons/icon2.png" style={{ width: '30px'}}/></button></p>
                                    </div>
                                    <div className="col-span-12 mt-4 mb-4">
                                        <img src="/images/beatiful-nature.jpg" style={{width:'100%'}}/>
                                    </div>
                                    <div className="col-span-11" style={{ borderBottom: '1px solid #ddd', paddingBottom:'10px', color:'#9d9d9d' }}>
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>12 comentarios</p>
                                            </div>
                                            <div className="col-span-4">
                                                <p style={{fontSize:'0.8rem'}}>8 veces guardado</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-11 mb-5" style={{ borderBottom: '2px solid #bbb', paddingBottom:'10px', paddingTop: '10px' }}>
                                        <div className="grid grid-cols-3">
                                            <div className="text-center"><button><img src="/icons/icon6.png" style={{ width: '20px', display:'inline-block'}}/> Guardar</button></div>
                                            <div className="text-center"><button><img src="/icons/comment.png" style={{ width: '20px', display:'inline-block'}}/> Comentar</button></div>
                                            <div className="text-center"><button><img src="/icons/like.png" style={{ width: '20px', display:'inline-block'}}/> Me gusta</button></div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p>Melvin Antonio</p>
                                                    <p>Exelente, bienvenido!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <div className="grid grid-cols-10 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                            <div className="col-span-1">
                                                <p className="text-left"><img src="/Quetzal.jpeg" style={{display: 'inline-block', borderRadius: '50%', width: '30px', height: '30px'}}/></p>
                                            </div>
                                            <div className="col-span-9" style={{gridColumn: 'span 14 / span 14'}}>
                                                <div style={{padding: '7px 15px', background:'#ddd', borderRadius: '10px', border:'1px solid #ccc'}}>
                                                    <p style={{fontSize:'1.1rem', fontWeight:'bold'}}>Juan Pineda</p>
                                                    <p><textarea placeholder="Escribe un comentario" style={{width: '100%', background: 'unset', fontSize:'0.8rem'}}></textarea></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}