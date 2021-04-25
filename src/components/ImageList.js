import react from "react";

const ImageList = (props) => {
    const images = props.images.map(({urls, description, id}) => {
        return <img src={urls.regular} key={id} alt={description}/>
    });
    return (
        <div>
            {images}
        </div>
    )
};

export default ImageList;