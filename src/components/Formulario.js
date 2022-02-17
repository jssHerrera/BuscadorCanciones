import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  margin-inline: auto;
  min-height: 50rem;
`;
const Caja = styled.fieldset`
  width: 40%;
  height: 30rem;
  padding: 3rem;
  margin-inline: auto;
  background-color: white;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const FromGrup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;
const Boton = styled.input`
  padding: 0.5rem;
  min-width: 20rem;
  margin: 0 auto;
  border-radius: 1rem;
`;

const Formulario = ({setBusqueda, setModal}) => {
  const [data, setData] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);
  const { artista, cancion } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista.trim()==='' || cancion.trim()==='') {
      setError(true);
      setInterval(() => {
        setError(false)
      }, 2000);
      return;
    }
    setError(false);
    setBusqueda(data)
    setModal(true)
  };

  // console.log(data);
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Buscador de Canciones</h1>
      <Caja>
        <div>
          {error ? <p>Los campos son obligatorios</p> : null}
          <FromGrup>
            <label className="form__label" htmlFor="artista">
              Artista
            </label>

            <input
              className="form__field"
              type="text"
              name="artista"
              placeholder="Nombre Artista"
              defaultValue={artista}
              onChange={handleChange}
              autoComplete='off'
            />
          </FromGrup>

          <FromGrup>
            <label className="form__label" htmlFor="cancion">
              Cancion
            </label>

            <input
              className="form__field"
              type="text"
              name="cancion"
              placeholder="Nombre cancion"
              defaultValue={cancion}
              onChange={handleChange}
              autoComplete='off'
            />
          </FromGrup>
        </div>

        <Boton type="submit" />
      </Caja>
    </Form>
  );
};

export default Formulario;
