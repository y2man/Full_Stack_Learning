
import { useState } from "react";

function App() {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [new_name, setNew_name] = useState("");

    function editStudent(index, student) {
        setEditingIndex(index);
        setNew_name(student);
    }

    function saveStudent() {
        if (new_name.trim() === "") {
            return;
        }

        setStudents(
            students.map((student, index) =>
                index === editingIndex ? new_name.trim() : student
            )
        );

        setEditingIndex(null);
        setNew_name("");
    }

    function cancelEdit() {
        setEditingIndex(null);
        setNew_name("");
    }

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(10)}>Reset</button>

            <h2>Student Name Input</h2>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            {name.trim() === "" ?
                <p>Please enter your name</p> :
                <p>Hello {name}</p>
            }

            <h2>Student Manager</h2>

            <button
                disabled={name.trim() === ""}
                onClick={() => {
                    setStudents([...students, name.trim()]);
                    setName("");
                }}
            >
                Add Student
            </button>

            {students.map((student, index) => (
                <div key={index}>
                    {editingIndex === index ? (
                        <>
                            <input
                                value={new_name}
                                onChange={(e) => setNew_name(e.target.value)}
                            />

                            <button onClick={saveStudent}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <span>{student} </span>

                            <button onClick={() => editStudent(index, student)}>
                                Edit
                            </button>

                            <button
                                onClick={() => {
                                    setStudents(
                                        students.filter((_, i) => i !== index)
                                    );

                                    if (editingIndex !== null && editingIndex > index) {
                                        setEditingIndex(editingIndex - 1);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;
