import { puntuacion, setPuntuacion} from './modelo'

export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10 + 1)
}

export const obtenerValorCarta = (numeroAleatorio) => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2
  }
  return numeroAleatorio
}

export const obtenerPuntosCarta = (carta) => {
  return carta > 7 ? 0.5 : carta
}

export const sumaPuntos = (puntos) => {
  return setPuntuacion(puntuacion + puntos)
}




