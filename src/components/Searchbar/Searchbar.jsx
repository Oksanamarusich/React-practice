import { Component } from 'react';
import {fetchImages} from "../api"

export class Searchbar extends Component {
    state = {
        q: '',
        images: []
    }
    handlerChange = evt => {
        this.setState({ q: evt.target.value });
       
    }
    
    handlerSubmit = evt => {
    evt.preventDefault();
    //this.setState({ q: evt.target.value});
        this.props.onSubmit(this.state)

        this.reset(); 
    }
    
    reset = () => {
        this.setState({ q:'',})
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.q !== this.state.q
            || prevState.page !== this.state.page) {
            //запит з setState
            try {
                this.setState({ loading: true });
                const galleryImages = await fetchImages();
        
                this.setState({ images: galleryImages })
                this.setState({ loading: false });
            } catch (error) {
       
            }
        }
    }

    render() {
        return (
           <form onSubmit= {this.handlerSubmit}>
            <button type="submit" >
      <span >Search</span>
    </button>

            <input
                defaultValue={this.state.q} 
                onChange = {this.handlerChange}
                type="text"
                placeholder="Search images and photos"
    />
  </form>
        )
    }
}


