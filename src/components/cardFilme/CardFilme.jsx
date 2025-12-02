import S from './CardFilme.module.scss'

const CardFilme = (props) => {
  return (
    <article className={S.article}>
        <img src={props.src} alt={props.alt} />
        <h2>{props.titulo}</h2>
        <p>{props.descricao}</p>
      
    </article>
  )
}

export default CardFilme

