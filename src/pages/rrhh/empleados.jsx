import React, { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '@/config';
import EmployeTable from '@/components/EmployeTable';
import AddEmployeModal from '@/components/AddEmployeModal';
import CustomAlert from '@/components/CustomAlert';
import { Button } from "@material-tailwind/react";

export function Empleados() {

    const [empleados, setEmpleados] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [alert, setAlert] = useState({ open: false, color: '', content: '', tipo: ''});

    const getEmpleados = async () => {
        try {
            const response = await axios.get(endpoints.empleados);
            const formattedData = response.data.map(emp => {
                const randomImageNumber = Math.floor(Math.random() * 4) + 1;
                return {
                    id: emp.codEmpleado,
                    img: `/img/team-${randomImageNumber}.jpeg`,
                    name: `${emp.nombres} ${emp.apellidos}`,
                    email: emp.email,
                    job: [emp.nombrePuesto, emp.nombreDepartamento],
                    online: true,
                    date: new Date(emp.fechaIngreso).toLocaleDateString('en-US'),
                };
            });
            setEmpleados(formattedData);
        } catch (error) {
            mostrarAlerta('red', 'Error al cargar los empleados.', 'error');
            console.error(error);
        }
    };

    const postEmpleado = async (empleado) => {
        try {
            const response = await axios.post(endpoints.empleados, empleado);
            setOpenModal(false);
            getEmpleados();
            mostrarAlerta('green', 'Empleado guardado correctamente.', 'success');
        } catch (error) {
            mostrarAlerta('red', 'Error al guardar el empleado.', 'error');
            handleCloseModal();
            console.error(error);
        }
    };

    useEffect(() => {
        getEmpleados();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const saveEmploye = (empleado) => {
        postEmpleado(empleado);
    };

    const mostrarAlerta = (color, content, tipo) => {
        setAlert({ open: true, color, content, tipo });
    };

    const closeAlert = () => {
        setAlert({ ...alert, open: false });
    };

    return (
        <div className="relative mt-12 mb-8 flex flex-col gap-12">
            <div className='flex justify-between items-center'>
                <Button variant='gradient' color='gray' onClick={handleOpenModal}>
                    Agregar Empleado
                </Button>
            </div>
            <EmployeTable employeData={empleados} />
            <AddEmployeModal openModal={openModal} codEmpleado={empleados.length + 1} saveEmploye={saveEmploye} handleCloseModal={handleCloseModal} />
            <div className="fixed top-10 right-10 z-50">
                <CustomAlert open={alert.open} color={alert.color} content={alert.content} tipo={alert.tipo} onClose={closeAlert} />
            </div>
        </div>
    )
}

export default Empleados;
