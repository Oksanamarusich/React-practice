import { Component } from 'react';
import { BiSearch } from "react-icons/bi";
import { Search, Button, Input } from "./Searchbar.styled";
import toast from 'react-hot-toast';

export class Searchbar extends Component {
    state = {
        value: '',
    }

    handlerChange = evt => {
        this.setState({ value: evt.target.value });
       
    }
    
    handlerSubmit = evt => {
        evt.preventDefault();
         if (this.state.value.trim() === '') {
    return  toast.success('Please enter a search word.', {position:'top-right'});
        };

        this.props.handelSearch(this.state.value);
         
        this.reset();
}
    
    reset = () => {
        this.setState({ value: '' });
    }
    

render() {
        return (
           <Search  onSubmit= {this.handlerSubmit}>
            <Button type="submit"><BiSearch size = "18px"/></Button>

            <Input
                type="text"
                    placeholder="Search images and photos"
                    value={this.state.value} 
                onChange = {this.handlerChange}
    />
  </Search>
        )
    }
}


