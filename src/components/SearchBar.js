import { useState } from "react"
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


    return <div>
        <form onSubmit={submitHandler}>
            <input value={term} onChange={handleChange} />
        </form>
        
    </div>
}


export default SearchBar