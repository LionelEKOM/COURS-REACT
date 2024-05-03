import { useEffect, useState } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  const [APIstate, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setAPIState({ ...APIstate, loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Une erreur est survenue");
        }
      })
      .then((data) => {
        console.log(data);
        setAPIState({ loading: false, error: false, data: data });
      })
      .catch(() => {
        setAPIState({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;
  if (APIstate.loading)
    content = <img src={spinner} alt="icone de chargemenet" />;
  else if (APIstate.error) content = <p>Une erreur est survenue...</p>;
  else if (APIstate.data?.length > 0) {
    content = (
      <ul>
        {APIstate.data.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.email}</span>
              <span>{item.phone}</span>
            </li>
          );
        })}
      </ul>
    );
  } else if (APIstate.data?.length === 0) {
    content = <p>Votre requete ne comporte aucune donnee</p>;
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
