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
        
        this.reset(); 
    }
    
    reset = () => {
        this.setState({ value:'',})
    }

    // async componentDidUpdate(prevProps, prevState) {
    //     if (prevState.q !== this.state.q
    //         || prevState.page !== this.state.page) {
    //         //запит з setState
    //         try {
    //             this.setState({ loading: true });
    //             const galleryImages = await fetchImages(this.state.q);
        
    //             this.setState({ images: galleryImages })
    //             this.setState({ loading: false });
    //         } catch (error) {
       
    //         }
    //     }
    // }

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


