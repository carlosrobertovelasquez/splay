import React from 'react'

export default function Index() {
    return (
        <div className="boxWidget">
        <div className="grid grid-cols-5 gap-4">
        <div>
            <p style={{ textAlign: 'center' }}>
                <img
                    src="/Quetzal.jpeg"
                    style={{
                        display: 'inline-block',
                        borderRadius: '50%',
                        height: '80px',
                        width: '80px'
                    }}
                />
            </p>
        </div>
        <div className="col-span-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3">
                    <p
                        style={{
                            marginBottom: '2rem',
                            height: '45px',
                            background: 'initial',
                            fontSize: '2.2rem'
                        }}
                    >
                        <span
                            style={{
                                borderBottom: '1px solid #333',
                                paddingBottom: '12px'
                            }}
                        >
                            ¿Que está pasando?
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <img
                            src="/icons/icon5.png"
                            style={{
                                width: '48px',
                                display: 'inline-block',
                                paddingRight: '10px'
                            }}
                        />Multimedia
                    </p>
                </div>
                <div>
                    <p>
                        <img
                            src="/icons/icon4.png"
                            style={{
                                width: '38px',
                                display: 'inline-block',
                                paddingRight: '10px'
                            }}
                        />Etiqueta amigo
                    </p>
                </div>
                <div>
                    <p>
                        <img
                            src="/icons/icon3.png"
                            style={{
                                width: '38px',
                                display: 'inline-block',
                                paddingRight: '10px'
                            }}
                        />Ubicación
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
