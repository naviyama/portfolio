import './about.css'

const about = () => {
  return (
    <section id='about'>
      <div className="section-wrapper">
        <h3 className='section-title'>About</h3>
        <div className='about-container'>

          <div className='about-coding'>
            <h3 className='about-coding-title'>coding</h3>
            <p className='about-coding-text'>
            I was fascinated by the power of code, which led me to pursue a career as a programmer. After graduating from a web developer boot camp, I am now working on projects to further hone my skills as a full-stack developer. My motto in web development is to create things that are simple and user-friendly.

            </p>
          </div>
          <div className='about-personal'>
            <h3 className='about-coding-title'>personal</h3>
            <p className='about-personal-text'>
            Outside of coding, I enjoy going rock climbing and camping with my family, and at home, I love playing board games. During my personal time, I relax by watching anime or reading books.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default about