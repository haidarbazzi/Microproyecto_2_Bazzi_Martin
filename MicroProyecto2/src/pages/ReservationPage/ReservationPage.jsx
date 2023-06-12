import React from "react";
import styles from "./ReservationPage.module.css";

export default function ReservationPage({ movie }) {
  const handleOnChange = async (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.prevenDefault();
    console.log({ formData });
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
          className={styles.movies}
        />
        <div>
          <form>
            <input
              className={styles.texto}
              placeholder="Nombre completo"
              id="name"
              name="name"
              onChange={handleOnChange}
              required
            />
            <input
              className={styles.texto}
              placeholder="Correo"
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              required
            />
            <input
              className={styles.texto}
              placeholder="Cedula"
              id="cedula"
              name="cedula"
              onChange={handleOnChange}
              required
            />
          </form>
        </div>
        <div className={styles.botones}>
          <div className={styles.filas}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className={styles.filas}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className={styles.filas}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className={styles.filas}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}
