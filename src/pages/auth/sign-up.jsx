import React, { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import endpoints from "@/config";


export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(endpoints.register, {
        user: username,
        password: password,
      });
      console.log(response.data);

      const { result, message, token } = response.data;
      if (result) {

        localStorage.setItem('token', token);
        navigate('/auth/sign-in'); 
      } else {
        setError(message);
      }
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setError('Error registrando usuario');
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Crea tu cuenta</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa un nombre de usuario y contraseña.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nombre de usuario
            </Typography>
            <Input
              size="lg"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Registrarse ahora
          </Button>
          {error && <Typography color="red" className="text-center mt-4">{error}</Typography>}
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            ¿Ya tienes una cuenta?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Inicia Sesión</Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;