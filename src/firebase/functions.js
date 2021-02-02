import { auth, db, storage } from "./config";

// Inicio de sesión con correo y contraseña
export const iniciarSesion = (correo, password) => {
  const promesa = auth.signInWithEmailAndPassword(correo, password);
  return promesa;
};

// Cerrar Sesión
export const cerrarSesion = () => {
  auth.signOut();
};

// Subir archivo al storage
export const subirArchivo = async (archivo, ruta) => {
  const archivoRef = storage.ref().child(ruta);

  // TODO: Tener cuidado con los posibles errores y colocar metadata
  await archivoRef.put(archivo);
  const url = await archivoRef.getDownloadURL();
  return url;
};

// Registro de usuarios
export const registrarUsuario = async (usuario, foto) => {
  const respuesta = await auth.createUserWithEmailAndPassword(
    usuario.correo,
    usuario.password
  );

  const uid = respuesta.user.uid;

  let url = "";
  if (foto) {
    url = await subirArchivo(foto, `imagenes/${uid}.png`);
  }
  // Copia los datos del usuario
  const datos = { ...usuario, fotoURL: url };
  delete datos.password;
  delete datos.confirmacion;

  const promesa = db.collection("usuarios").doc(uid).set(datos);
  return promesa;
};

// Registro de agencia
export const registrarAgencia = (agencia) => {
  const promesa = db.collection("agencias").add(agencia);
  return promesa;
};

// Consultar asesores de una agencia
export const obtenerAsesores = async (agenciaId) => {
  const promesa = await db
    .collection("agencias")
    .doc(agenciaId)
    .collection("usuarios")
    .where("tipo", "==", "asesor")
    .get();
  return promesa.docs;
};

// Consultar gerentes de una agencia
export const obtenerGerentes = async (agenciaId) => {
  const promesa = await db
    .collection("agencias")
    .doc(agenciaId)
    .collection("usuarios")
    .where("tipo", "==", "gerente")
    .get();
  return promesa.docs;
};

export const obtenerOperacionesAsignadas = (asesor, func) => {
  return db
    .collection(`agencias/${asesor.agenciaID}/operaciones`)
    .where("asesores", "array-contains", asesor.uid)
    .onSnapshot((snapshot) => {
      const operaciones = snapshot.docs.map((doc) => {
        const operacion = doc.data();
        operacion.id = doc.id;
        return operacion;
      });
      func(operaciones);
    });
};
