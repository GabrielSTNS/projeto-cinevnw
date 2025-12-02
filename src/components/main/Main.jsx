import CardFilme from '../cardFilme/CardFilme'
import S from './Main.module.scss'

const Main = () => {
  return (
    <main className={S.main}>
        <h1>🎬 Filmes em Cartaz</h1>

        <section>
            <CardFilme
            src = "https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg"
            alt = "Imagem de capa do filme Oppenheimer"
            titulo = "Oppenheimer"
            descricao = "O carinha que criou o nagazap."
            />
            <CardFilme
            src = "https://superliterario.com.br/wp-content/uploads/2024/03/big-poster-filme-barbie-2023-tamanho-90x60-cm-lo03-poster-709x1024.webp"
            alt = "Imagem de capa do filme Barbie"
            titulo = "Barbie"
            descricao = "Loira branca."
            />
            <CardFilme
            src = "https://cdn.bcdn.zip/wp-content/uploads/2025/08/ixhI78v.png"
            alt = "Capa do filme Homem-Aranha"
            titulo = "Spider-Man: No Way Home"
            descricao = "Adolescente faz merda e abre uma fenda multiversal."
            />
            <CardFilme
            src = "https://upload.wikimedia.org/wikipedia/pt/6/6c/Demon-slayer-kimetsu-no-yaiba-infinity-castle_portuguese_p%C3%B4ster.jpg"
            alt = "Capa do filme Kimetsu no Yaiba"
            titulo = "Kimetsu no Yaiba: Castelo Infinito"
            descricao = "Michael Jackson tenta conseguir sair de casa durante o dia."
            />
            <CardFilme
            src = "https://upload.wikimedia.org/wikipedia/pt/8/8c/Cartaz_do_filme_One_Piece_Film_Red.png"
            alt = "Capa do filme One Piece: Red"
            titulo = "One Piece: Red"
            descricao = "Shanks tem uma filha cantora."
            />
            <CardFilme
            src = "https://images.justwatch.com/poster/338087625/s718/chainsaw-man-the-movie-reze-arc.jpg"
            alt = "Capa do filme Chainsaw Man - Arco da Reze"
            titulo = "Chainsaw Man: O Filme do Arco da Reze"
            descricao = "Garoto pobre só quer pegar em um peitinho."
            />
            <CardFilme
            src = "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_bi06o7kipd53b4g7jl64qh5g77/-S265-FWEBP"
            alt = "Capa do filme Jujutsu Kaisen 0"
            titulo = "Jujutsu Kaisen 0"
            descricao = "A mina do cara virou um espírito."
            />
            <CardFilme
            src = "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg"
            alt = "Capa do filme Crepúsculo"
            titulo = "Crepúsculo"
            descricao = "Menina da xota quente não sabe se dá pra um lobo ou vampiro."
            />
            <CardFilme
            src = "https://ingresso-a.akamaihd.net/prd/img/movie/premonicao-6-lacos-de-sangue/61244475-f2e0-4e54-9ed7-f15319124f4c.webp"
            alt = "Capa do filme Premonição 6"
            titulo = "Premonição 6"
            descricao = "Velha sobrevive e passa a maldição da morte pra família."
            />
            <CardFilme
            src = "https://editoracontexto.jetassets.com.br/produto/img_9788572446914_DZ.webp"
            alt = "Capa do filme Titanic"
            titulo = "Titanic"
            descricao = "Pobre rouba a mulher do cara."
            />
        </section>
    </main>
  )
}

export default Main
