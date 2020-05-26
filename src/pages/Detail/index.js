import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

import Template from "../../components/Template";

import "./styles.scss";

// Recebo o location como props.
function Detail({ location }) {
  // Pego o valor do detalhe da vaga.
  const jobDetail = location.state.jobDetail;

  // Declaração do hook useHistory do react router dom, para realizar redirecionamentos.
  const history = useHistory();

  return (
    <Template>
      <main className="detail">
        <header>
          <div>
            {/* Utilizo o goBack para voltar para página anterior. */}
            <span onClick={() => history.goBack()}>
              <FiArrowLeft color="#242423" size={20} />
              <p>Voltar para as vagas</p>
            </span>
            <p>{jobDetail.title}</p>
          </div>
        </header>
        <section className="tags">
          <div>
            {/* Realizo o map nas tags para rederinzar uma por uma. */}
            {jobDetail.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>
        <section className="info">
          <aside>
            <ReactMarkdown source={jobDetail.description} />
          </aside>
          <div>
            <span>
              <small>Empresa</small>
              <a
                href={jobDetail.company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {jobDetail.company.name}
              </a>
            </span>
            <span>
              <small>Local</small>
              {/* Verifico se a vaga é remota ou não. */}
              {jobDetail.remote.length !== 0 ? (
                <strong>{jobDetail.remote}</strong>
              ) : (
                // Se não for remota, realizo um truncate no valor se for maior que o size passado.
                <strong>{jobDetail.city}</strong>
              )}
            </span>
            <span>
              <small>Formato</small>
              <strong>{jobDetail.commitment}</strong>
            </span>
            <a
              href={jobDetail.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Aplicar
            </a>
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Detail;
