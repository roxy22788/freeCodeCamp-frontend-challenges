import './css/index.css';

function ToolBar(props) {
    return (
        <div className='toolBar'>
            <p>{props.text}</p>
        </div>
    );
}

export default ToolBar;