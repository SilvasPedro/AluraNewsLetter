// Criando uma componente Article para receber todas as props que existem dentro do JSON para podermos estilizar.
const Article = ({ title, text, tags, image, alt }) => {
    return (
        <section className="p-5 bg-white sm:rounded-xl shadow-md dark:bg-slate-800 flex flex-col items-start">
            <h3 className="text-xl font-bold ">{title}</h3>
            <div className="w-full justify-start gap-3 hidden sm:flex"> 
                {
                    tags.map((tag) => <span key={tag} className="bg-blue-600 dark:bg-(var:--alura-medio) text-white dark:text-gray-200 rounded-sm px-2 py-1 font-semibold uppercase text-xs my-1 hover:bg-(var:--alura-escuro) hover:scale-110 transition-all ">{tag}</span>)
                }
            </div>
            <div className="grid gap-2">
                {text.map((content, index) => <p key={index} className="">{content}</p>)}
            </div>
            {/* Condicional para, se houver imagem, então é criada a tag <img>. */}
            {image && <img className="p-4" src={image} />}
            {/* Condicional para se houver image, e texto alternativo, criar um <span> com esse texto
            o sr-only indica que irá aparecer apenas para leitores de tela. */}
            {image && alt && <span className="sr-only">{alt}</span>}
            <div className="flex content-center mt-auto">
                <a className="bg-blue-600 dark:bg-(var:--alura-medio) text-white dark:text-gray-200 px-2 py-1 rounded-sm cursor-pointer mt-4">Veja mais...</a>
            </div>
        </section>
    )

}

export default Article;