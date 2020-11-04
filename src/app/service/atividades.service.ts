import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  constructor() { }

  activeList = [
    {
      name: 'Crochê',
      image: 'croche',
      describle: 'Pesquisas comprovam que fazer crochê é uma excelente terapia. Criar algo com as próprias mãos é a possibilidade de se expressar. É também uma maneira de aumentar a concentração e, assim, conservar as atividades cerebrais a todo vapor, nos mantendo longe de males como depressão e Alzheimer”, diz Simone, que também é consultora da Linhas Círculo. Saiba mais sobre os efeitos positivos do crochê ao corpo e à mente.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista lojas perto', link: 'https://www.google.com.br/maps/search/loja+de+material+para+artesanato' },
        { icon: 'fab fa-youtube', text: 'Tutorial da iniciantes', link: 'https://www.youtube.com/watch?v=ZQM1GS3uDz8' },
      ]
    },
    {
      name: 'Dançar',
      image: 'danca',
      describle: 'Além de ser uma atividade divertida, dançar também queima calorias, combate o estresse e ainda aumenta a sensação de bem-estar. Dependendo do ritmo, a dança pode também fazer bem para o coração e para o condicionamento muscular, além de melhorar alongamento, flexibilidade, concentração, equilíbrio e coordenação motora.',
      links: [
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=9c-dSk9UIHU' },
        { icon: 'fab fa-youtube', text: 'Coreografia Remix Beyonce', link: 'https://www.youtube.com/watch?v=HvZgBCr5npY' },
      ]
    },
    {
      name: 'Yoga',
      image: 'yoga',
      describle: 'O yoga trata-se de uma prática completa de desenvolvimento integral do ser humano: corpo, mente e emoções. O yoga proporciona benefícios físicos que se refletem na qualidade de vida, ou seja, relaxa , corrige a postura, dá mais vigor e tonifica os músculos. De acordo com a filosofia, os exercícios posturais são procedimentos que abarcam a alma, o mundo exterior e o Universo.',
      links: [
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=OuCvUDVoX3M' },
        { icon: 'fab fa-youtube', text: 'Yoga para Concentração', link: 'https://www.youtube.com/watch?v=DrSA9x6uLIs' },
      ]
    },
    {
      name: 'Horta em vasos',
      image: 'horta',
      describle: 'Para termos uma vida saudável é necessário uma alimentação adequada, através do consumo de vegetais como legumes e verduras. Sabemos também que a escolha por alimentos orgânicos ajuda a nossa saúde e, muitas pessoas estão cultivando seus próprios alimentos sem o uso de agrotóxicos. Para ter uma horta em casa, nem sempre precisamos de um quintal amplo ou um espaço com terra. Temos a possibilidade de cultivar hortas em vasos',
      links: [
        { icon: 'far fa-file-alt', text: 'Artigo para iniciantes', link: 'https://ciclovivo.com.br/mao-na-massa/horta/como-fazer-uma-horta-em-vasos/' },
        { icon: 'fab fa-youtube', text: 'Dicas para Hortas em Vaso', link: 'https://www.youtube.com/watch?v=LAJFyDi2ODU' },
      ]
    },
    {
      name: 'Cozinhar',
      image: 'cozinhar',
      describle: 'Um lado positivo de fazer a própria comida em casa é saber de onde vêm os alimentos que você está comendo - ou seja, se foram comprados realmente frescos, se estão na validade, se foram preparados em uma cozinha limpinha e por aí vai. Em restaurantes, por mais famosos que sejam, é difícil ter essas certezas que só quem faz a própria refeição tem.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de mercados perto', link: 'https://www.google.com.br/maps/search/supermercado' },
        { icon: 'fab fa-youtube', text: 'Receitas para Quarentena', link: 'https://www.youtube.com/watch?v=DKLj1p7700Y&list=PLBffNdwe6kOj-MQmvVVRJLL90tCkN_mBZ' },
        { icon: 'fab fa-youtube', text: 'Pratos para Congelar', link: 'https://www.youtube.com/watch?v=HLVLQbzsH28&list=PLBffNdwe6kOj0ULTqqkF3U2Q1pzO_uG6W' },
        { icon: 'fab fa-youtube', text: 'Doces para toda hora', link: 'https://www.youtube.com/watch?v=Eg-nO8ba3-k&list=PLBffNdwe6kOj-DK0SNRoacqPNNhi0GgoI' },
      ]
    },
    {
      name: 'Pintar',
      image: 'pintar',
      describle: 'A arte nos ajuda a ver o que temos a frente mas que não é facilmente percebido. O artista destaca o que não pode ser visto ou sentido facilmente. O artista procura e tenta descobrir a cada pincelada uma nova forma de se expressar. É esta constante descoberta o mais interessante que tem a pintura.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de lojas perto', link: 'https://www.google.com.br/maps/search/material+pintura+oleo' },
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=gvEysBG5OzQ' },
        { icon: 'fab fa-youtube', text: 'Dicas de Pintura', link: 'https://www.youtube.com/watch?v=DpH-pOwjy88' },
        { icon: 'fab fa-pinterest', text: 'Referências de pintura', link: 'https://br.pinterest.com/search/pins/?rs=ac&len=2&q=oil%20canvas%20painting&eq=oil%20canvas&etslf=5163&term_meta[]=oil%7Cautocomplete%7C0&term_meta[]=canvas%7Cautocomplete%7C0&term_meta[]=painting%7Cautocomplete%7C0' },
      ]
    },
    {
      name: 'Skin care',
      image: 'skin',
      describle: 'O termo “skincare” nada mais é que a tradução literal do inglês de “cuidados com a pele”, que vem sendo usado no Brasil e outros países para denominar a rotina, os passos e os produtos usados no cuidado diário com a pele - de manhã e à noite. Para garantir a eficácia e segurança da sua rotina de skincare, é essencial investir em dermocosméticos,',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de farmácias perto', link: 'https://www.google.com.br/maps/search/farm%C3%A1cia' },
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=eecx2nq_eZI' },
      ]
    },
    {
      name: 'Escultura de biscuit',
      image: 'escultura',
      describle: 'O Biscuit, por alguns é também conhecido como porcelana fria, e que por sua vez não é comestível como sugere o significado e a aparência. Apesar de ser a matéria que dá forma a muitos artesanatos atualmente e movimenta um grande valor monetário dentro do setor de artesanato, muita coisa sobre essa massa ainda é novidade para os brasileiros. Inclusive para as artesãs que fazem uso dela diariamente como fonte de renda, mas que até então desconhecem sua origem.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de lojas perto', link: 'https://www.google.com.br/maps/search/massa+biscuit' },
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=f3-Q1BrX_yc' },
        { icon: 'fab fa-youtube', text: 'Fazendo Pokemon', link: 'https://www.youtube.com/watch?v=PRV_p8yzmCw' },
        { icon: 'fab fa-pinterest', text: 'Referências de esculturas', link: 'https://br.pinterest.com/search/pins/?q=biscuit%20pop%20art&rs=typed&term_meta[]=biscuit%7Ctyped&term_meta[]=pop%7Ctyped&term_meta[]=art%7Ctyped' },
      ]
    },
    {
      name: 'Bordado',
      image: 'bordado',
      describle: 'O bordado permite “um estar consigo”, e uma reaproximação com as emoções e sensibilidade. O trabalho com a autoria melhora a autoestima, propicia transformações importantes no pensar, compartilhar, agir, ser. Contribui para mudanças internas, equilíbrio emocional, confiança, promoção da saúde e qualidade de vida. Participantes revelam entusiasmo, constatam melhoria no humor, na compreensão da realidade e no desejo de imprimir novos movimentos em direção às mudanças de vida.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de lojas perto', link: 'https://www.google.com.br/maps/search/aviamentos' },
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=ObQJQTnS8hQ' },
        { icon: 'fab fa-youtube', text: 'Lista de bordados', link: 'https://www.youtube.com/watch?v=ynDv4V9OtWY&list=RDCMUCj2plQ2PW2qYevRaVnbgzUQ&start_radio=1&t=0' },
        { icon: 'fab fa-pinterest', text: 'Referências de bordados', link: 'https://br.pinterest.com/search/pins/?q=bordados&rs=typed&term_meta[]=bordados%7Ctyped' },
      ]
    },
    {
      name: 'Ver uma Comédia',
      image: 'comedia',
      describle: 'Os estudos de Wolz mostram que o riso melhora a sensação de bem-estar. A comédia é uma temática ideal para quem está preocupado e com um certo nível de ansiedade, pois ao rir com algo engraçado, esse sentimento é diluído. Clinicamente, um estudo da Universidade de Maryland, aponta que "o riso, junto com um senso de humor ativo, poder proteger contra um ataque cardíaco"',
      links: [
        { icon: 'far fa-tv-retro', text: 'Seriado de Comédia', link: 'https://www.netflix.com/browse/genre/10375?bc=83' },
        { icon: 'far fa-tv-retro', text: 'Comédia teen', link: 'https://www.netflix.com/search?q=comedia&suggestionId=3519_genre' },
        { icon: 'far fa-tv-retro', text: 'Comédia para toda Familia', link: 'https://www.netflix.com/search?q=comedia&suggestionId=52847_genre' },
        { icon: 'far fa-tv-retro', text: 'Comédia Brasileira', link: 'https://www.netflix.com/search?q=comedia&suggestionId=17648_genre' },
      ]
    },
    {
      name: 'Seriados antigos',
      image: 'classicos',
      describle: 'Um seriado que já terminou é uma boa pedida para passa um tempo e ter uma história fechada que irá te destrair por horas e horas! E quando o seriado é antigo você saberá exatamente qual fez sucesso e qual fracassou e o porquê',
      links: [
        { icon: 'far fa-tv-retro', text: 'Breaking Bad', link: 'https://www.netflix.com/br/title/70143836' },
        { icon: 'far fa-tv-retro', text: 'Supernatural', link: 'https://www.amazon.com/Supernatural-Season-15/dp/B07XGPJP7C' },
        { icon: 'far fa-tv-retro', text: 'Friends', link: 'https://www.netflix.com/br/title/70153404' },
        { icon: 'far fa-tv-retro', text: 'Mad Men', link: 'https://www.amazon.com/Mad-Men-Season-1/dp/B001A5HBAG' },
      ]
    },
    {
      name: 'Meditar',
      image: 'meditar',
      describle: 'Meditar é uma prática cada vez mais comum nos dias de hoje. Apesar do propósito da Meditação ser esvaziar a mente, é muito melhor pensar em algo que nos faz sentir bem do que não pensar em nada. Não viemos ao Mundo para meditar, mas para nos expandirmos, para nos melhorarmos.',
      links: [
        { icon: 'fab fa-youtube', text: 'Aula de meditação', link: 'https://www.youtube.com/watch?v=tGMQWqMqXh0' },
        { icon: 'fab fa-youtube', text: 'Mantras para ouvir', link: 'https://www.youtube.com/watch?v=aiIysXNFpTM' },
      ]
    },
    {
      name: 'Tocar violão',
      image: 'violao',
      describle: 'Hoje em dia as pessoas se interessam cada vez mais pelo ramo da música, seja por hobby, trabalho ou ate mesmo diversão, fazendo com que o violão se torne um dos seus instrumentos preferidos. O mesmo vem sendo o mais optado por jovens, adultos e ate mesmo por pessoas mais velhas pelo fato de ser extremamente eficaz, se enquadrando em diversos estilos de músicas diferentes.',
      links: [
        { icon: 'fab fa-youtube', text: 'Aula para iniciantes', link: 'https://www.youtube.com/watch?v=Ynl9WEGdnfg' },
        { icon: 'fab fa-youtube', text: 'Aprender a musica Exagerado', link: 'https://www.youtube.com/watch?v=xc27x8ijdLQ' },
        { icon: 'fab fa-youtube', text: 'Aprender a musica Anjos', link: 'https://www.youtube.com/watch?v=WF9_7biyV08' },
        { icon: 'fab fa-youtube', text: 'Aprender a musica Malandragem', link: 'https://www.youtube.com/watch?v=2iJ9lLrKVo0' },
      ]
    },
    {
      name: 'Descobrir novas músicas',
      image: 'musica',
      describle: 'Ouvir música é uma das principais fontes de prazer para o ser humano. Esta forma de arte é capaz de nos proporcionar conforto e segurança nos momentos mais difíceis de nossas vidas. E ao descobrirmos novas canções, somos apresentados a um novo mundo de possibilidades.',
      links: [
        { icon: 'far fa-file-alt', text: '100 mais da Billboard', link: 'https://www.billboard.com/charts/hot-100' },
        { icon: 'fab fa-spotify', text: 'Lançamentos populares', link: 'https://open.spotify.com/genre/NMF-PopularNewReleases' },
      ]
    },
    {
      name: 'Teatro Online',
      image: 'teatro',
      describle: 'Assistir a peças de teatro online pode ser uma forma de diminuir a saudade dos espetáculos enquanto as casas permanecem fechadas por conta da pandemia. Nesse período, alguns teatros e artistas estão se apresentando na Internet em peças gravadas ou ao vivo de forma gratuita.',
      links: [
        { icon: 'far fa-file-alt', text: 'Os melhores do mundo', link: 'https://www.youtube.com/watch?v=CMR-2F8htmY' },
        { icon: 'fab fa-spotify', text: 'Hermanoteu na Terra de Godah', link: 'https://www.youtube.com/watch?v=g4Nb7IvJG5I' },
      ]
    },
    {
      name: 'Jogar Online',
      image: 'jogar',
      describle: 'A tecnologia está presente em todos os lugares, por isso, é difícil imaginar o mundo sem ela. Nessa área os jogos eletrônicos são grandes atrativos e é possível observar benefícios do videogame relacionados ao desenvolvimento dos jovens. Benefícios como melhorar a coordenação motora, auxiliar o raciocínio lógico e outros',
      links: [
        { icon: 'fab fa-android', text: 'Jogos mais baixados no android', link: 'https://play.google.com/store/apps/collection/cluster?clp=0g4cChoKFHRvcHNlbGxpbmdfZnJlZV9HQU1FEAcYAw%3D%3D:S:ANO1ljJ_Y5U&gsr=Ch_SDhwKGgoUdG9wc2VsbGluZ19mcmVlX0dBTUUQBxgD:S:ANO1ljL4b8c' },
        { icon: 'fab fa-steam', text: 'Jogos gratis na Steam', link: 'https://store.steampowered.com/genre/Free%20to%20Play/' },
        { icon: 'fab fa-playstation', text: 'Jogos com descontos no PS', link: 'https://store.playstation.com/pt-br/category/35027334-375e-423b-b500-0d4d85eff784/1' },
        { icon: 'fab fa-xbox', text: 'Jogos para Xbox', link: 'https://www.xbox.com/pt-BR/games/all-games' },
      ]
    },
    {
      name: 'Desenhar',
      image: 'desenhar',
      describle: 'Aprender a desenhar implica em muito mais do que simplesmente pegar o lápis e papel e sair rabiscando a folha. Desenhar proporciona diversos benefícios, que ajudam no dia a dia, além de ser uma atividade prazerosa, relaxante, terapêutica e que traz grande possibilidade de carreira artística e independência financeira.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de Papelaria perto', link: 'https://www.google.com.br/maps/search/papelaria/' },
        { icon: 'fab fa-youtube', text: 'Desenhando cartton', link: 'https://www.youtube.com/watch?v=jzTBq-NGUqM' },
        { icon: 'fab fa-youtube', text: 'Desenhando rosto realista', link: 'https://www.youtube.com/watch?v=IYHblq4yzXc' },
        { icon: 'fab fa-youtube', text: 'Desenhando Neo Traditional', link: 'https://www.youtube.com/watch?v=LzJj3NwOXd8&t=49s' },
      ]
    },
    {
      name: 'Jogar poker',
      image: 'poker',
      describle: 'Ao jogar poker você vai aprender (por bem ou por mal) o quanto é importante cuidar do seu dinheiro, isso vai te tornar uma pessoa mais disciplinada com relação a suas finanças e pode até mesmo acabar sendo uma porta de entrada para você aprender a investir melhor o seu dinheiro, pois o poker e o mundo dos investimentos tem muito em comum.',
      links: [
        { icon: 'fab fa-youtube', text: 'Aula Regras do Poker', link: 'https://www.youtube.com/watch?v=DKrQCT1b310' },
        { icon: 'fas fa-spade', text: 'Jogar no Pokerstars', link: 'https://www.pokerstars.com/br/' },
      ]
    },
    {
      name: 'Jardinagem',
      image: 'jardinagem',
      describle: 'A jardinagem não é boa apenas para as plantas - mas beneficia também quem cuida delas. Colher ervas daninhas, adubar e podar melhora a saúde física e mental de quem faz isso. Tanto é que a prática é utilizada em terapias e tratamento de pacientes de câncer.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de Viveiro perto', link: 'https://www.google.com.br/maps/search/viveiro' },
        { icon: 'fab fa-youtube', text: 'Dicas de Jardinagem', link: 'https://www.youtube.com/watch?v=YnEdN61cJVQ' },
      ]
    },
    {
      name: 'Customizar roupas',
      image: 'roupas',
      describle: 'Se pensarmos que a customização reduz a necessidade da exploração de recursos naturais na produção de peças novas. Além disso, a customização renova peças que poderiam ser descartadas e estavam esquecidas no guarda-roupa.',
      links: [
        { icon: 'fas fa-map-marker-alt', text: 'Lista de Aviamento perto', link: 'https://www.google.com.br/maps/search/Aviamento' },
        { icon: 'fab fa-youtube', text: 'Dicas de customização', link: 'https://www.youtube.com/watch?v=5BO7TFYo9s0' },
      ]
    },
  ];

  selectActive() {
    return this.activeList[Math.floor(Math.random() * this.activeList.length)];
  }
}
