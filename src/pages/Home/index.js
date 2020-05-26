import React, { useState } from "react";
import { FiGift, FiBriefcase } from "react-icons/fi";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from "../../components/Card";
import Load from "../../components/Load";
import Template from "../../components/Template";

import "./styles.scss";

import people from "../../assets/people.png";

// Alguns principios do GraphQL.
// Toda request é POST.
// Toda request bate no MESMO endpoint.

// Query -> listas informações (GET).
// Mutation -> manipular dados (POST/PUT/PATCH/DELETE).
// Scalar types -> String, Int, Boolean, Float e ID.

// Criação da query de consulta do GraphQL.
const GET_USERS = gql`
  {
    jobs {
      id
      title
      slug
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
    }
  }
`;

function Home() {
  // Crio um state utilizando o hook useState, e a atribuo o valor que vou utilizar.
  const [showAll, setShowAll] = useState(false);

  // Utilizo o useQuery para realizar a requisição do GraphQL.
  // E realizo a desestruturação pegando loading e data.
  const { loading, data } = useQuery(GET_USERS);

  // Se loading for true renderizo o componete Load.
  if (loading) return <Load />;

  return (
    <Template>
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
            <div className="jobs__header">
              <span>
                <FiBriefcase color="#242423" size={50} />
                <p>
                  Vagas <strong>Cadastradas</strong>
                </p>
              </span>
              {/* Por padrão exibido apenas algumas vagas, caso ele clique no botão, passo o valor como contrário. */}
              <button onClick={() => setShowAll(!showAll)}>
                Mostrar todas as vagas
              </button>
            </div>
            <div className={showAll ? "--all" : null}>
              {/* Realizo o map nas vagas, passando a vaga como props para o filho. */}
              {data.jobs.map((job) => (
                <Card key={job.id} job={job} />
              ))}
            </div>
          </aside>
        </section>
      </main>
    </Template>
  );
}

export default Home;
