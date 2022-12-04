function SearchBar ({onSubmit}){

    const submitHandler = ()=>{
        onSubmit('cars')
    }


    return <div>
        <input type='text'></input>
        <button onClick={submitHandler}>Click me</button>
    </div>
}

export default SearchBar