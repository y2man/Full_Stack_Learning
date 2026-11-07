// LESSON 02: PROPS

function Student(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Department: {props.department}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Student name="Cosmos" age={21} department="Software" />
            <Student name="Sara" age={20} department="IT" />
            <Student name="Abel" age={22} department="Computer Science" />
        </div>
    );
}

export default App;