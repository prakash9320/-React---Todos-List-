 import {useState} from 'react';
import './Style.css';
import Logo from '../imges/todo.svg';
const Todos = () => {
      const [inputData,setInputData] = useState("");
      const [items,setItems] = useState([]);

        //    add Item Function 
        const addItem = () =>{
          if(!inputData){
              alert("Please Fil The Input")
          }else{
         
            const myNewNumberData = {
                id:new Date().getTime().toString(),
                name: inputData,
            }              

              setItems([...items,myNewNumberData]);
              setInputData("");
          }
        };
         
        //  how to delete item Selection
        const deleteItem = (index) => {
            const updatedItems = items.filter((currentElement) => {
              return currentElement.id !== index;
            });
            setItems(updatedItems);
          };
    return (
        <div>
            <div className ="main-div">
                <div className ="child-div">
                    <figure>
                        <img src={Logo} alt ="todologo"/>
                        <figcaption>Add Your List Here</figcaption>
                        <div className ="addItems">
                            <input type="text" placeholder="Add Items.." 
                            className="form-control"
                                 value={inputData}
                                 onChange={(event)=>setInputData(event.target.value)}   
                            ></input>
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        </div>
                         {/* show our item */}
                           <div className="showItems">
                                 {items.map((currentElement)=>{ 
                                     return(
                                        <div className ="eachItem" key={currentElement.id }>
                                        <h3>{currentElement.name}</h3>
                                        <div className ="todo-btn">
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="fas fa-trash-alt" onClick={()=> deleteItem(currentElement.id)}></i>
                                        </div>
                                    </div>
                                     )
                                     
                                 })}      
                           </div>
                           
                          <div className="showItems">
                              <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
                              </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Todos
