function Editor(props) {
    return (
        <div>
            <textarea 
                value={props.markdown}
                onChange={props.onChange}
                type='text'/>
        </div>
    );
}

export default Editor;