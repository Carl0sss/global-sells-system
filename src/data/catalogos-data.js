import React, { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '@/config';

function DataFetcher() {
    const [departamentos, setDepartamentos] = useState([]);
    const [puestos, setPuestos] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [grupoHorarios, setGrupoHorarios] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const [depResponse, puestoResponse, horariosResponse] = await Promise.all([
                    axios.get(endpoints.departamento),
                    axios.get(endpoints.puesto),
                    axios.get(endpoints.horarios)
                ]);

                setDepartamentos(depResponse.data);
                setPuestos(puestoResponse.data);

                const fetchedHorarios = horariosResponse.data;

                const grupos = [...new Set(fetchedHorarios.map(horario => horario.codGrupo))];

                const grupoHorariosData = grupos.map(grupo => {
                    const horariosGrupo = fetchedHorarios.filter(horario => horario.codGrupo === grupo);
                    const primerDia = horariosGrupo[0].dia;
                    const ultimoDia = horariosGrupo[horariosGrupo.length - 1].dia;
                    const nombreGrupo = `${primerDia}-${ultimoDia}`;
                    return {
                        codigoGrupo: grupo,
                        nombre: nombreGrupo,
                    };
                });

                setGrupoHorarios(grupoHorariosData);
                setHorarios(fetchedHorarios);
            } catch (error) {
                console.error('Error al obtener los datos:', error.message);
            }
        };

        fetchData();
    }, []);

    return { departamentos, puestos, horarios, grupoHorarios };
}

export default DataFetcher;
