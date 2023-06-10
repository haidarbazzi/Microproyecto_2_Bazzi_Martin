import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { auth } from "../../firebase/config";
import {
  loginEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
//import { registerWithEmailAndPassword } from "../../firebase/auth";

const LoginPage = () => {
  const [registro, setRegistro] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = async (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ formData });
    if (registro) {
      try {
        await registerWithEmailAndPassword(formData.email, formData.password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await loginEmailAndPassword(formData.email, formData.password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    console.log("TUKI");
    await signInWithGoogle();
  };

  return (
    <div className={styles.container}>
      <h1>{registro ? "Registrate Aquí" : "Inicia Sesión"}</h1>
      <form className={styles.inputs} onSubmit={handleSubmit}>
        <div className={styles.textfield}>
          <label>Email</label>
          <input
            className={styles.texto}
            type="email"
            placeholder="Ingresar email"
            id="email"
            name="email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className={styles.textfield}>
          <label>Contraseña</label>
          <input
            className={styles.texto}
            type="password"
            placeholder="Ingresar contraseña"
            id="password"
            name="password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          {registro ? "Registrate" : "Inicia Sesión"}
        </button>
      </form>
      <div>
        <button onClick={() => setRegistro(!registro)}>
          {registro
            ? "¿Ya tienes cuenta? Incia Sesión"
            : "¿No tienes cuenta? Registrate"}
        </button>
      </div>
      <div>
        <p>o</p>
        <button onClick={handleSignInWithGoogle}>
          Inicia Sesión con Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
