import React from 'react'
import styles from './Footer.module.css'
export function Footer() {
  return (
    <>
        <br/>
        <div className={styles.mainFooter}>
            <p>Universidad Metrpoloitana de Caracas</p>
            <p>2023</p>
            <a href='mailto: bazzi.haidar@correo.unimet.edu.ve'>Contactanos</a>
        </div>
    </>
  )
}
