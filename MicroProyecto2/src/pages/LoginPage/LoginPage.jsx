import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { auth } from "../../firebase/config";
import { signInWithGoogle } from "../../firebase/auth";
//import { registerWithEmailAndPassword } from "../../firebase/auth";

const LoginPage = () => {
  const [registro, setRegistro] = useState(false);

  const handleSubmit = async (e) => {
    const correo = e.target.email.value;
    const password = e.target.password.value;

    console.log(correo);
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
            required
          />
        </div>
        <button className={styles.btn} type="submit" onClick={handleSubmit}>
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
