import * as React from 'react';
import Post from './Post';

const initialState = {items: [], text: ''}
type State = Readonly<typeof initialState>

class PostList extends React.Component<any, any> {
    public state: State;

    constructor(props: any) {
        super(props)
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render():any {
        var list: Array<JSX.Element> = []

        for(var i = 0; i < this.state.items.length; i++){
            list.push(<Post key={i} text={this.state.items[i]}/>)
        }
        return (
            <div className="col-md-5">
            <div className="form-area">  
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="post" name="post" placeholder="Post" required onChange={this.handleChange} value={this.state.text} />
                  </div>
                    <button>Add Post</button>
                </form>
            </div>
            {list}
          </div>
          
        );
    }

    handleChange(e: any) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e: any){
        console.log("handling submit");
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        console.log(newItem.text);
        this.setState((prevState: any) => ({
            items: prevState.items.concat(this.state.text),
            text: ''
        }));
    }
}

export default PostList;