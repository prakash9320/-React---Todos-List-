import './Style.css';
import Logo from '../imges/todo.svg';
const Todos = () => {
    return (
        <div>
            <div className ="main-div">
                <div className ="child-div">
                    <figure>
                        <img src={Logo} alt ="todologo"/>
                        <figcaption>Add Your List Here</figcaption>
                        <div className ="addItems">
                            <input type="text" placeholder="Add Items.." className="form-control"></input>
                            <i className="fa fa-plus add-btn"></i>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Todos
