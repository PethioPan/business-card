import '../styles/Socials.css'
import TwitterIcon from '../assets/Twitter Icon.svg'
import InstagramIcon from '../assets/Instagram Icon.svg'
import GithubIcon from '../assets/GitHub Icon.svg'

const Socials = () => {
  return (
    <div className='socials'>
      <a href='https://twitter.com/asratnahom' target='_blank'>
        <img src={TwitterIcon} />
      </a>
      <a href='https://instagram.com/pethiopan' target='_blank'>
        <img src={InstagramIcon} />
      </a>
      <a href='https://github.com/pethiopan' target='_blank'>
        <img src={GithubIcon} />
      </a>
    </div>
  )
}

export default Socials