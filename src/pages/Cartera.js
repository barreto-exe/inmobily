import React, { useState, useEffect } from "react";
import "./Cartera.css";
import Tabla from "../components/Tabla";
import {
  obtenerAsesores,
  obtenerGerentes,
  obtenerClientes,
} from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import { useHistory } from "react-router-dom";

const Cartera = () => {
  //Estas columnas son fijas, el campo field es el nombre con el que se accedera a dicho dato
  const columnas = {
    clientes_asesores: [
      {
        title: "Nombre",
        field: "nombre",
      },
      {
        title: "Apellido",
        field: "apellido",
      },
      {
        title: "Teléfono",
        field: "telefono",
      },
    ],
    propiedades: [
      {
        title: "Descripción",
        field: "descripcion",
      },
      {
        title: "Ubicación",
        field: "ubicacion",
      },
    ],
    plantillas: [
      {
        title: "Descripción",
        field: "descripcion",
      },
    ],
    gerentes: [
      {
        title: "Nombre",
        field: "nombre",
      },
      {
        title: "Apellido",
        field: "apellido",
      },
      {
        title: "Teléfono",
        field: "telefono",
      },
      {
        title: "Departamento",
        field: "departamento",
      },
    ],
  };
  //Esto es para probar, en este formato se introducira la data a las tablas
  // const data = {
  //   clientes : [
  //     {nombre: "Miguelanggelo Sumoza" , tlf: "0424-9514722"},
  //     {nombre: "Samuel De Luque" , tlf: "0416-8429842"},
  //     {nombre: "Jose Saad uwu lindo" , tlf: "0424-5891422"},
  //     {nombre: "Justin Bieber" , tlf: "0418-9843571"},
  //     {nombre: "Monica Cuaulma" , tlf: "0426-4587266"},
  //     {nombre: "Bad Bunny" , tlf: "0415-8714478"},
  //   ],
  //   asesores : [
  //     {nombre: "Román Rodriguez uWu" , tlf: "0424-9514722"},
  //     {nombre: "Vanessita <3" , tlf: "0416-8429842"},
  //     {nombre: "Karen Morán O:" , tlf: "0424-5891422"},
  //     {nombre: "María Guerra >:(" , tlf: "0418-9843571"},
  //   ],
  //   propiedades : [
  //     {descripcion: "Casita bien lindis uwu", ubicacion: "para que quieres saber jaja"}
  //   ],
  //   plantillas : [
  //     {descripcion: "Primer campo de plantillas"},
  //     {descripcion: "Segundo campo de plantillas"},
  //     {descripcion: "Tercer campo de plantillas"},
  //   ],
  //   gerentes : [
  //     {nombre: "Jerry Mattedi", tlf: "0415-7894512", departamento: "Marketing"},
  //     {nombre: "Alvis Daen", tlf: "0486-4554871", departamento: "Director General"},
  //   ]
  // }

  const [asesores, setAsesores] = useState([]);
  const [gerentes, setGerentes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [loadingAsesor, setLoadingAsesor] = useState(true);
  const [loadingGerente, setLoadingGerente] = useState(true);
  const [loadingCliente, setLoadingCliente] = useState(true);

  const usuario = useUsuario();
  const history = useHistory();

  useEffect(() => {
    const unsubAsesores = obtenerAsesores(usuario.agenciaID, (asesores) => {
      setAsesores(asesores);
      setLoadingAsesor(false);
    });

    const unsubGerentes = obtenerGerentes(usuario.agenciaID, (gerentes) => {
      setGerentes(gerentes);
      setLoadingGerente(false);
    });

    const unsubClientes = obtenerClientes(usuario.agenciaID, (clientes) => {
      setClientes(clientes);
      setLoadingCliente(false);
    });

    return () => {
      unsubAsesores();
      unsubGerentes();
      unsubClientes();
    };
  }, []);

  return (
    <div className="fondo">
      <div className="container-menu">
        {loadingAsesor || loadingGerente ? (
          <h1>Cargando...</h1>
        ) : (
          <div>
            <div className="clientes-asesores-container">
              <div className="table-clientes">
                <Tabla
                  columnas={columnas.clientes_asesores}
                  data={clientes}
                  titulo="Clientes"
                  infoClick={(cliente) =>
                    history.push("/clientes/" + cliente.id)
                  }
                />
              </div>
              <div className="table-asesores">
                <Tabla
                  columnas={columnas.clientes_asesores}
                  data={asesores}
                  titulo="Asesores"
                  infoClick={(asesor) =>
                    history.push("/asesores/" + asesor.uid)
                  }
                />
              </div>
            </div>
            <div className="plantillas-propiedades-container">
              <div className="table-propiedades">
                <Tabla
                  columnas={columnas.propiedades}
                  //data={data.propiedades}
                  titulo="Propiedades"
                />
              </div>
              <div className="table-plantillas">
                <Tabla
                  columnas={columnas.plantillas}
                  //data={data.plantillas}
                  titulo="Plantillas"
                />
              </div>
            </div>
            <div className="gerentes-table">
              <Tabla
                columnas={columnas.gerentes}
                data={gerentes}
                titulo="Gerentes"
                infoClick={(gerente) =>
                  history.push("/gerentes/" + gerente.uid)
                  // TODO: Cuidado con esto si no se hace distinción entre asesor y gerente en su pag de detalle
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartera;
