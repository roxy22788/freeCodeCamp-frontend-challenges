function Preview(props) {
    return (
        <div
            className='previewContainer' 
            dangerouslySetInnerHTML={{__html: props.markdown}} />
    );
}

export default Preview;