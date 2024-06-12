import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Radio,
    Select,
    Option,
    Textarea
} from "@material-tailwind/react";
import fetchData from "@/data/catalogos-data";

const AddEmployeModal = ({ openModal, codEmpleado, saveEmploye, handleCloseModal }) => {

    const [open, setOpen] = useState(openModal);
    const [departamento, setDepartamento] = useState("");

    const initialEmpleado = {
        codEmpleado: codEmpleado,
        nombres: "",
        apellidos: "",
        sexo: "",
        dui: "",
        isss: "",
        afp: "",
        nombreAfp: "",
        fechaNacimiento: "",
        telefono: "",
        estadoCivil: "",
        email: "",
        domicilio: "",
        numeroContrato: 0,
        fechaIngreso: "",
        salario: 0,
        codDepartamento: "",
        codPuesto: "",
        codGrupo: 0,
    };

    const [empleado, setEmpleado] = useState(initialEmpleado);

    const { departamentos, puestos, grupoHorarios } = fetchData();

    useEffect(() => {
        setOpen(openModal);
    }, [openModal]);

    useEffect(() => {
        setEmpleado(prev => ({ ...prev, codEmpleado }));
    }, [codEmpleado]);

    const handleOpen = () => {
        setOpen((curr) => !curr);
        if (open) {
            setEmpleado(initialEmpleado);
            handleCloseModal();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpleado(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setEmpleado(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        saveEmploye(empleado);
        setEmpleado(initialEmpleado);
    };

    return (
        <Dialog open={open} size="xl" handler={handleOpen} className="">
            <Card className="w-full items-center">
                <CardBody className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <Typography variant="h4" color="blue-gray">
                            Registrar nuevo empleado
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Ingrese los datos solicitados para registrar un nuevo empleado.
                        </Typography>
                    </div>

                    <div className="flex flex-1 gap-4">
                        <div>
                            <div className="font-semibold mb-5">
                                <h2>Datos personales</h2>
                                <hr />
                            </div>

                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Nombres
                                    </Typography>
                                    <Input
                                        name="nombres"
                                        placeholder="Nombres"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Apellidos
                                    </Typography>
                                    <Input
                                        name="apellidos"
                                        placeholder="Apellidos"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography className="mb-2" variant="small">
                                        Sexo
                                    </Typography>
                                    <div className="flex flex-1 gap-3">
                                        <Radio name="sexo" label="M" value="M" onChange={handleInputChange} />
                                        <Radio name="sexo" label="F" value="F" onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        DUI
                                    </Typography>
                                    <Input
                                        name="dui"
                                        placeholder="DUI"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        ISSS
                                    </Typography>
                                    <Input
                                        name="isss"
                                        placeholder="ISSS"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        AFP
                                    </Typography>
                                    <Input
                                        name="afp"
                                        placeholder="AFP"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Fecha de nacimiento
                                    </Typography>
                                    <Input
                                        name="fechaNacimiento"
                                        placeholder="Fecha de nacimiento"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        type="date"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Telefono
                                    </Typography>
                                    <Input
                                        name="telefono"
                                        placeholder="Telefono"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Estado Civil
                                    </Typography>
                                    <Select
                                        name="estadoCivil"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={(value) => handleSelectChange('estadoCivil', value)}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    >
                                        <Option value="soltero">Soltero</Option>
                                        <Option value="casado">Casado</Option>
                                        <Option value="divorciado">Divorciado</Option>
                                        <Option value="viudo">Viudo</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Email
                                    </Typography>
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        type="email"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Nombre AFP
                                    </Typography>
                                    <Select
                                        name="nombreAfp"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={(value) => handleSelectChange('nombreAfp', value)}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    >
                                        <Option value="Crecer">Crecer</Option>
                                        <Option value="Confia">Confia</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Typography className="mb-2" variant="small">
                                    Domicilio
                                </Typography>
                                <Textarea
                                    name="domicilio"
                                    placeholder="Domicilio"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    size="lg"
                                    onChange={handleInputChange}
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-5">
                                <h2>Laborales</h2>
                                <hr />
                            </div>
                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Numero de contrato
                                    </Typography>
                                    <Input
                                        name="numeroContrato"
                                        placeholder="Numero de contrato"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Fecha de ingreso
                                    </Typography>
                                    <Input
                                        name="fechaIngreso"
                                        placeholder="Fecha de ingreso"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        type="date"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Salario
                                    </Typography>
                                    <Input
                                        name="salario"
                                        placeholder="Salario"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        type="number"
                                        onChange={handleInputChange}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-1 items-center gap-3">
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Area
                                    </Typography>
                                    <Select
                                        name="codDepartamento"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(value) => {
                                            setDepartamento(value);
                                            handleSelectChange('codDepartamento', value);
                                        }}
                                    >
                                        {departamentos.map((departamento) => (
                                            <Option key={departamento.codDepartamento} value={departamento.codDepartamento}>
                                                {departamento.nombreDepartamento}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Puesto
                                    </Typography>
                                    <Select
                                        name="codPuesto"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={(value) => handleSelectChange('codPuesto', value)}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    >
                                        {(departamento !== "" ? puestos.filter(puesto => puesto.codDepartamento === departamento) : puestos).map((puesto) => (
                                            <Option key={puesto.codPuesto} value={puesto.codPuesto}>{puesto.nombrePuesto}</Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="mb-2" variant="small">
                                        Horarios
                                    </Typography>
                                    <Select
                                        name="codGrupo"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        size="lg"
                                        onChange={(value) => handleSelectChange('codGrupo', value)}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    >
                                        {grupoHorarios.map((grupo) => (
                                            <Option key={grupo.codigoGrupo} value={grupo.codigoGrupo}>{grupo.nombre}</Option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" onClick={handleSave} fullWidth>
                        Registrar
                    </Button>
                </CardFooter>
            </Card>
        </Dialog>
    )
}

export default AddEmployeModal;
