import { useEffect, useRef } from "react";
import "./Container.css";

export default function Container() {
  const newLetterRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if(entries[0].isIntersecting) {
        newLetterRef.current.classList.add("active")
        observer.unobserve(newLetterRef.current)
      }
    })

    observer.observe(newLetterRef.current)

    return () => {
      observer.unobserve(newLetterRef.current)
    }
  }, [])
  return (
    <div className="container">
      <h1>Utiliser un observateur</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo
        accusantium autem eaque repudiandae inventore sint soluta animi magnam,
        culpa optio nulla cum tempore, deleniti maxime beatae? A qui rerum et
        quia ipsum sunt veniam, porro ullam delectus libero commodi reiciendis
        cum minima? Quaerat, reiciendis! Necessitatibus alias natus suscipit
        repellat velit molestiae rerum laborum quisquam facilis illo culpa
        doloribus est doloremque, ullam excepturi ratione deleniti consectetur
        labore odit architecto nam veritatis dolorem nesciunt. Voluptatibus
        dolorem labore neque amet architecto, perspiciatis, corrupti qui enim at
        deserunt asperiores eveniet officia debitis cupiditate quaerat ipsam
        excepturi quod, quo voluptas quos nemo. Impedit dolores aut laboriosam.
        Consectetur dolorem saepe quod fuga soluta aperiam sed, debitis repellat
        suscipit fugiat veritatis similique natus eum at incidunt facilis
        repellendus odit assumenda, modi cum asperiores. Ad quis corporis
        impedit magni repudiandae labore recusandae dolorem totam ab quibusdam
        qui commodi iusto vitae nisi error, consequatur porro, neque mollitia,
        veritatis est placeat explicabo eius. Dolorem autem sapiente quam
        necessitatibus, laudantium, at distinctio saepe, iure libero esse
        eligendi quaerat corporis ab blanditiis nulla illum. Tempore sed eaque
        ut distinctio, ipsa laboriosam fugit vero, maiores molestias excepturi
        et. Voluptatibus exercitationem ipsa consequuntur illum vel officia
        quasi nesciunt, cumque amet unde. Laborum, rerum officia iste temporibus
        veniam accusamus vitae consequuntur? Quo alias debitis deleniti tempore
        necessitatibus temporibus similique vitae consequatur, eum molestias
        quas! Tempore voluptatum in, eius officia similique cumque eum
        accusantium harum minus placeat. Aliquid illo sequi vel quis eius
        quibusdam, molestias veritatis accusamus, eum expedita temporibus
        dignissimos optio ad at libero labore eaque tenetur enim quae dolores
        culpa cum incidunt! Culpa ipsam officia, fuga ea voluptatum quam autem
        facere quidem veritatis magnam, dicta atque doloribus tenetur omnis
        pariatur voluptatem tempore velit quo at maiores sunt! Alias consectetur
        odit doloribus laboriosam reiciendis tempora voluptatem rem eaque
        tempore sint cumque odio, magnam rerum ea quas expedita ab error fuga
        nisi inventore aut totam dolore esse optio! Veritatis minima asperiores
        fugit quia, commodi corporis cumque fugiat! Voluptate quasi ad ratione
        animi? Magni fuga non eveniet, expedita illo itaque suscipit ipsam
        consequatur. Nostrum unde molestias maxime deleniti incidunt quas error
        odit, debitis quae minima inventore et voluptatibus! Praesentium harum
        dicta sed nam suscipit! Quasi veritatis magnam a voluptatem ad nisi
        laboriosam cupiditate. Animi cum est, ut vel magnam itaque quidem nam
        aliquam dolores molestiae consectetur distinctio error tenetur quis
        nihil? Iure eaque quia commodi, ipsam ut aut eius totam aperiam.
        Praesentium debitis qui quasi earum distinctio a possimus sequi mollitia
        in delectus consequatur minus rerum est cumque maxime repudiandae,
        ratione id consequuntur veritatis, illo libero necessitatibus doloremque
        obcaecati. Quam nihil qui adipisci labore quas asperiores sed beatae
        debitis soluta exercitationem dolore aut delectus illo quibusdam,
        similique rerum cupiditate aliquam ipsum repudiandae est numquam
        praesentium. Ducimus voluptatibus maiores aliquid officia eaque
        inventore impedit, voluptate, quibusdam ut illum, possimus molestiae.
        Necessitatibus est amet doloremque ducimus alias veniam architecto
        perferendis! Eaque cum est doloribus totam fugiat? Veritatis dolorum hic
        vel neque! Obcaecati, repellat nostrum esse officiis nihil perspiciatis
        eveniet ea expedita ab, officia, non modi illo sapiente et!
      </p>
      <div ref={newLetterRef} className="newLetter">
        <h2>Observed Element</h2>
      </div>
      <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          obcaecati perferendis itaque, earum quae accusantium accusamus rem
          incidunt velit deserunt perspiciatis ea illum quia nihil quam
          blanditiis corporis eius voluptates. In est harum natus dolorem
          dolorum, sint nostrum quae consectetur quisquam, eos architecto id
          praesentium quod aspernatur velit mollitia aperiam molestias ad! Rem
          mollitia earum alias beatae inventore facilis. Facilis eveniet
          molestiae nostrum eius saepe autem ipsa, rem maiores quia tenetur
          corrupti quo aspernatur numquam quae beatae odit incidunt voluptatum
          temporibus eos debitis nulla officiis rerum perferendis. Dignissimos
          quas sequi placeat quod amet voluptatem quasi tempora repellat ad
          commodi, debitis vel ex. Fugiat sint minima dolorum nobis totam dolor
          mollitia delectus eum, vitae placeat illo molestiae commodi harum ab
          nam. Sapiente dolore, doloremque ipsam autem nam corporis! Quasi,
          omnis tempore eaque libero quibusdam, voluptatibus nulla ea dolores
          sed voluptates nam asperiores inventore beatae illo eos officiis
          labore doloremque ab? Autem natus laborum, deleniti aspernatur
          explicabo, eveniet eaque doloribus libero consequatur vel non, dolores
          perferendis perspiciatis quaerat magni voluptatibus ipsa corporis
          excepturi nisi. Eligendi voluptate dolore, doloremque libero at quas
          nemo dolor pariatur nulla error quaerat delectus iure obcaecati est.
          Praesentium nihil voluptas odit quae officia modi nisi, sit
          exercitationem aliquid ipsam, neque nam quibusdam incidunt totam eaque
          numquam, necessitatibus amet quia eum! Praesentium itaque ratione at
          assumenda ex quibusdam quos, ullam aliquid, reprehenderit
          exercitationem aperiam totam, vero adipisci molestias excepturi
          voluptates officia optio voluptatum odio cumque nisi. Quis cum maxime
          repellendus ratione laboriosam accusamus iure dolorum labore officiis
          culpa, praesentium officia, quidem modi sit quas dolor consequatur
          soluta voluptate? Maiores, sequi similique assumenda impedit
          architecto, tempore ipsa praesentium consequatur quis repellendus id
          ea perferendis delectus facere corporis. Consequatur nulla, totam
          officiis aut quae quo eveniet perspiciatis voluptatum? Earum
          doloremque vero ea illum, esse incidunt laboriosam, iste id dolore
          iure ipsum voluptatem ad. Eum repudiandae est, tempora perspiciatis
          sed atque necessitatibus. Eaque aliquid officia aperiam expedita
          dolores eligendi beatae amet tenetur atque eos sunt provident earum
          quisquam impedit officiis debitis iste, odit minus? Dolorum quasi
          dolor sapiente vitae rem voluptate, illo modi quam praesentium unde
          quod tempora deserunt aliquam veritatis, quisquam laboriosam natus
          totam nostrum exercitationem, fugit ipsam? Eligendi sed error tenetur
          veniam ullam velit maiores quo saepe architecto! Soluta eum maxime
          mollitia adipisci quia! Rerum accusamus consectetur, quas eveniet
          perspiciatis quia eaque adipisci, consequuntur, consequatur dolorem
          soluta fugit temporibus repudiandae sunt error explicabo cupiditate
          ipsum nostrum expedita recusandae. Id et commodi error qui sunt ea sed
          exercitationem quia magnam. Quo eos nobis quaerat incidunt deserunt
          nostrum, aperiam illum, mollitia non, magnam dicta beatae autem ex?
          Dicta itaque temporibus delectus nisi ipsam, laborum nam provident aut
          minima sit fuga? Ducimus illo animi temporibus quod eius, tempora
          consectetur voluptatum odit quam recusandae ipsum placeat pariatur
          quidem soluta expedita? Tempora dignissimos molestias explicabo
          labore! Nesciunt, aut cupiditate libero sapiente blanditiis deleniti
          molestias voluptates dolorem ad nemo consectetur similique recusandae
          illo eius? Reiciendis odit quisquam quaerat consequuntur veniam modi
          expedita iusto possimus eligendi quo excepturi animi eius blanditiis
          totam consectetur numquam recusandae, voluptatum vitae.
      </p>
    </div>
  );
}

