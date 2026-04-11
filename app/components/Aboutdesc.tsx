import AboutStyle from "../styles/About.module.css"

const Aboutdesc = () => {
  return (
<div>
  <h1 className={AboutStyle.titleAbout}>Riguardo a questo progetto</h1>

  <p className={AboutStyle.aboutText}>
    Ho creato questo progetto per approfondire <span className={AboutStyle.highlighted}>Next.js</span>. <br/>

    Sono partito da un video corso su <span className={AboutStyle.highlighted}>YouTube</span> del canale 
    <a
      href="https://www.youtube.com/@TraversyMedia"
      target="_blank"
      rel='noopener noreferrer'
      className={AboutStyle.links}
    > Traversy Media</a> per acquisire le basi di <span className={AboutStyle.highlighted}>Next</span>. <br/><br/>

    Tuttavia, il 
    <a
      href="https://www.youtube.com/watch?v=mTz0GXj8NN0&list=PL13anZ6DrjBbxITmgbE1MUCkQtasXvQRx&index=5"
      target="_blank"
      rel='noopener noreferrer'
      className={AboutStyle.links}
    > corso in questione</a> risulta ormai datato. Questo mi ha permesso di comprendere non solo i concetti fondamentali del <span className={AboutStyle.highlighted}>framework</span>, ma anche la struttura di un <span className={AboutStyle.highlighted}>progetto legacy</span> in Next.js. <br/>

    L'obiettivo è stato quindi quello di adattare queste conoscenze alle <span className={AboutStyle.highlighted}>features moderne</span> di Next 16, facendo riferimento principalmente alla
    <a
      href="https://nextjs.org/docs"
      target="_blank"
      rel='noopener noreferrer'
      className={AboutStyle.links}
    > documentazione ufficiale</a> e a risorse di supporto durante lo sviluppo.
  </p>
</div>
  )
}

export default Aboutdesc
