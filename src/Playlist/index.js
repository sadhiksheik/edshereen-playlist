import {AiFillDelete} from 'react-icons/ai'
import './index.css'

const Playlist = props => {
  const {details, onDeleteClicked} = props
  const {imageUrl, id, name, genre, duration} = details

  const onDeleteButton = () => {
    onDeleteClicked(id)
  }

  return (
    <li className="li-el">
      <div className="img-content-con">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="name-genre-cont">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="dur-del-cont">
        <p className="duration">{duration}</p>
        <button
          className="del-btn"
          type="button"
          data-testid="delete"
          onClick={onDeleteButton}
        >
          <AiFillDelete className="del-icon" />
        </button>
      </div>
    </li>
  )
}
export default Playlist
