import { Component } from 'react';

export class Searchbar extends Component {
    state = {
        value: '',
    }

    handlerChange = evt => {
        this.setState({ value: evt.target.value });
    }
    
    handlerSubmit = evt => {
        evt.preventDefault();
        this.props.handelSearch(this.state.value)
        console.log(this.state.value)
          this.reset();
    }
    
    reset = () => {
        this.setState({ value:''})
    }
    

render() {
        return (
           <form onSubmit= {this.handlerSubmit}>
            <button type="submit" >
      <span >Search</span>
    </button>

            <input
                type="text"
                    placeholder="Search images and photos"
                    defaultValue={this.state.q} 
                onChange = {this.handlerChange}
    />
  </form>
        )
    }
}


