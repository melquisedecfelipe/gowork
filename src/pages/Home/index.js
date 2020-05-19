import React from "react";
import { FiGift, FiBriefcase } from "react-icons/fi";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from "../../components/Card";
import Load from "../../components/Load";

import "./styles.scss";

import logo from "../../assets/logo.svg";
import people from "../../assets/people.png";

const GET_USERS = gql`
  {
    jobs {
      id
      title
      description
      applyUrl
      tags {
        name
      }
      company {
        name
        websiteUrl
      }
      cities {
        name
      }
      commitment {
        title
      }
      remotes {
        name
      }
      createdAt
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) return <Load />;

  return (
    <main className="home">
      <header>
        <p>
          Mais importante do que as nossas tecnologias, são as{" "}
          <strong>nossas pessoas</strong>
        </p>
        <img src={people} alt="Pessoas" />
      </header>
      <section>
        <aside className="soft">
          <span>
            <FiGift color="#242423" size={50} />
            <p>
              Soft <strong>Skills</strong>
            </p>
          </span>
          <div>
            <div>
              <strong>Trabalho em equipe</strong>
              <small>
                Para que as atividades sejam realizadas de forma correta, o
                trabalho em equipe é fundamental.
              </small>
            </div>
            <div>
              <strong>Criatividade e inovação</strong>
              <small>
                Capacidade de gerar ideias inovadoras sobre um determinado
                assunto ou situação, ou desenvolver formas criativas para
                resolver um problema.
              </small>
            </div>
            <div>
              <strong>Comunicação eficaz</strong>
              <small>
                Comunicar-se com outras pessoas para transmitir e receber
                informações de forma eficaz tem ligação com a forma de se
                expressar.
              </small>
            </div>
            <div>
              <strong>Raciocínio matemático</strong>
              <small>
                É a capacidade de escolher entre certos métodos ou fórmulas
                matemáticas para resolver problemas.
              </small>
            </div>
          </div>
        </aside>
        <aside className="jobs">
          <span>
            <FiBriefcase color="#242423" size={50} />
            <p>
              Vagas <strong>Cadastradas</strong>
            </p>
          </span>
          <div>
            {data.jobs.map((job) => (
              <Card job={job} />
            ))}
          </div>
        </aside>
      </section>
      <footer>
        <img src={logo} alt="GoWork Logo" />
      </footer>
    </main>
  );
}

export default Home;
