 import react,{useState} from 'react';
import './Style.css';
import Logo from '../imges/todo.svg';
const Todos = () => {
      const [inputData,setInputData] = useState("");
      const [items,setItems] = useState();
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
                            <i className="fa fa-plus add-btn"></i>
                        </div>
                         {/* show our item */}
                           <div className="showItems">
                                 <div className ="eachItem">
                                     <h3>Apple</h3>
                                     <div className ="todo-btn">
                                     <i className="far fa-edit add-btn"></i>
                                     <i class="fas fa-trash-alt"></i>
                                     </div>
                                 </div>
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
