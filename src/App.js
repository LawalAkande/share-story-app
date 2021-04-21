// Import Css
import "./App.css";
import swal from "sweetalert";

// import Components
import Navbar from "./components/navbar";
import Body from "./components/body";
import Stories from "./components/stories";
import { useState } from "react";
import Body2 from "./components/body2";
import Body3 from "./components/body3";
import Footer from "./components/footer";

import joseph from './images/joseph.svg';
import lawal from './images/lawal.jpg';
import mouth from './images/mouth.jpeg';
import emmanuel from './images/emmanuel.svg';
import chisom from './images/chisom.svg';
import adunoluwa from './images/adunoluwa.svg';
import chidi from './images/chidi.svg';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [stories, setStories] = useState([
    {
      id: "1",
      name: "Joseph Ike",
      city: "Ikeja",
      title: "Friend",
      // imageUrl: "/imagess/joseph.svg",
      imageUrl: joseph,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      id: "2",
      name: "Lawal Akande",
      city: "Saki",
      title: "Myself",
      imageUrl: lawal,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: "3",
      name: "Adetola Fashina",
      city: "Ibadan",
      title: "Friend",
      imageUrl: mouth,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "4",
      name: "Emmanuel Fayemi",
      city: "Lagos",
      title: "Brother",
      imageUrl: emmanuel,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: "5",
      name: "Chisom Obilor",
      city: "Ikeja",
      title: "Girl Friend",
      imageUrl: chisom,
      story:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      id: "6",
      name: "Adunoluwa Adeyemi",
      city: "Ikeja",
      title: "Partener",
      imageUrl: adunoluwa,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "7",
      name: "Chidi Okeke",
      city: "Abeokuta",
      title: "Old Friend",
      imageUrl: chidi,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ]);

  const handleDeleteStory = (id) => {
    // console.log(id)
    setStories(stories.filter((story) => story.id !== id));
  };

  const handleAddStory = (story) => {
    console.log(story);
    const id = Math.floor(Math.random() * 100) + 1;
    console.log(id);
    const newStory = { id, ...story };
    setStories([...stories, newStory]);
    console.log(newStory);
    swal({
      icon: "success",
      title: "Thank you for sharing your story",
      buttons: "Close",
      timer: 2000,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router>
          <Switch>
            <Route
              path="/"
              render={() => (
                <div>
                  <Body onAddStory={handleAddStory} />
                  <div className="container">
                    {stories.length > 0 ? (
                      <Stories stories={stories} onDelete={handleDeleteStory} />
                    ) : (
                      <h1 style={{ padding: "100px" }}>
                        No available story from friends, Kindly check back Thank
                        you😋
                      </h1>
                    )}
                  </div>
                  <Body2 />
                  <Body3 />
                  <Footer />
                </div>
              )}
            />
            <Route path="/stories" component={""} />
            <Route path="/contact" component={""} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
