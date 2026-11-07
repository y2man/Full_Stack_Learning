function Task(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Status: {props.status}</p>
        </div>
    );
}

export default Task;