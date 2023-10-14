import { Component } from 'react';
import { BiSearch } from "react-icons/bi";
import { Search, Button,Input } from "./Searchbar.styled";

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
           <Search  onSubmit= {this.handlerSubmit}>
            <Button type="submit"><BiSearch size = "18px"/></Button>

            <Input
                type="text"
                    placeholder="Search images and photos"
                    defaultValue={this.state.q} 
                onChange = {this.handlerChange}
    />
  </Search>
        )
    }
}


