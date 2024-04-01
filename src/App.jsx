import './App.css'
import { useEncriptarTexto } from './hooks/useEncriptarTexto'
import { useValidarTexto } from './hooks/useValidarTexto'

function App() {
  const { texto, setTexto, error } = useValidarTexto()
  const { setTextoAEncriptar, encriptado } = useEncriptarTexto()
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleOnChange = (e) => {
    setTexto(e.target.value)
  }

  const handleEncriptar = () => {
    const newTexto = texto
    setTextoAEncriptar(newTexto)
  }

  const handleDesencriptar = () => {
    console.log('desencriptar')
  }

  const handleCopiar = () => {
    navigator.clipboard.writeText(encriptado)
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <textarea name="texto" placeholder='Ingresa el texto aqui' onChange={handleOnChange} value={texto}></textarea>
        <span>
        {
          error && <p><strong style={{color: "red"}}>{error}</strong></p>
        }
        </span>
        <div>
          <button onClick={handleEncriptar}>Encriptar</button>
          <button onClick={handleDesencriptar}>Desencriptar</button>
        </div>
      </form>

      <section>
        <article>
          {
            encriptado ? 
              <>
              {encriptado}
              <button onClick={handleCopiar}>Copiar</button>
              </>
               : 
              <>
              <h2>Ningún mensaje fue encontrado</h2>
              <p>Ingresa el texto que desees encriptar o desencriptar</p>
              </>
          }
        </article>
      </section>
    </main>
  )
}

export default App
