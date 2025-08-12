import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";
import { useState } from "react";

const App = () => {
  // Criando um estado para validar se existe um usuário.
  const [user, setUser] = useState()
  const hasUser = Boolean(user)
  return (
    <div className="h-screen">
      <Header user={user} />
      {/* O componente ArticleList só será renderizado se hasUser for true */}
      { hasUser && <ArticleList /> }
      { hasUser || <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App;