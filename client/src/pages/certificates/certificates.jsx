import './certificates.css'

const Certificates = () => {
  return (
    <section id="certificates">
      <div className='section-wrapper'>
        <h3 className='section-title'>
          Certificates
        </h3>
        <div className='certificate-container'>
          <img src="/bay-valley-tech-certificates/html.jpg" alt="html certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/css.jpg" alt="css certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/Content-Management-Systems.jpg" alt="Content Management System certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/JavaScript.jpg" alt="JavaScript certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/Asynchronous-JavaScript.jpg" alt="Asynchronous JavaScript certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/react.jpg" alt="react certificate" className='certificate'/>
          <img src="/bay-valley-tech-certificates/Front-End-Web-App-Development.jpg" alt="Front End Web App Development certificate" className='certificate'/>
        </div>
      </div>
    </section>
  )
}

export default Certificates