import AboutStyle from "../styles/About.module.css"

const Aboutdesc = () => {
  return (
    <div>
      <h1 className={AboutStyle.titleAbout}>Riguardo a questo progetto</h1>
      <p className={AboutStyle.aboutText}>Ho creato questo progetto sulla necessità di imparare <span className={AboutStyle.highlighted}>Next.js</span>. <br/> Sono partito da un video corso su <span className={AboutStyle.highlighted}>YouTube</span> del canale 
      <a
       href="https://www.youtube.com/@TraversyMedia"
       target="_blank"
       rel='noopener noreferrer'
       className={AboutStyle.links}
       > Traversy Media</a> per apprendere le basi di <span className={AboutStyle.highlighted}>Next</span>. <br/><br/> Tuttavia, il 
       <a
       href="https://www.youtube.com/watch?v=mTz0GXj8NN0&list=PL13anZ6DrjBbxITmgbE1MUCkQtasXvQRx&index=5"
       target="_blank"
       rel='noopener noreferrer'
       className={AboutStyle.links}
       > corso in questione</a> risulta essere ormai datato. Cosa che però mi ha permesso di apprendere le basi di questo <span className={AboutStyle.highlighted}>framework</span> e allo stesso tempo, di avere una panoramica generale, di come potesse essere strutturato un <span className={AboutStyle.highlighted}>progetto legacy</span> su Next.js. <br/> Quindi lo Scopo di questo mini progetto è stato quello di adattare le conoscenze legacy del corso, con quelle che sono le <span className={AboutStyle.highlighted}>features moderne</span> di Next 16, utilizzando come riferimento la
        <a
        href="https://nextjs.org/docs"
        target="_blank"
        rel='noopener noreferrer'
        className={AboutStyle.links}
        > documentazione ufficiale </a>
        e
        <a
        href="https://chatgpt.com/"
        target="_blank"
        rel='noopener noreferrer'
        className={AboutStyle.links}
        > ChatGPT 5.1</a> che mi hanno guidato in questo percorso di apprendimento. </p>
    </div>
  )
}

export default Aboutdesc
