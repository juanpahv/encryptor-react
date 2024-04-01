import { useState, useEffect, useMemo } from 'react'

export function useEncriptarTexto () {
  const [textoAEncriptar, setTextoAEncriptar] = useState('')
  const [encriptado, setEncriptado] = useState('')
  
  const regex = useMemo(() => {
    return /^[a-zA-Z\s]*$/
  }, [])

  useEffect(() => {

    if (textoAEncriptar === '') return

    if (!regex.test(textoAEncriptar)) return
  
    const newTextoAEncriptar = textoAEncriptar
  
    const lowerCaseTexto = newTextoAEncriptar?.toLowerCase()
    
    const charArray = lowerCaseTexto.split('')
  
    var textoEncriptado = []
  
    charArray?.forEach((char) => {
      switch (char) {
        case "a":
          textoEncriptado += "ai";
          break;
        case "e":
          textoEncriptado += "enter";
          break;
        case "i":
          textoEncriptado += "imes";
          break;
        case "o":
          textoEncriptado += "ober";
          break;
        case "u":
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += char;
          break;
      }
    })
    setEncriptado(textoEncriptado)

  }, [textoAEncriptar, regex])

  return { setTextoAEncriptar, encriptado }
}