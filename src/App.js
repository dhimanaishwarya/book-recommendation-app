import "./styles.css";
import { useState } from "react";

const booksGenreDict = {
  //fiction lsit of object(fiction books)
  fiction: [
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
      cover: "mocking_bird.jpg",
      rating: "4.5"
    },
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. ",
      cover: "catcher_in_rye.jpg",
      rating: "4.2"
    },
    {
      name: "1984",
      author: "George Orwell",
      description:
        "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. ",
      cover: "1984.jpg",
      rating: "4.1"
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.",
      cover: "gatsby.jpg",
      rating: "3.9"
    }
  ],

  classics: [
    {
      name: "Little Women",
      author: "Louisa May Alcott",
      description:
        "Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women.",
      cover: "women.jpg",
      rating: "4.9"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.",
      cover: "pp.jpg",
      rating: "4"
    },
    {
      name: "Hamlet",
      author: "William Shakespeare",
      description:
        "mong Shakespeare's plays, 'Hamlet' is considered by many his masterpiece.",
      cover: "hamlet.jpg",
      rating: "4.4"
    },
    {
      name: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description:
        "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret.",
      cover: "cp.jpg",
      rating: "5"
    }
  ],

  thriller: [
    {
      name: "The Girl on the Train",
      author: "Paula Hawkins",
      description:
        "Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. 'Jess and Jason,' she calls them.",
      cover: "train.jpg",
      rating: "3.8"
    },
    {
      name: "The Girl Who Played with Fire",
      author: "Stieg Larsson",
      description:
        "Part blistering espionage thriller, part riveting police procedural, and part piercing exposé on social injustice, The Girl Who Played with Fire is a masterful, endlessly satisfying novel.",
      cover: "fire.jpg",
      rating: "4.1"
    },
    {
      name: "Inferno",
      author: "Dan Brown",
      description:
        "Dan Brown has raised the bar yet again, combining classical Italian art, history, and literature with cutting-edge science in this sumptuously entertaining thriller.",
      cover: "inferno.jpg",
      rating: "2.5"
    },
    {
      name: "Murder on the Orient Express",
      author: "Agatha Christie",
      description:
        "Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer—in case he or she decides to strike again.",
      cover: "orient.jpg",
      rating: "5"
    }
  ]
};

//list of bookgenre
const booksGenreList = Object.keys(booksGenreDict);
console.log(booksGenreList);

export default function App() {
  const [bookGenre, setBookGenre] = useState("fiction");

  function buttonClickHandler(genre) {
    setBookGenre(genre);
    console.log(genre);
  }

  return (
    <div className="App">
      <h1>Welcome to Bookmarked!</h1>
      <h3>Deciding what to read next?</h3>
      <h4>Select your favourite genre and find recommendations!</h4>
      <div>
        {booksGenreList.map((genre) => {
          return (
            <button
              style={{ textTransform: "capitalize" }}
              onClick={() => buttonClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <ul>
        {booksGenreDict[bookGenre].map((book) => {
          return (
            <div>
              <hr
                style={{
                  height: "2px",
                  borderWidth: "0",
                  color: "gray",
                  backgroundColor: "gray"
                }}
              />
              <li>
                <img src={`/images/${book.cover}`} alt="book-cover" />
              </li>
              <div id="book">
                <h2>{book.name}</h2>
                <h3>Author - {book.author}</h3>
                <h4>Rating - {book.rating}</h4>
                <span>{book.description}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
