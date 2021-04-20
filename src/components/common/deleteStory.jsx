
const DeleteStory = ({story, onDelete}) => {
    return (
        <div>
            <button className="btn btn-danger" onClick={() => onDelete(story.id)}>Remove Story</button>
        </div>
    )
}

export default DeleteStory
