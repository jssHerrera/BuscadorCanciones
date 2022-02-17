import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 27rem;
  width: 27%;
  margin: 0 auto;
  height: 55rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.45) -1px -3px 15px,
    rgba(0, 0, 0, 0.45) 1px 2px 15px;
  overflow: auto;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: rebeccapurple white; /* scroll thumb and track */
  ::-webkit-scrollbar {
    width: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rebeccapurple;
    border-radius: 0.2rem;
  }
  display:flex;
    flex-direction:column;
    gap: 3rem;
  `;
const Portada = styled.div`
  display:flex;
  gap:2rem;
  justify-content:center;
  align-items:center;
`
const Imagen = styled.img`
  width: 10rem;
  height:7rem;
  object-fit:fill;
`
const Nombre = styled.div`
 display: flex;
 flex-direction: column;
 gap:0.5rem;
 text-align: center;
 font-size: 1.5rem;

`
const Cancion = ({busqueda, letra, setLetra, setModal, datoArtista }) => {

  const { artista, cancion } = busqueda;
  if (letra.length === 0|| datoArtista.length === 0) return null;

  const handleClick = () => {
    setModal(false);
    setLetra('')
  };
  const {strArtistLogo} = datoArtista
  console.log(datoArtista)
  console.log(strArtistLogo);
  return (
    <Div>
      <Portada>
        <Imagen src={strArtistLogo} alt="Portada" />
        <Nombre>
          <p>{cancion}</p>
          <span>{artista}</span>
        </Nombre>
      </Portada>
      <div>
        <p>{letra.lyrics}</p>
      </div>
      <FontAwesomeIcon
        className="icon"
        icon="arrow-right-from-bracket"
        onClick={handleClick}
      />
    </Div>
  );
};

export default Cancion;
