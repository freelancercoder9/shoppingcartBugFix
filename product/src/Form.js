import React, { Component } from "react";
import "./Form.css";
import DatePicker from "react-date-picker";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p_name: "",
      p_price: "",
      p_image: "",
      p_category: "",
      p_color: "",
      p_description: "",
      gender: "",
      p_brand: "",
      p_quantity: "",
      p_size: "",
      age: "",
      author: "",
      b_category: "",
      bookfor: "",
      startDate: null,
      endDate: null,

      formErrors: {},
      dataListContent: [],

      isClothing: false,
      isFood: false,
      isBooks: false,
      isToys: false,
    };

    this.initialState = this.state;
  }

  addDataList() {
    console.log("in function addDataList");

    console.log(this.state.p_name);

    var objectData = {
      p_name: this.state.p_name,
      p_price: this.state.p_price,
    };

    console.log("local object : ", objectData);

    this.setState({
      dataListContent: [...this.state.dataListContent, objectData],
    });
    console.log(" setting State 1 : ", this.state.dataListContent);
  }

  handleFormValidation() {
    const {
      p_name,
      p_price,
      p_image,
      p_category,
      p_color,
      p_description,
      gender,
      p_brand,
      p_quantity,
      p_size,
      age,
      author,
      b_category,
      bookfor,
      startDate,
      isClothing,
      isBooks,
      isFood,
      isToys,
    } = this.state;
    let formErrors = {};
    let formIsValid = true;

    if (!p_name) {
      formErrors["pnameErr"] = "p_name is required.";
      formIsValid = false;
    }

    if (!p_price) {
      formErrors["ppriceErr"] = "p_price is required.";
      formIsValid = false;
    }

    if (p_price) {
      if (!p_price.match(/^[0-9\b]*$/)) {
        formErrors["ppriceErr"] = "Only number";
        formIsValid = false;
      }
    }

    if (p_category === "") {
      formErrors["pcategoryErr"] = "Select category.";
      formIsValid = false;
    }
    if (p_color === "") {
      if (isClothing === true) {
        formErrors["pcolorErr"] = "Select To atleast one color.";
        formIsValid = false;
      }
    }
    if (p_color["pcolor"]) {
      if (isClothing === true) {
        if (!p_color["pcolor"] < 1) {
          formErrors["pcolorErr"] = "Only one checkbox";
          formIsValid = false;
        }
      }
    }

    if (!p_description) {
      formErrors["pdescriptionErr"] = "Description is required.";
      formIsValid = false;
    }
    if (gender === "") {
      if (isClothing === true) {
        formErrors["genderErr"] = "gender Must be select.";
        console.log("this.state--", this.state.gender);
      }
    }
    if (!p_brand) {
      formErrors["pbrandErr"] = "It should not be blank.";
      formIsValid = false;
    }
    if (p_quantity === "") {
      formErrors[" pquantityErr"] = "quantity is required.";
      formIsValid = false;
    }

    if (p_size === "") {
      if (isClothing === true) {
        formErrors["psizeErr"] = "At least select one ...";
        formIsValid = false;
      }
    }
    if (age === "") {
      if (isToys === true) {
        formErrors["ageErr"] = "Must need to select.";
        formIsValid = false;
      }
    }
    if (!author) {
      if (isBooks === true) {
        formErrors["authorErr"] = "Authorname is required.";
        formIsValid = false;
      }
    }

    if (b_category === "") {
      if (isBooks === true) {
        formErrors["bcategoryErr"] = "Select category .";
        formIsValid = false;
      }
    }
    if (bookfor === "") {
      if (isBooks === true) {
        formErrors["bookErr"] = "It's required.";
        formIsValid = false;
      }
    }

    this.setState({ formErrors, formIsValid });
    console.log("formIsValild---", formIsValid);
    console.log("formErrors---", formErrors);
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "p_category") {
      if (value === "CLOTHINGS") {
        this.setState({ isClothing: true });
      } else {
        this.setState({ isClothing: false });
      }
      if (value === "BOOK") {
        this.setState({ isBooks: true });
      } else {
        this.setState({ isBooks: false });
      }
      if (value === "FOOD") {
        this.setState({ isFood: true });
      } else {
        this.setState({ isFood: false });
      }
      if (value === "TOYS_GAME") {
        this.setState({ isToys: true });
      } else {
        this.setState({ isToys: false });
      }
    }
  };

  handleSubmit = (e) => {
    console.log("Inside");
    e.preventDefault();

    if (this.handleFormValidation()) {
      //this.addDataList();
      var localData = [...this.state.dataListContent];
      var objectData = {
        p_name: this.state.p_name,
        p_price: this.state.p_price,
        p_category: this.state.p_category,
        p_color: this.state.p_color,
        p_description: this.state.p_description,
        gender: this.state.gender,
        p_brand: this.state.p_brand,
        p_quantity: this.state.p_quantity,
        p_size: this.state.p_size,
        age: this.state.age,
        author: this.state.author,
        b_category: this.state.b_category,
        bookfor: this.state.bookfor,
      };
      localData.push(objectData);
      console.log("In function   : ", localData);
      this.setState(this.initialState);

      this.setState({
        dataListContent: localData,
      });
    } else {
      console.log("in the else condition");
    }
  };

  render() {
    const {
      pnameErr,
      ppriceErr,
      pimageErr,
      pcategoryErr,
      pcolorErr,
      pdescriptionErr,
      genderErr,
      pbrandErr,
      pquantityErr,
      psizeErr,
      ageErr,
      authorErr,
      bcategoryErr,
      bookErr,
    } = this.state.formErrors;
    const { isClothing, isBooks, isFood, isToys } = this.state;
    console.log("this.state----", this.state);

    const { formData } = this.props;
    let rows = [];
    if (formData) {
      for (var i = 0; i < formData.length; i++) {
        rows.push(
          <tr>
            <td>{formData[i].username}</td>
            <td>{formData[i].password}</td>
          </tr>
        );
      }
    }
    return (
      <div className="formDiv">
        <h3 style={{ textAlign: "center" }}>FORM </h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="p_name">Product Name :</label>
              <input
                type="text"
                name="p_name"
                value={this.state.p_name}
                onChange={this.handleChange}
                placeholder="Product Name.."
                className={pnameErr ? " showError" : ""}
              />
              {pnameErr && <div style={{ color: "red", paddingBottom: 10 }}>{pnameErr}</div>}
            </div>
            <div>
              <label htmlFor="p_price">Product price :</label>
              <input
                type="text"
                name="p_price"
                value={this.state.p_price}
                onChange={this.handleChange}
                placeholder="Price.."
                className={ppriceErr ? " showError" : ""}
              />
              {ppriceErr && <div style={{ color: "red", paddingBottom: 10 }}>{ppriceErr}</div>}
            </div>

            <div className="photo">
              <label htmlFor="upload-button">
                Upload your photo:
                <input type="file" id="upload-button" style={{ display: "none" }} onChange={this.handleChange} />
                <button type="submit">Choosefile</button>
              </label>
              {pimageErr && <div style={{ color: "red", paddingBottom: 10 }}>{pimageErr}</div>}
            </div>
            <div>
              <label htmlFor="p_category">Product category:</label>
              <select name="p_category" onChange={this.handleChange} className={pcategoryErr ? " showError" : ""} value={this.state.p_category}>
                <option value="">--Select--</option>
                <option value="FOOD">FOOD</option>
                <option value="CLOTHINGS">CLOTHINGS</option>
                <option value="BOOK">BOOK</option>
                <option value="TOYS_GAME">TOYS and GAME</option>
                <option value="ELECTRONICS">ELECTRONICS</option>
              </select>
              {pcategoryErr && <div style={{ color: "red", paddingBottom: 10 }}>{pcategoryErr}</div>}
            </div>
            {isClothing && (
              <div>
                <div className="pcolor">
                  <label htmlFor="p_color">Color: </label>
                  <input type="checkbox" value="Red" name="p_color" checked={this.state.p_color === "Red"} onChange={this.handleChange} /> Red
                  <input type="checkbox" value="Green" name="p_color" checked={this.state.p_color === "Green"} onChange={this.handleChange} /> Green
                  <input type="checkbox" value="Blue" name="p_color" checked={this.state.p_color === "Blue"} onChange={this.handleChange} /> Blue
                  {pcolorErr && <div style={{ color: "red", paddingBottom: 30 }}>{pcolorErr}</div>}
                </div>
                <div className="gender">
                  <label htmlFor="gender">Gender : </label>
                  <input type="radio" value="Male" name="gender" checked={this.state.gender === "Male"} onChange={this.handleChange} /> Male
                  <input type="radio" value="Female" name="gender" checked={this.state.gender === "Female"} onChange={this.handleChange} /> Female
                  {genderErr && <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>}
                </div>
                <div className="psize">
                  <label htmlFor="p_size">SIZE: </label>
                  <input type="checkbox" value="S" name="p_size" checked={this.state.p_size === "S"} onChange={this.handleChange} /> S
                  <input type="checkbox" value="L" name="p_size" checked={this.state.p_size === "L"} onChange={this.handleChange} /> L
                  <input type="checkbox" value="XL" name="p_size" checked={this.state.p_size === "XL"} onChange={this.handleChange} /> XL
                  <input type="checkbox" value="XXL" name="p_size" checked={this.state.p_size === "XXL"} onChange={this.handleChange} /> XXL
                  {psizeErr && <div style={{ color: "red", paddingBottom: 30 }}>{psizeErr}</div>}
                </div>
              </div>
            )}
            <div>
              <br />
              <label style={{ marginBottom: "2px" }}>Description:</label>
              <br />
              <textarea
                type="text"
                name="p_description"
                value={this.state.p_description}
                onChange={this.handleChange}
                className={pnameErr ? " showError" : ""}
              />

              {pdescriptionErr && <div style={{ color: "red", paddingBottom: 10 }}>{pdescriptionErr}</div>}
            </div>

            <div>
              <br />
              <label htmlFor="p_brand">Product Brand:</label>
              <input
                type="text"
                name="p_brand"
                value={this.state.p_brand}
                onChange={this.handleChange}
                placeholder="Brand .."
                className={pbrandErr ? " showError" : ""}
              />
              {pbrandErr && <div style={{ color: "red", paddingBottom: 10 }}>{pbrandErr}</div>}
            </div>
            <div>
              <label htmlFor="p_quantity">Product Quantity:</label>
              <input
                type="text"
                name="p_quantity"
                value={this.state.p_quantity}
                onChange={this.handleChange}
                placeholder="Quantity .."
                pattern="[0-9]"
                className={pquantityErr ? " showError" : ""}
              />
              {pquantityErr && <div style={{ color: "red", paddingBottom: 10 }}>{pquantityErr}</div>}
            </div>

            {isToys && (
              <div className="age">
                <label htmlFor="age">AGE : </label>
                <input type="radio" value="child" name="age" checked={this.state.age === "child"} onChange={this.handleChange} /> 0-6 year's old
                <input type="radio" value="adult" name="age" checked={this.state.age === "adult"} onChange={this.handleChange} /> +6 year's old
                {ageErr && <div style={{ color: "red", paddingBottom: 10 }}>{ageErr}</div>}
              </div>
            )}
            {isBooks && (
              <div>
                <div>
                  <label htmlFor="author">Book author :</label>
                  <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder="AuthorName.."
                    className={authorErr ? " showError" : ""}
                  />
                  {authorErr && <div style={{ color: "red", paddingBottom: 10 }}>{authorErr}</div>}
                </div>
                <div>
                  <label htmlFor="b_category">Book category:</label>
                  <select name="b_category" onChange={this.handleChange} className={bcategoryErr ? " showError" : ""} value={this.state.b_category}>
                    <option value="">--Select--</option>
                    <option value="horr">Horror Story</option>
                    <option value="cmic">Comics Story</option>
                    <option value="bio">Biography Story</option>
                  </select>
                  {bcategoryErr && <div style={{ color: "red", paddingBottom: 10 }}>{bcategoryErr}</div>}
                </div>
                <div className="age">
                  <label htmlFor="bookfor">Book for : </label>
                  <input type="radio" value="c" name="bookfor" checked={this.state.bookfor === "c"} onChange={this.handleChange} /> Children
                  <input type="radio" value="a" name="bookfor" checked={this.state.bookfor === "a"} onChange={this.handleChange} /> Adult
                  {bookErr && <div style={{ color: "red", paddingBottom: 10 }}>{bookErr}</div>}
                </div>
              </div>
            )}

            <div>
              <label>start Date:</label>

              <DatePicker
                startDate={this.state.startDate}
                startDateId="your_start_date_id"
                endDate={this.state.endDate}
                endDateId="your_end_date_id"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => this.setState({ focusedInput })}
              />

              <br />
            </div>
            <input type="submit" value="Submit" />
            <div>
              <table border="1" id="show" paddingleft="50 ">
                <tbody>
                  <tr>
                    <th>p_name</th>
                    <th>p_price</th>
                    <th>p_color</th>
                    <th>p_category</th>
                    <th>p_description</th>
                    <th>Gender</th>
                    <th>p_brand</th>
                    <th>p_quantity</th>
                    <th>p_size</th>
                    <th>Age</th>
                    <th>author</th>
                    <th>b_category</th>
                    <th>Book for</th>
                    <th>Date</th>
                  </tr>

                  {this.state.dataListContent.map((item) => (
                    <tr>
                      <td>{item.p_name}</td>
                      <td>{item.p_price}</td>
                      <td>{item.p_color}</td>
                      <td>{item.p_category}</td>
                      <td>{item.p_description}</td>
                      <td>{item.gender}</td>
                      <td>{item.p_brand}</td>
                      <td>{item.p_quantity}</td>
                      <td>{item.p_size}</td>
                      <td>{item.age}</td>
                      <td>{item.author}</td>
                      <td>{item.b_category}</td>
                      <td>{item.bookfor}</td>
                      <td>""</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
