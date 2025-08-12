import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
  const enviarDados = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return <form onSubmit={enviarDados} className="flex flex-col h-full justify-center items-center -mt-20 gap-10">
    <Input type="text" placeholder="Insira o seu nome..." required/>
    <Input type="text" placeholder="Insira o seu nome..." required/>
    <button type="submit" className="bg-blue-700 py-2 px-5 rounded-full cursor-pointer">Seguir</button>
  </form>
}

export default Form;
