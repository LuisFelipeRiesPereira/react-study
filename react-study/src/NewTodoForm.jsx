import { useState } from "react"

export function NewTodoForm({ onSubmit }){
    const [newItem, setNewItem] = useState("")

    function handlerSubmit(e) {
        e.preventDefault()
        if(newItem === '') return
        
        onSubmit(newItem)

        setNewItem("")
      }

    return(
        <form onSubmit={handlerSubmit} className="new-item-form" action="">
            <div className="form-row"> 
                <label htmlFor="item">New item</label>
                <input value={newItem} type="text" onChange={e => setNewItem(e.target.value)} id="item" />
            </div>
            <button className="btn">Add</button>
            </form>
    )
}