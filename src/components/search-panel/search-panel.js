import {
    Component
} from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }

    onSearchStrChange =(event) => {
        const searchStr = event.target.value; 
        this.setState({
            searchStr
        })

        this.props.onUpdateSearch(searchStr);
    }

    render() {
        const {searchStr} = this.state;

        return ( 
            <input type = "text"
                placeholder = "Type here"
                className = "fotm-control search-input"
                value={searchStr}
                onChange={this.onSearchStrChange} />
        )
    }
}

export default SearchPanel;