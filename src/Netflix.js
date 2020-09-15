import React from "react";
import "./styles.css";
import Carousel from "react-bootstrap/Carousel";

export default function Netflix() {
  return (
    <div className="Net">
      <h1>Top 3 Netflix Series</h1>
      <div className="cardback">
        <Carousel>
          <Carousel.Item>
            <a href="https://www.netflix.com/in/title/80057281">
              {" "}
              <img
                className="d-block w-100"
                src="https://2.bp.blogspot.com/-NdExK8r-sdw/XREDdjb2YcI/AAAAAAAAAJs/OZkrMpku6eE27LMR8j47MLagnIWHmv3DgCKgBGAs/w0/stranger-things-season-3-characters-poster-uhdpaper.com-4K-1.jpg"
                height="490px"
                width="100%"
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Stranger Things</h3>
              <p>
                Stranger Things is an American science fiction horror web
                television series created by the Duffer Brothers and released on
                Netflix.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.netflix.com/in/title/80186863">
              <img
                className="d-block w-100"
                src="https://assets.cdn.moviepilot.de/files/6704981d4cbb0f5c64e064ce9397e56ee85daca09f0afd967abfc7e23e30/limit/1024/2000/AAAABbZLZ78LjiXQABVUUxGVEQTjC5Nx1_NLwDmEPZRUJNm2CLZpetWxJGZ5MeX51id7mwjQ_TS0vjfusVodFR5WVFXa2g9-.jpg"
                height="490px"
                alt="Third slide"
              />
            </a>

            <Carousel.Caption>
              <h3>The Umbrella Academy</h3>
              <p>
                The Umbrella Academy is an American comic book series created
                and written by Gerard Way and illustrated by Gabriel Bá.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.netflix.com/in/title/80100172">
              <img
                className="d-block w-100"
                src="https://i2.wp.com/culturised.co.uk/wp-content/uploads/2018/02/dark-1.jpg?fit=712%2C315&ssl=1"
                height="490px"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Dark</h3>
              <p>
                Dark is a German science fiction thriller web television series
                co-created by Baran bo Odar and Jantje Friese. It ran for three
                seasons from 2017 to 2020.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
