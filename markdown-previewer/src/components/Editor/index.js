import './css/index.css';

function Editor(props) {
    return (
        <textarea
            className='textAreaEditor' 
            value={props.markdown}
            onChange={props.onChange}
            type='text'/>
    );
}

export default Editor;