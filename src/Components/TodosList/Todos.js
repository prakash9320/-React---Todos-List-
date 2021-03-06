 import {useState,useEffect} from 'react';
import './Style.css';
import Logo from '../imges/todo.svg'; 

 const getLocalData =() =>{
       const  list = localStorage.getItem("Mytodolist");
       if(list){
           return JSON.parse(list);
       }else{
           return [];
       }
 };

const Todos = () => {
      const [inputData,setInputData] = useState("");
      const [items,setItems] = useState(getLocalData());
      const [isEditItems,setisEditItems] =useState("")
      const [ToggleButton,setToggleButton] = useState(false)
        //    add Item Function 
        const addItem = () =>{
          if(!inputData){
              alert("Please Fil The Input")
          }else if(inputData && ToggleButton){
              setItems(
                  items.map((currentElement)=>{
                    if(currentElement.id === isEditItems){
                        return {...currentElement, name: inputData}
                    }
                    return currentElement; 
                  })
              )
              setInputData([])
              setisEditItems(null);
              setToggleButton(false);
          }
            else{
         
            const myNewNumberData = {
                id:new Date().getTime().toString(),
                name: inputData,
            }              

              setItems([...items,myNewNumberData]);
              setInputData("");
          }
        };
        //   edit the items function
         const editItems = (index) =>{
              const item_dodo_edited = items.find((currentElement)=>{
                  return currentElement.id === index;
              });
               setInputData(item_dodo_edited.name)
              setisEditItems(index);
              setToggleButton( true);
         }
         
        //  how to delete item Selection 
        const deleteItem = (index) => {
            const updatedItems = items.filter((currentElement) => {
              return currentElement.id !== index;
            });
            setItems(updatedItems);
          };
       
        //    removeAll List Items
         const removeAll = () =>{
          setItems([])
         };

        //  add Local Storage

        useEffect(()=>{
            localStorage.setItem("Mytodolist",JSON.stringify(items))
        },[items]);

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
                              {ToggleButton ? (<i className="fa fa-edit add-btn" onClick={addItem}></i>) 

                              :(<i className="fa fa-plus add-btn" onClick={addItem}></i>)}
                            
                        </div>
                         {/* show our item */}
                           <div className="showItems">
                                 {items.map((currentElement)=>{ 
                                     return(
                                        <div className ="eachItem" key={currentElement.id }>
                                        <h3>{currentElement.name}</h3>
                                        <div className ="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={()=>editItems(currentElement.id)}></i>
                                        <i className="fas fa-trash-alt" onClick={()=> deleteItem(currentElement.id)}></i>
                                        </div>
                                    </div>
                                     )
                                     
                                 })}      
                           </div>
                           
                          <div className="showItems">
                              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                              </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Todos
