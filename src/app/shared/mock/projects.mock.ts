import { Project } from "../project.model";
import { TECHSCARV } from "./techs-carv.mock";
import { TECHSLEARNINGENGLISH } from "./techs-learningenglish.mock";
import { TECHSWEMOVIES } from "./techs-wemovies.mock";

export const PROJECTS: Project[] = [
    {
        desc: "Desenvolvi o site da Carv Auto Center, um centro automotivo localizado em Avaré, SP, focado em fornecer serviços de mecânica de alta qualidade. O objetivo principal do projeto foi criar uma plataforma online que refletisse a dedicação da empresa em oferecer um atendimento especializado e eficiente para seus clientes. O site da Carv Auto Center proporcionou uma presença online robusta para a empresa, melhorando a comunicação com os clientes e destacando os serviços especializados oferecidos. Com um design moderno e funcional, o site ajuda a transmitir a confiança e a qualidade que são marcas registradas da Carv Auto Center.",
        git: "https://github.com/Guilherme-M-Carvalho/carv",
        img: "/assets/projects/carvautocenter.png",
        name: "Carv Auto Center",
        tag: "carv-auto-center",
        techs: [...TECHSCARV, ...TECHSCARV, ...TECHSCARV, ...TECHSCARV],
        url: "https://carvautocenter.com.br/"
    },
    {
        desc: `
        Este projeto consiste na criação de um site de e-commerce simplificado, desenvolvido para demonstrar habilidades em front-end e consumo de API. O site é composto por três módulos principais: Home, Carrinho e Compra. Este projeto destaca minha capacidade de desenvolver uma aplicação web funcional, integrando-se com APIs e gerenciando estados de maneira eficaz.
        `,
        git: "https://github.com/Guilherme-M-Carvalho/teste-react",
        img: "/assets/projects/wemovies.png",
        name: "WeMovies",
        tag: "we-movies",
        techs: [...TECHSWEMOVIES, ...TECHSWEMOVIES, ...TECHSWEMOVIES, ...TECHSWEMOVIES],
        url: "https://teste-react-iota-five.vercel.app"
    },
    {
        desc: `
        Este projeto consiste na criação de um jogo educativo para aprender inglês, desenvolvido para demonstrar habilidades em design de interação e programação de jogos. Este projeto destaca minha capacidade de criar uma experiência interativa envolvente, onde os usuários podem praticar habilidades linguísticas de forma divertida, além de demonstrar minha competência em desenvolver jogos educativos funcionais que incentivam o aprendizado ativo da língua inglesa.
        `,
        git: "https://github.com/Guilherme-M-Carvalho/jogo-ingles",
        img: "/assets/projects/ingles.png",
        name: "Aprendendo Inlgês",
        tag: "learning-english",
        techs: [...TECHSLEARNINGENGLISH, ...TECHSLEARNINGENGLISH, ...TECHSLEARNINGENGLISH, ...TECHSLEARNINGENGLISH],
        url: "https://jogo-ingles.vercel.app/"
    }
]