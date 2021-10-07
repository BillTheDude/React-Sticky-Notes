import {MdDeleteForever} from 'react-icons/md';

const Note = () => {
    return(
        <div className="note">
            <span>Hello! this is our first note</span>
            <div className="note-footer">
                <p>10/07/21</p>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;