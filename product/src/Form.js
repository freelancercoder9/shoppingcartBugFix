import React, { Component } from "react";    
import './Form.css'
import DatePicker from 'react-date-picker';


class Form extends Component {   
    constructor(props) {    
        super(props);    
        this.state = { 
         p_name:'', 
            p_price:'', 
            p_image: '',    
            p_category: '', 
            p_color:'', 
            p_description:'',  
            gender:'',
            p_brand:'',
            p_quantity:'',
            p_size:'',
            age:'',
            author:'', 
            b_category:'',
            bookfor:'',
           startDate:null,
           endDate:null,
        
       
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { p_name, p_price, p_image,  p_category, p_color, p_description, gender,p_brand,p_quantity,p_size,age,author ,b_category,bookfor,startDate} = this.state;    
        let formErrors = {};    
        let formIsValid = false;    
    
        if (!p_name) {    
              
            formErrors["p_nameErr"] = "p_name is required.";   
            formIsValid = false;   
        }
 
        if(!p_price["pprice"]){
           
            formErrors["pprice"] = "Cannot be empty";
            formIsValid = false; 
         }
   
         if(p_price["pprice"]){
            if(!p_price["pprice"].match(/^[0-9\b]*$/)){
              
               formErrors["ppriceErr"] = "Only number";
               formIsValid = false; 
               {
                   
               }
            }        
         } 
     /*  if (!p_image) {  
              formErrors["pimageErr"] = "image is required.";  
              formIsValid = false;   
        }*/    
    
        
       if (p_category === '') {    
               
            formErrors["pcategoryErr"] = "Select category.";  
            formIsValid = false;   
        }    
        if (p_color === '') {    
               formErrors["pcolorErr"] = "Select To atleast one color.";  
               formIsValid = false;   
               
        }  
        if(p_color["pcolor"]){
           if(!p_color["pcolor"]<1){
              
               formErrors["pcolorErr"] = "Only one checkbox";
               formIsValid = false; 
            }        
         } 
       
         if (!p_description) {    
            formErrors["pdescriptionErr"] = "Description is required."; 
            formIsValid = false;    
      } 
        if (gender=== '') {    
              formErrors["genderErr"] = "gender Must be select.";   
              console.log("this.state--",this.state.gender) 
        } 
        if (!p_brand) {    
            formErrors["pbrandErr"] = "It should not be blank."; 
            formIsValid = false;      
      }    
      if (p_quantity=== '') {    
        formErrors[" pquantityErr"] = "quantity is required.";  
        formIsValid = false;   
  }   
 

      if (p_size === '') {    
        formErrors["psizeErr"] = "At least select one ...";    
      }
       if (age=== '') {    
        formErrors["ageErr"] = "Must need to select.";    
      }
       if (!author) {    
        formErrors["authorErr"] = "Authorname is required.";    }

     if (b_category === '') {    
        formErrors["bcategoryErr"] = "Select category .";    
    }
    if (bookfor=== '') {    
        formErrors["bookErr"] = "It's required.";    
     } 

      
        else{
        
            formIsValid=true;
        
        }
        this.setState({formErrors,formIsValid})
        console.log('formIsValild---',formIsValid)
        console.log('formErrors---',formErrors)
    }
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {   
        console.log('Inside') 
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
       
         
    }    
  

    render()   
    {
        const { pnameErr , ppriceErr ,pimageErr, pcategoryErr,pcolorErr, pdescriptionErr,genderErr,pbrandErr,pquantityErr,psizeErr,ageErr,authorErr,bcategoryErr,bookErr} = this.state.formErrors; 
          
    console.log("this.state----",this.state)
    
    const {formData} = this.props;
     let rows = []
     if(formData){
       for(var i=0; i<formData.length;i++){
        rows.push(<tr><td>{formData[i].username}</td><td>{formData[i].password}</td></tr>)
        }  
      }
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >FORM </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}> 

                     
                     <div>    
                            <label htmlFor="p_name">Product Name :</label>    
                            <input type="text" name="p_name"    
                                value={this.state.p_name}    
                                onChange={this.handleChange}    
                                placeholder="Product Name.."    
                                className={pnameErr ? ' showError' : ''} />    
                            {pnameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pnameErr}</div>    
                            }    
    
                        </div>   
                        <div>    
                            <label htmlFor="p_price">Product price :</label>    
                            <input type="text" name="p_price"    
                                value={this.state.p_price}    
                                onChange={this.handleChange}    
                                placeholder="Price.."    
                                className={ppriceErr ? ' showError' : ''} />    
                            {ppriceErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ppriceErr}</div>    
                            }    
    
                        </div>  
                    
                         
                  
                        <div className="photo">
                            <label htmlFor="upload-button">Upload your photo:
                              <input type="file" id="upload-button" style={{ display: 'none' }} onChange={this.handleChange} />
                            <button type="submit">Choosefile</button>
                                            </label>
                                            {pimageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pimageErr}</div>    
                            }    
                        </div>
                        <div>    
                            <label htmlFor="p_category">Product category:</label>    
                            <select name="p_category" onChange={this.handleChange}    
                                className={pcategoryErr ? ' showError' : ''}    
                                value={this.state.p_category} >    
                                <option value="">--Select--</option>    
                                <option value="FOOD">FOOD</option>   
                                <option value="CLOTHINGS">CLOTHINGS</option>    
                                <option value="BOOK">BOOK</option>    
                                <option value="TOYS_GAME">TOYS and GAME</option>    
                                <option value="ELECTRONICS">ELECTRONICS</option>    
                            </select>    
                            {pcategoryErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pcategoryErr}</div>    
                            }    
                        </div>  
                        <div className="pcolor">    
                            <label htmlFor="p_color">Color: </label>    
                            <input type="checkbox" value="Red" name="p_color"onChange={this.handleChange}   /> Red
                           <input type="checkbox" value="Green" name="p_color"onChange={this.handleChange}  /> Green
                           <input type="checkbox" value="Blue" name="p_color"onChange={this.handleChange} /> Blue
                         
                            {pcolorErr &&    
                                <div style={{ color: "red", paddingBottom: 30 }}>{pcolorErr}</div>    
                            }    
                        </div>   
                        <div>
                            <label>Description:</label>
                            <textarea type="text" name="p_description" value={this.state.p_description} onChange={this.handleChange}  className={pnameErr ? ' showError' : ''}   />
                             
                            {pdescriptionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pdescriptionErr}</div>    
                            }  


                            
                            </div>
                            <div className="gender">    
                            <label htmlFor="gender">Gender : </label>    
                            <input type="radio" value="Male" name="gender"  onChange={this.handleChange}/> Male
                           <input type="radio" value="Female" name="gender" onChange={this.handleChange}/> Female
                         
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div> 
                        <div>    
                            <label htmlFor="p_brand">Product Brand:</label>    
                            <input type="text" name="p_brand"    
                                value={this.state.p_brand}    
                                onChange={this.handleChange}    
                                placeholder="Brand .."    
                                className={pbrandErr ? ' showError' : ''} />    
                            {pbrandErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pbrandErr}</div>    
                            }    
                            </div>
                            <div>    
                            <label htmlFor="p_quantity">Product Quantity:</label>    
                            <input type="text" name="p_quantity"    
                                value={this.state.p_quantity}    
                                onChange={this.handleChange}    
                                placeholder="Quantity .."   
                                pattern='[0-9]' 
                                className={pquantityErr ? ' showError' : ''} />    
                            {pquantityErr  &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pquantityErr }</div>    
                            }    
                            </div>
                            <div className="psize">    
                            <label htmlFor="p_size">SIZE: </label>    
                            <input type="checkbox" value="S" name="p_size"onChange={this.handleChange}   /> S
                           <input type="checkbox" value="L" name="p_size"onChange={this.handleChange}  /> L
                           <input type="checkbox" value="XL" name="p_size"onChange={this.handleChange} /> XL
                           <input type="checkbox" value="XXL" name="p_size"onChange={this.handleChange} /> XXL
                         
                            {psizeErr &&    
                                <div style={{ color: "red", paddingBottom: 30 }}>{psizeErr}</div>    
                            }    
                        </div> 

                        <div className="age">    
                            <label htmlFor="age">AGE : </label>    
                            <input type="radio" value="child" name="age"  onChange={this.handleChange}/> 0-6 year's old
                           <input type="radio" value="adult" name="age" onChange={this.handleChange}/>  +6 year's old
                         
                            {ageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ageErr}</div>    
                            }    
                        </div> 
                        <div>    
                            <label htmlFor="author">Book author :</label>    
                            <input type="text" name="author"    
                                value={this.state.author}    
                                onChange={this.handleChange}    
                                placeholder="AuthorName.."    
                                className={authorErr ? ' showError' : ''} />    
                            {authorErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{authorErr}</div>    
                            }    
    
                        </div>   
                        <div>    
                            <label htmlFor="b_category">Book category:</label>    
                            <select name="b_category" onChange={this.handleChange}    
                                className={bcategoryErr ? ' showError' : ''}    
                                value={this.state.b_category} >    
                                <option value="">--Select--</option>    
                                <option value="horr">Horror Story</option>   
                                <option value="cmic">Comics Story</option>    
                                <option value="bio">Biography Story</option>    
                                  
                            </select>    
                            {bcategoryErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bcategoryErr}</div>    
                            }    
                        </div>  
                        <div className="age">    
                            <label htmlFor="bookfor">Book for : </label>    
                            <input type="radio" value="c" name="bookfor"  onChange={this.handleChange}/> Children
                           <input type="radio" value="a" name="bookfor" onChange={this.handleChange}/> Adult
                         
                            {bookErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bookErr}</div>    
                            }    
                        </div> 
                        <div>
                        <label>start Date:</label> 
                            
                            
                            
                <DatePicker

startDate={this.state.startDate}
startDateId="your_start_date_id"
endDate={this.state.endDate}
endDateId="your_end_date_id"
onDatesChange={({ startDate, endDate }) => this . setState ({ startDate, endDate })}
focusedInput={this.state.focusedInput}
onFocusChange={focusedInput => this. setState ({ focusedInput })} 
/>

<br/>




</div>
                         <input type="submit" value="Submit" />  
                         <div>
                        
                         <table border="1" id="show" paddingleft ="50 ">
                        <tr>
                     <th >p_name</th>
                    <th>p_price</th>
                    <th>p_image</th>
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
            
            
                </table>
                </div> 
                </form>    
            </div> 
             
                       
             
             
    </div>    
        )    
    }    

       
}

export default Form;
