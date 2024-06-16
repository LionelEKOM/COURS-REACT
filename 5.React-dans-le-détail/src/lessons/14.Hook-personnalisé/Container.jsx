import useAPICall from "./hooks/useAPICall"
import spinner from "./spinner.svg"

export default function Container() {

  const {data, error, loading} = useAPICall()
  return (
    <div>
      { (loading && !error) && <img src={spinner} alt="Image de Chat." />}
      <h1>Photo de chats 🐾</h1>
      {error && <p>Une erreur est survenue !!</p>}
      { data && <img src={data[0].url} alt="Image de Chat." />}
    </div>
  )
}
