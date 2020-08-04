import React, {useState} from 'react'

const SearchBar=({onFormSubmit})=>{
    const [term,setTerm]=useState('')

    
const onInputChange=(event)=>{

    setTerm(event.target.value)
   
}

const onSubmit=(event)=>{
event.preventDefault();
    //to do: callback from parent component
onFormSubmit(term)
}
return (
    <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onSubmit}>
        <div className="field" style={{textAlign:'center'}} >
            <label>Video Search</label>
            <input type="text"
            value={term}
            onChange={onInputChange}
            
            />
        </div>
        </form>
    </div>
)

}

    
    

export default SearchBar;