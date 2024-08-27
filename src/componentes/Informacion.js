import React from 'react'

const Informacion = () => {
    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Información Local</h2>
            <div className="text-lg">
                <p><span className="font-semibold">Dirección:</span> Calle Falsa 123, Ciudad Ejemplo</p>
                <p><span className="font-semibold">Horario:</span> Lunes a Viernes de 8:00 AM a 5:00 PM</p>
                <p><span className="font-semibold">Punto de Encuentro:</span> Plaza Central, junto al monumento principal.</p>
                <p>
                    <a
                        href="https://www.google.com/maps"
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver en Google Maps
                    </a>
                </p>
            </div>
        </div>



    )
}

export default Informacion
