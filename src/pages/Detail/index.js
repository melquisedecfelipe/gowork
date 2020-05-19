import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

import Template from "../../components/Template";

import "./styles.scss";

function Detail({ location }) {
  const data = location.state.data;

  const history = useHistory();

  return (
    <Template>
      <main className="detail">
        <header>
          <div>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft color="#242423" size={20} />
              <p>Voltar para as vagas</p>
            </span>
            <p>{data.title}</p>
          </div>
        </header>
        <section>
          <aside>
            <ReactMarkdown source={data.description} />
          </aside>
          <div>
            <span>
              <small>Local</small>
              {data.remote.length !== 0 ? (
                <strong>{data.remote}</strong>
              ) : (
                <strong>{data.city}</strong>
              )}
            </span>
            <span>
              <small>Formato</small>
              <strong>{data.commitment}</strong>
            </span>
            <a
              href={data.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              alt={data.title}
            >
              Aplicar
            </a>
            <div>
              {data.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Detail;
