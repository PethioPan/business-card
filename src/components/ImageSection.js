import '../styles/ImageSection.css'
import me from '../images/casual_pro_me.jpg'

const ImageSection = () => {
  return (
    <div className='image-section'>
      <img src={me} />
    </div>
  )
}

export default ImageSection