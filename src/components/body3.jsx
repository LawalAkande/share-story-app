import storyImg from "../images/everyoneHasAStory.jpeg";

const Body3 = () => {
  return (
    <div>
      <div className="row2" style={{ backgroundColor: "#0e0e0e" }}>
        <div className="a">
          <img src={storyImg} width="100%" alt="toryAndSomethingTOSay" />
        </div>
        <div className="b text-white">
          <h4 className="body3__header">
            Be a member <br />
            of our community 🎉
          </h4>
          <br />
          <br />
          <p>
            We'd make sure you're always first <br />
            to know what's happening on ShareStory.
          </p>
          <form action="">
            <div className="input-group mb-3">
              <input
                type="text"
                required
                size="30"
                placeholder="Enter your email address"
              />
              <div className="input-group-append">
                <button
                  className="btn input__button"
                  style={{ color: "white", backgroundColor: "#FF5C00" }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body3;
