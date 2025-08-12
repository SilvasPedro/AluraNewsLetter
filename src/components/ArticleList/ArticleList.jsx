// Importando as informações do arquivo JSON que tem os artigos.
import articlesData from '../../../articles.json';
// Importante o componente Article criado na pasta Components.
import Article from '../Article/Article';

// Criando um componente para exibir os dados de articlesData.
const ArticleList = () => {
    return (
        <div className='mt-5 sm:mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px] m-auto max-w-2xl dark:text-white'>
            {/* Usando .map para obter todas as informações dentro do JSON e criar um novo Array com essas informações. */}
            {articlesData.map((props, index) => <Article key={index} {...props}/>)}
        </div>
    );
};

export default ArticleList;