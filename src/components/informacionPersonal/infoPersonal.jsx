import React, { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./infoPersonal.css"; // Ajusta el nombre según tu archivo de estilos

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      password: "",
      confirmarPassword: "",
      aceptaTerminos: false,
    },
  });

  const [editMode, setEditMode] = useState(false);
  const password = useRef(null);
  password.current = watch("password", "");

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = handleSubmit((data) => {
    console.log("Datos enviados:", data);
    // Puedes manejar aquí la lógica para actualizar los datos en tu aplicación
    // reset(); // Descomenta esta línea si deseas limpiar los campos después de enviar
  });

  return (
    <div className="container-form">
      <div className="information">
        <div className="info-childs">
          <h2>{editMode ? "Edita tus datos" : "Tus datos"}</h2>
          <p>{editMode ? "Actualiza tu perfil" : "Información actual"}</p>
          <button className="edit-button" onClick={toggleEditMode}>
            {editMode ? "Guardar" : "Editar"}
            <span role="img" aria-label="lapiz">
              ✏️
            </span>
          </button>
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <form className="form" onSubmit={onSubmit}>
            <label>
              <input
                type="text"
                name="nombre"
                placeholder="Elige un nombre de usuario"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  maxLength: 20,
                  minLength: 2,
                  readOnly: !editMode, // Campo de solo lectura cuando no está en modo de edición
                })}
              />
            </label>
            {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
            {errors.nombre?.type === "maxLength" && (
              <span>Nombre no debe ser mayor a 20 caracteres</span>
            )}
            {errors.nombre?.type === "minLength" && (
              <span>Nombre debe ser mayor a 2 caracteres</span>
            )}

            <label>
              <input
                type="email"
                name="correo"
                placeholder="Correo electronico"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Correo es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Correo no válido",
                  },
                  readOnly: !editMode,
                })}
              />
            </label>
            {errors.correo && <span>{errors.correo.message}</span>}

            <label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "Contraseña debe ser mayor a 6 caracteres",
                  },
                  readOnly: !editMode,
                })}
              />
            </label>
            {errors.password && <span>{errors.password.message}</span>}

            <label>
              <input
                type="password"
                name="confirmarPassword"
                placeholder="Confirma tu contraseña"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirmar contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "Confirmar contraseña debe ser mayor a 6 caracteres",
                  },
                  validate: (value) =>
                    value === password.current || "Las contraseñas no coinciden",
                  readOnly: !editMode,
                })}
              />
            </label>
            {errors.confirmarPassword && (
              <span>{errors.confirmarPassword.message}</span>
            )}

            <label>
              <input
                type="checkbox"
                name="aceptaTerminos"
                {...register("aceptaTerminos", {
                  required: {
                    value: true,
                  },
                  readOnly: !editMode,
                })}
              />
              Acepto los términos y condiciones
            </label>
            {errors.aceptaTerminos && (
              <span>{errors.aceptaTerminos.message}</span>
            )}

            <button type="submit" className="boton-nicole-lo">
              {editMode ? "Guardar" : "Actualizar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
