import S from './header.module.scss'

const Header = () => {
  return (
    <header className={S.header}>
    <h1>CineVnW</h1>
    <nav>
        <a href="#">Início</a>
        <a href="#">Filmes</a>
    </nav>
    </header>
  )
}

export default Header
