import ToggleTheme from '../ToogleTheme/ToggleTheme'

const Header = ({ user }) => {
    return (
        <div className="flex h-20 bg-(var:--alura-medio) justify-between items-center px-5 text-(var:--alura-claro) sm:rounded-xl sm:m-5 dark:bg-(var:--alura-medio)">
            <span className='text-(var:--alura-claro)'>Olá, {user?.name || "usuário"}</span>
            <h1 className="text-xl sm:hover:text-2xl sm:cursor-pointer">Alura News Letter</h1>
            <ToggleTheme />
        </div>
    )
}

export default Header