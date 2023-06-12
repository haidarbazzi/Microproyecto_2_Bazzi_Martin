import React, { useState } from "react";
import styles from "./Slider.module.css";

export default function Slider() {
  const [currIndex, setCurrIndex] = useState(0);
  const [rightArrow, setRightArrow] = useState(">");
  const [leftArrow, setLeftArrow] = useState("<");
  const slides = [
    {
      url: "https://image.tmdb.org/t/p/original//T5xXoFqyc9jNXZIbH4Sw0jwWjw.jpg",
      title: "pelicula",
    },
    {
      url: "https://image.tmdb.org/t/p/original//2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
      title: "To Catch a Killer",
    },
    {
      url: "https://image.tmdb.org/t/p/original//eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
      title: "Guy Ritchies The Covenant",
    },
    {
      url: "https://image.tmdb.org/t/p/original//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      title: "The Mother",
    },
    {
      url: "https://image.tmdb.org/t/p/original//44immBwzhDVyjn87b3x3l9mlhAD.jpg",
      title: "Scream VI",
    },
    {
      url: "https://www.unimet.edu.ve/wp-content/uploads/2019/09/DSC96635666-2.jpg",
      title: "Unimet 1",
    },
    {
      url: "https://www.unimet.edu.ve/wp-content/uploads/2019/10/Bann-Historia.jpg",
      title: "Unimet 2",
    },
    {
      url: "https://www.unimet.edu.ve/wp-content/uploads/2019/10/Bann-Historia.jpg",
      title: "Unimet 3",
    },
  ];
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currIndex].url})`,
  };

  const goToNext = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const goToPrev = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  return (
    <>
      <div style={sliderStyles}>
        <div style={slideStyles}></div>
      </div>
      <button className={styles.rightArrow} onClick={goToNext}>
        <b>{rightArrow}</b>
      </button>
      <button className={styles.leftArrow} onClick={goToPrev}>
        <b>{leftArrow}</b>
      </button>
    </>
  );
}
