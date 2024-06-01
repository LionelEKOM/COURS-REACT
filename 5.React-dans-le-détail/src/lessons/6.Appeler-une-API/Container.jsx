import { useEffect, useState } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  // Initialize state for API data, loading state, and error state
  const [APIstate, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  // Use the useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Set the loading state to true
    setAPIState({...APIstate, loading: true });

    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => {
        // Check if the response was successful
        if (response.ok) {
          // If the response was successful, return the JSON data
          return response.json();
        } else {
          // If the response was not successful, throw an error
          throw new Error("Une erreur est survenue");
        }
      })
      // Process the data and update the state
     .then((data) => {
        console.log(data);
        setAPIState({ loading: false, error: false, data: data });
      })
      // Handle any errors that occur during the fetch request
     .catch(() => {
        setAPIState({ loading: false, error: true, data: undefined });
      });
  }, []);

  // Initialize the content variable, which will be used to render the appropriate UI based on the API state
  let content;

  // Check if the API is currently loading
  if (APIstate.loading) {
    // If the API is loading, render a loading spinner
    content = <img src={spinner} alt="icone de chargemenet" />;
  } else if (APIstate.error) {
    // If there was an error fetching data from the API, render an error message
    content = <p>Une erreur est survenue...</p>;
  } else if (APIstate.data?.length > 0) {
    // If there is data available from the API, render a list of users
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
    // If there is no data available from the API, render a message indicating that there are no results
    content = <p>Votre requete ne comporte aucune donnee</p>;
  }

  // Render the UI based on the content variable
  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
