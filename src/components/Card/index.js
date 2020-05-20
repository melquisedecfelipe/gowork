import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

import truncateString from "../../utils/truncateString";

import "./styles.scss";

function Card({ job }) {
  const [data] = useState(() => {
    const data = {
      title: job.title,
      slug: job.slug,
      description: job.description,
      applyUrl: job.applyUrl,
      tags: job.tags.map((tag) => tag.name),
      company: job.company,
      city: job.cities.map((city) => city.name).join(", "),
      commitment: job.commitment.title,
      remote: job.remotes.map((remote) => remote.name),
    };

    return data;
  });

  const history = useHistory();

  const handleDetail = useCallback(
    (data) => {
      history.push(`detalhe/${data.slug}`, { data });
    },
    [history]
  );

  return (
    job !== undefined && (
      <main className="card">
        <section className="card__header">
          <div>
            {data.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h2>{data.title}</h2>
          <a
            href={data.company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.company.name}
          </a>
        </section>
        <section className="card__footer">
          <span>
            <FiMapPin color="#242423" size={20} />
            {data.remote.length !== 0 ? (
              <p>{data.remote}</p>
            ) : (
              <p title={data.city}>{truncateString(data.city)}</p>
            )}
          </span>
          <button onClick={() => handleDetail(data)}>Ver vaga</button>
        </section>
      </main>
    )
  );
}

export default Card;
