import React, { Component } from "react";
import PropTypes from "prop-types";

class Bookcard extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    let k = ["currentlyReading", "read", "wantToRead"];
    k.splice(
      k.indexOf(
        this.props.data.map(book => {
          return book.shelf;
        })[0]
      ),
      1
    );

    /*let k=this.props.data.map((book)=>{return book.shelf});
		document.getElementByclassName(k[0]).addClass("active");
		*/

    return (
      <div>
        <div className="container">
          <div className="row p-2">
            {this.props.data.map(book => (
              <div className="col-md-3 mt-5 ml-3 mx-auto" key={book.id}>
                <div className="card">
                  <img
                    className="card-img-top book-card"
                    src={book.imageLinks.thumbnail}
                    alt="Cardcap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Pages:{book.pageCount} </p>
                    <h6 className="card-title">{book.authors[0]}</h6>
                    <a
                      href={book.previewLink}
                      target="blank"
                      className="btn btn-primary text-white"
                    >
                      Preview
                    </a>
                    <div className="dropdown">
                      <a
                        className="btn btn-success drop-button dropdown-toggle  "
                        type="button"
                        data-toggle="dropdown"
                      >
                        <span className="caret" />
                      </a>
                      <ul className="dropdown-menu p-3">
                        <li>
                          <a className=" active ">{book.shelf}</a>
                        </li>
                        <li>
                          <a onClick={() => this.props.onUpdate(book, k[0])}>
                            {k[0]}
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.props.onUpdate(book, k[1])}>
                            {k[1]}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Bookcard;
