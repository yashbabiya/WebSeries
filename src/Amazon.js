import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

export default function Amazon() {
  return (
    <div className="Ama">
      <h1>Top 3 Amazon Series</h1>
      <br />
      <div className="cardback">
        <Carousel>
          <Carousel.Item>
            <a href="https://www.primevideo.com/detail/Bosch/0LLBLRTHYK7A0TL8BBIXSQFQ0N?ref_=dvm_pds_gen_in_as_s_gt_dsaallwebpages|m_static-c_c456873334750">
              <img
                className="d-block w-100"
                src="https://i.vimeocdn.com/video/580206273.jpg?mw=1920&mh=1080&q=70"
                height="470px"
                width="100%"
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Bosch</h3>
              <p>
                Bosch is an American police procedural web television series
                produced by Amazon Studios and Fabrik Entertainment starring
                Titus Welliver as Los Angeles Police detective Harry Bosch. ...
                The series was renewed for a seventh and final season on
                February 13, 2020.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.primevideo.com/detail/Patriot/0I1CWVRUIFHRR47BBZXEGCSZL5?ref_=dvm_pds_gen_in_as_s_gt_dsaallwebpages|m_static-c_c456873334750">
              <img
                className="d-block w-100"
                src="https://images-na.ssl-images-amazon.com/images/I/91oL9m48AUL._RI_.jpg"
                height="470px"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Patriot</h3>
              <p>
                Patriot is an American comedy-drama web television series
                created by Steven Conrad which premiered on November 5, 2015, on
                Prime Video
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/?ref_=dvm_pds_gen_in_as_s_gt_mirzapurlaunch|m_QuzO4xjuc_c440213468827&gclid=CjwKCAjwzIH7BRAbEiwAoDxxThbItbGGRVg8Ztv40_oOZpA4KuG3Xxl7tAcF8RMR2nqrs1zT7KrRZxoC0O8QAvD_BwE">
              <img
                className="d-block w-100"
                src="https://i.gadgets360cdn.com/large/mirzapur-title-card_1539155801386.jpg"
                height="470px"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Mirzapur</h3>
              <p>
                Mirzapur is a action crime thriller web television series on
                Amazon Prime Video produced by Excel Entertainment.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
