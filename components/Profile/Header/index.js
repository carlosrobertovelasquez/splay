import React from 'react'
import Link from 'next/link';
export default function index() {
    return (
        <div>
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
        </div>
    )
}
