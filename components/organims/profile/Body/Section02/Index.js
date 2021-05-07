import React from "react";

export default function Index() {
  return (
    <div className="mt-5 boxWidget">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p
            className="text-center"
            style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#00A59B" }}
          >
            Publicaciones
          </p>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p className="text-center" style={{ fontSize: "0.9rem" }}>
            Mis Publicaciones
          </p>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p className="text-center" style={{ fontSize: "0.9rem" }}>
            Publicaciones Etiquetadas
          </p>
        </div>
      </div>
    </div>
  );
}
