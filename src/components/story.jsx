import Badge from "./common/badge";
// https://api.github.com/users/hacktivist123
// import DeleteStory from "./common/deleteStory";

const Story = ({ story, onDelete }) => {
  return (
    <div key={story.id}>
      <img
        src={story.imageUrl}
        width="200"
        height="200"
        className="image-fluid rounded-circle"
        alt=""
      />
      <h2>{story.name}</h2>
      <span>
        <Badge text={story.title} />
        from<strong>{story.city}</strong>
      </span>
      <p>{story.story}</p>
      <button
        className="btn btn-danger"
        onClick={() => onDelete(story.id)}
        style={{ color: "#fff", fontSize: "12px", borderRadius: "15px" }}
      >
        Remove Story
      </button>
    </div>
  );
};

export default Story;
