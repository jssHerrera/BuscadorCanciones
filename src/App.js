import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import styled from "styled-components";
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function App() {
  const [busqueda, setBusqueda] = useState({});
  const [letra, setLetra] = useState("");
  const [datoArtista, setArtista] = useState('')
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (Object.keys(busqueda).length === 0) return;

    const { artista, cancion } = busqueda;
    const consultarApi = async () => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`

      const [letra, informacion] = await Promise.all(
        [
          await fetch(url),
          await fetch(url2)
        ]
      )
      const artistaInfo = await informacion.json();
      const artistaCancion = await letra.json();
        setArtista(artistaInfo.artists[0]);
        setLetra(artistaCancion);
      
    };
    consultarApi();
  }, [busqueda]);
console.log(letra);
  return (
    <Fragment>
      {modal ? (
        <>
          <Contenedor className="blur">
            <Formulario setBusqueda={setBusqueda} setModal={setModal} />
          </Contenedor>
          <Cancion
          busqueda={busqueda}
            letra={letra}
            setLetra={setLetra}
            setModal={setModal}
            datoArtista={datoArtista}
          />
        </>
      ) : (
        <Contenedor>
          <Formulario setBusqueda={setBusqueda} setModal={setModal} />
        </Contenedor>
      )}
    </Fragment>
  );
}
export default App;
