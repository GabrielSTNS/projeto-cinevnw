import CardFilme from "../cardFilme/CardFilme";
import S from "./Main.module.scss";

const Main = () => {
  return (
    <main className={S.main}>
      <h1>🎬 Filmes em Cartaz</h1>

      <section>
        <CardFilme
          src="https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg"
          alt="Imagem de capa do filme Oppenheimer"
          titulo="Oppenheimer"
          descricao="O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica."
        />
        <CardFilme
          src="https://upload.wikimedia.org/wikipedia/pt/8/82/Barbie_%282023%29.jpg"
          alt="Imagem de capa do filme Barbie"
          titulo="Barbie"
          descricao="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade."
        />
        <CardFilme
          src="https://www.sonypictures.com.br/sites/brazil/files/2023-06/1400x2100.jpg"
          alt="Capa do filme Homem-Aranha"
          titulo="Homem-Aranha no Aranhaverso"
          descricao="Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker."
        />
        <CardFilme
          src="https://upload.wikimedia.org/wikipedia/pt/6/6c/Demon-slayer-kimetsu-no-yaiba-infinity-castle_portuguese_p%C3%B4ster.jpg"
          alt="Capa do filme Kimetsu no Yaiba"
          titulo="Kimetsu no Yaiba: Castelo Infinito"
          descricao="Os Pilares agora enfrentam Muzan e decidem atacá-lo juntos."
        />
        <CardFilme
          src="https://upload.wikimedia.org/wikipedia/pt/8/8c/Cartaz_do_filme_One_Piece_Film_Red.png"
          alt="Capa do filme One Piece: Red"
          titulo="One Piece: Red"
          descricao="Uta, a cantora mais popular do mundo, vai se apresentar em um palco e revelar sua aparência pela primeira vez. "
        />
        <CardFilme
          src="https://images.justwatch.com/poster/338087625/s718/chainsaw-man-the-movie-reze-arc.jpg"
          alt="Capa do filme Chainsaw Man - Arco da Reze"
          titulo="Chainsaw Man: O Filme do Arco da Reze"
          descricao="Denji finalmente vive como o temido Homem-Motosserra, um jovem com coração de demônio que integra a Divisão Especial 4 de Caçadores de Demônios."
        />
        <CardFilme
          src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_bi06o7kipd53b4g7jl64qh5g77/-S265-FWEBP"
          alt="Capa do filme Jujutsu Kaisen 0"
          titulo="Jujutsu Kaisen 0"
          descricao="O jovem Yuta Okkotsu ganha o controle de um espírito extremamente poderoso, então um grupo de feiticeiros o matriculam na Tokyo Prefectural Jujutsu High School, para ajudá-lo a controlar esse poder e também para ficar de olho nele."
        />
        <CardFilme
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg"
          alt="Capa do filme Crepúsculo"
          titulo="Crepúsculo"
          descricao="A estudante Bella Swan conhece Edward Cullen, um belo mas misterioso adolescente."
        />
        <CardFilme
          src="https://ingresso-a.akamaihd.net/prd/img/movie/premonicao-6-lacos-de-sangue/61244475-f2e0-4e54-9ed7-f15319124f4c.webp"
          alt="Capa do filme Premonição 6"
          titulo="Premonição 6"
          descricao="Atormentada por um pesadelo violento e recorrente, uma estudante universitária volta para casa em busca da única pessoa que pode ser capaz de quebrar o ciclo de morte e salvar sua família do terrível destino que inevitavelmente os aguarda."
        />
        <CardFilme
          src="https://editoracontexto.jetassets.com.br/produto/img_9788572446914_DZ.webp"
          alt="Capa do filme Titanic"
          titulo="Titanic"
          descricao="Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912."
        />
      </section>
    </main>
  );
};

export default Main;
