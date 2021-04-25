import React from 'react';

class ImageCard extends React.Component {
    // We want to use the React ref system, to refer to images.
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.img;

        // 
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;