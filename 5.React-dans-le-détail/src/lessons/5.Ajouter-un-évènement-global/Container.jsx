import HugeContent from "./HugeContent"
import { useState } from "react"

export default function Container() {
  const [showContent, setShowContent] = useState(false)

  return (
    <div>
      <h1>Ajouter un évènement global</h1>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Cacher" : "Afficher"}
        Contenu
      </button>
      {showContent && <HugeContent />}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim autem
        blanditiis tempore repellat minus nostrum quam magnam, quae culpa sunt
        iure. Blanditiis beatae aperiam officia, quibusdam id ab veniam sed
        dolor quis. Nesciunt, sunt sed. Praesentium amet sapiente iure ducimus
        quo ab, nesciunt facere animi perspiciatis eveniet culpa dolor,
        consectetur repellendus nam laudantium esse rem temporibus officia sint
        fugiat? Eius temporibus debitis libero nulla! Ipsa amet rem voluptate
        aut architecto deserunt. Doloribus, tenetur iure aut molestiae,
        consectetur quibusdam quasi asperiores quo ipsa aliquam ducimus
        exercitationem? Commodi quos molestiae, maxime beatae exercitationem
        aliquam error, quae, corrupti necessitatibus reiciendis delectus quas?
        Consequuntur dolores, nobis voluptate ex aut et deleniti iure esse
        asperiores magnam porro ullam, perferendis numquam quaerat, cupiditate
        veniam expedita quidem aliquam. Debitis autem eius provident, dolore
        unde molestiae reiciendis nemo quae similique iusto dolorum ut dolores
        et quidem quos ipsum sed, culpa delectus alias natus! Est commodi
        accusantium, eius hic nam ad, quisquam rem explicabo sint esse, porro
        dignissimos optio velit recusandae neque cum quod nobis laudantium
        voluptatum dolore corrupti repellat voluptatem sit temporibus! Esse,
        voluptate iusto at perspiciatis, libero accusantium explicabo tempora
        molestiae beatae, asperiores ipsa! Dolorum, molestias eum? Quae
        perferendis beatae, facilis corrupti odit quasi cumque molestiae dolor
        doloribus cupiditate aspernatur? Sint, officiis reprehenderit? Molestiae
        fugiat voluptatibus accusamus sit ut sapiente similique eaque fugit!
        Nulla recusandae voluptatum quidem repellendus est doloribus neque
        blanditiis numquam repellat possimus consequatur, a facilis deleniti
        ipsa fuga incidunt illo. Architecto veniam voluptates porro, eum a non,
        rerum consectetur, quia excepturi quae labore nemo accusamus rem
        officiis cumque. Vel voluptatum minima tempore, deserunt velit illum
        ratione quas corrupti explicabo, eveniet dignissimos dolorum ducimus
        adipisci. Nisi iusto similique est et cum. Illum quia dolor beatae
        dolorum modi aperiam laboriosam earum, facilis tempore obcaecati
        possimus ipsa quaerat optio a recusandae, nostrum, ipsam velit
        aspernatur doloremque. Vel placeat dolorem veniam quibusdam quod ea non
        iure assumenda! Vel, voluptates? Neque quae, ipsum atque quis ea
        possimus deleniti nesciunt quisquam repudiandae cumque id libero modi
        sed aspernatur blanditiis, pariatur facere fuga impedit animi, ab
        aperiam nemo ipsam? Eum voluptates soluta asperiores labore explicabo et
        debitis dolor ex dolorum repellat maxime nisi, temporibus suscipit esse
        facere nemo doloremque veritatis iure non exercitationem optio
        laboriosam libero modi? Commodi accusamus ab iure sit, architecto dolor
        quam delectus dolore voluptates necessitatibus minus itaque molestias
        fugiat consectetur minima quis quasi quod iste ea quia at quae. Enim
        itaque ab qui animi consectetur cum illo excepturi! Nam dolore eveniet
        ad iusto minus ipsa voluptatum asperiores alias quo rerum. Rem ad
        voluptate totam reprehenderit provident. Nesciunt possimus deleniti quo
        eum quae dolores consectetur placeat animi, odit numquam laborum
        officiis voluptatibus dolorum, explicabo maiores? Qui asperiores aperiam
        architecto tempore perspiciatis perferendis hic, atque ipsam quaerat
        illo doloribus nostrum blanditiis? Ut totam est fuga perferendis magni,
        perspiciatis quisquam, magnam laudantium rem delectus provident sit
        beatae soluta assumenda accusantium placeat vel aliquid deserunt eius
        adipisci et vitae numquam nisi! Blanditiis veritatis, maxime molestias
        quo alias possimus ea? Illum fuga unde adipisci veniam laborum neque
        aliquid quos suscipit aspernatur nihil.
      </p>
    </div>
  );
}
