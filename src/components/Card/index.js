import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

import truncateString from "../../utils/truncateString";

import "./styles.scss";

// Card é um componente que recebe apenas uma prop do pai, sendo: job (vaga).
function Card({ job }) {
  // Crio um state utilizando o hook useState, e a atribuo o valor que vou utilizar.
  const [jobDetail] = useState(() => ({
    title: job.title,
    slug: job.slug,
    description: job.description,
    applyUrl: job.applyUrl,
    tags: job.tags.map((tag) => tag.name),
    company: job.company,
    city: job.cities.map((city) => city.name).join(", "),
    commitment: job.commitment.title,
    remote: job.remotes.map((remote) => remote.name),
  }));

  // Declaração do hook useHistory do react router dom, para realizar redirecionamentos.
  const history = useHistory();

  // Crio uma função usando o hook useCallback para realizar o redirecionamento para o detalhe da vaga.
  // Enviando para rota detalhe/nome-da-vaga, e passo state pela rota.
  const handleDetail = useCallback(
    (jobDetail) => {
      history.push(`detalhe/${jobDetail.slug}`, { jobDetail });
    },
    [history]
  );

  return (
    // Verifico se a props job é diferente de undefined, se for eu renderizo o restante.
    job !== undefined && (
      <main className="card">
        <section className="card__header">
          <div>
            {/* Realizo o map nas tags para rederinzar uma por uma. */}
            {jobDetail.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h2>{jobDetail.title}</h2>
          <a
            href={jobDetail.company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {jobDetail.company.name}
          </a>
        </section>
        <section className="card__footer">
          <span>
            <FiMapPin color="#242423" size={20} />
            {/* Verifico se a vaga é remota ou não. */}
            {jobDetail.remote.length !== 0 ? (
              <p>{jobDetail.remote}</p>
            ) : (
              // Se não for remota, realizo um truncate no valor se for maior que o size passado.
              <p title={jobDetail.city}>{truncateString(jobDetail.city, 14)}</p>
            )}
          </span>
          <button onClick={() => handleDetail(jobDetail)}>Ver vaga</button>
        </section>
      </main>
    )
  );
}

export default Card;
