import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio.map((item) => {
                return (
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <img
                          src={`${item.imgurl}`}
                          className="item-img"
                          alt="imageofmyprojects"
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.technology}</p>
                            <p>{item.description}</p>
                          </div>
                        </div>
                    </div>
                    <div className="a-tag">
                      Deployed Site: <a href={item.url}>{item.url}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
