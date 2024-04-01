import { useState, useEffect, useRef, useMemo } from 'react'

export function useValidarTexto () {
  const [texto, setTexto] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const regex = useMemo(() => {
    return /^[a-zA-Z\s]*$/
  }, [])

  useEffect(() => {
    const newTexto = texto
    if (isFirstInput.current) {
      isFirstInput.current = newTexto === ''
      return
    }
    if (newTexto === '') {
      setError("Ingresa un texto")
      return
    }

    if (!regex.test(newTexto)) {
      setError("Solo letras minúsculas y sin acentos")
      return
    }

    setError(null)
  }, [texto, regex])

  return { texto, setTexto, error }
}
