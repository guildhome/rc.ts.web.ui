import * as React from 'react';

class Post extends React.Component<any, any> {

    constructor(props: any){
        super(props)
    }

    public render():any {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default Post