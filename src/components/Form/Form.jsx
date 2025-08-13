const Form = ({ onSubmit }) => {
  const enviarDados = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return <form onSubmit={enviarDados} className="flex flex-col h-full justify-center items-center -mt-20 gap-10 px-5">
    <input type="text" className="input" placeholder="Insira seu nome..." />
    <input type="email" className="input" placeholder="Insira seu e-mail..." />
    <button type="submit" className="btn-primario">Seguir</button>
  </form>
}

export default Form;
