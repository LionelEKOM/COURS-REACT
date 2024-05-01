import fuji from "./assets/fuji.jpg"

export default function Container() {
  console.log(fuji);
  return (
    <div>
      <h1>Utiliser des images</h1>
      <p>Image png/jpeg/webp</p>
      <img src={fuji} alt="Le Mont Fuji" />
      <br />
      <p>Utiliser les image du dossier public</p>
      <img src="/assets/forest-1.jpg" alt="" />
    </div>
  )
}
