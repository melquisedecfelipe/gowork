import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";

import truncateString from "../../utils/truncateString";

import "./styles.scss";

function Card({ job }) {
  console.log(job);

  const [data] = useState(() => {
    const data = {
      title: job.title,
      description: job.description,
      applyUrl: job.applyUrl,
      tags: job.tags.map((tag) => tag.name),
      company: job.company,
      city: job.cities.map((city) => city.name).join(", "),
      commitment: job.commitment.title,
      remote: job.remotes.map((remote) => remote.name),
      createdAt: job.createdAt,
    };

    console.log(data.city);

    return data;
  });

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
          <p>{data.commitment}</p>
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
          <button>Ver vaga</button>
        </section>
      </main>
    )
  );
}

export default Card;
