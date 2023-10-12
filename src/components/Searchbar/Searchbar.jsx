


export const Searchbar = ({ value, onSubmit}) => {
    return <div>
        <form onSubmit={(evt) => {
            console.log(evt.target)
        }}>
            <button type="submit" >
      <span >Search</span>
    </button>

            <input
                defaultValue={value}
                type="text"
                placeholder="Search images and photos"
    />
  </form>
    </div>
    
}