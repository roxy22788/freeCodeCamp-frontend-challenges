function Preview(props) {
    return (
        <div dangerouslySetInnerHTML={{__html: props.markdown}} />
    );
}

export default Preview;