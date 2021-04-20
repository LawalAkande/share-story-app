import Story from "./story";

const Stories = ({ stories, onDelete }) => {
  return (
    <div>
      <div className="row my-4">
        {stories.map((story) => (
          <div className="col-lg-4 col-md-6" style={{ minHeight: "1000px" }} key={story.id}>
            <Story story={story} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
