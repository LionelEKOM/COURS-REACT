export default function Container() {

  const data = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    },
    {
      id: 3,
      name: "De Paul"
    }
  ]
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {
          data.map((user, index) => (
            <li key={index}>
              {user.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}