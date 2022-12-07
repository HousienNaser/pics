import { useState } from "react"
import './SearchBar.css'
function SearchBar ({onSubmit}){

    const [term,setTerm] = useState('')
    const submitHandler = (event)=>{
        event.preventDefault()
        onSubmit(term)
    }
    //const submitHandler = () => console.log("Do a search with ",car)
    const handleChange = (event) => {
       setTerm(event.target.value)
    }


    return <div className="search-bar">
        <form onSubmit={submitHandler}>
        <label>Enter Search term</label>
            <input value={term} onChange={handleChange} />
            
        </form>
        
    </div>
}


export default SearchBar