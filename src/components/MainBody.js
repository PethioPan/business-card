import '../styles/MainBody.css'
import Mail from '../assets/Mail.svg'
import LinkedIn from '../assets/LinkedIn.svg'

const MainBody = () => {
  return (
    <div className='main-body'>
      <div className='main-body__title-section'>
        <h1>Nahom Asrat</h1>
        <h4>Frontend Developer</h4>
        <a href='https://nahom.mbandevelopers.com'>nahom.mabndevelopers.com</a>
      </div>
      <div className='main-body__button-group'>
        <a href='#'><img src={Mail} />Email</a>
        <a href='https://www.linkedin.com/in/nahom-asrat-a17268173/' target='_blank' className='linkedin'><img src={LinkedIn} />LinkedIn</a>
      </div>
      <div className='main-body__description'>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
  )
}

export default MainBody