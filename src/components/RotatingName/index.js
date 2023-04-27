import { Component } from "react";

import {v4 as uuidv4} from 'uuid'

import ListItem from "../list-item";


import './index.css'


const newList = [{
    id : uuidv4(),
    name : "HTML"
},
{
    id:uuidv4(),
    name : "React"
}]





class RotatingName extends Component{
    state={name : "",
    initialList:newList
}




onInputElement=(event)=>{
    const value = event.target.value 
    this.setState({name :value })

    
   
    
   
}

onButtonClicking=(event)=>{
    event.preventDefault()
    const {name} = this.state
    const newItem={
       id:uuidv4(),
       name,

    }
    this.setState(prevState=>({
        initialList : [...prevState.initialList,newItem],
        name : '',

    }))
   
   
   
}



    render(){
       

        const {initialList,name}=this.state
        
        
        return(
            <div className="app-container">
                <div>
                    <form onSubmit={this.onButtonClicking}>
                        <div className="input-button-container">
                            <input placeholder="Add a Todo Item" value={name} onChange={this.onInputElement} className="input-element"  type="text"/>
                            <button className="button" type="submit">ADD</button>

                        </div>
                    </form>
                    <div className="names-list-container">
                        <ul className="ul-element">
                            {initialList.map(eachItem =>(
                                <ListItem details={eachItem} key={eachItem.id}/>
                            ))}
                        </ul>

                    </div>


                </div>

            </div>

        )
    }
}

export default RotatingName