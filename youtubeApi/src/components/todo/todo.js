import React, {Components} from 'react';
import './../../assets/bs4.css';
// import TodoList from './todolist';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inputval: '',
            counter: 0,
            index: '',
            items: []
        };
        this.handlePush = this.handlePush.bind(this);
    }
    handlePush(){
        let copyitemm = [...this.state.items];
        if(this.state.inputval !== ""){
            copyitemm.push(this.state.inputval);
            let count = this.state.counter + 1;
            this.setState({
                counter : count,
                items: copyitemm,
                inputval: '',
            })
        }
       
          
    }
    removeItem2(index) {
        let copyitemm = [...this.state.items]
        copyitemm.splice(index,1)
        this.setState({
            items: copyitemm
        })

    }
    updateItem(index, item){
        let copyitemm = [...this.state.items]
        copyitemm.splice(index, 1)
        copyitemm[index] = item
        this.setState({
            items: copyitemm,
            inputval: item,
        })

    }

   
    render(){
        return(
            <div>
                <span className>Total: {this.state.items.length}</span>
                    <h4 className="addHead">Add Items</h4> 
                    <span className="badge"> {this.state.counter}</span>
                    <input 
                        value={this.state.inputval}
                        onChange={event => this.setState({
                            inputval : event.target.value
                        })}
                    />
                    <button onClick={this.handlePush}>Submit</button>
               
                {
                    <ul>
                        {this.state.items.map((item, index)=> {


                            return <li>{index} of {item} <span className="close" onClick={()=> this.removeItem2(index)}>x </span> <span onClick={() => this.updateItem(index, item)}> Edit</span></li>
                        })
                        }
                    </ul>
                }
            </div>
        )
    }

}



export default Todo;