import { StyledComponent } from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Error404() {
    const router = useRouter();

    return (
        <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#808080" }}>Esta página no está disponible</h2>
            <p style={{ color: "#979797" }}>Es posible que el enlace esté roto o que se haya eliminado la página. Verifica que el enlace que quieres abrir es correcto.</p>
            <p><Link href="/"><a className="bg-gray-splay2 hover:bg-white text-white font-bold py-2 px-4 rounded inline-flex items-center">Ir al Inicio</a></Link></p>
            <button type="button" onClick={()=> router.back()} style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#00A59B",
                          }}>Ir Atrás</button>

        </div>
    );
}