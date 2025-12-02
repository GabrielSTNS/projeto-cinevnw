import S from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={S.footer}>
      <p>&copy; Gabriel Santana em parceria com a escola Vai na Web. Todos os direitos reservados.</p>
      <div>
        <a href="https://www.linkedin.com/in/gabrielsnt/" target='_blank'><img src="https://img.icons8.com/arcade/64/linkedin-circled.png" alt="linkedin"/></a>
        <a href="https://github.com/GabrielSTNS" target='_blank'><img src="https://img.icons8.com/arcade/64/github.png" alt="github"/></a>
      </div>
    </footer>
  )
}

export default Footer
