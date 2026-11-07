import Student from "./Student";

function StudentList() {
    const students = [
        { id: 1, name: "Cosmos", age: 21, department: "Software" },
        { id: 2, name: "Rider", age: 23, department: "Electrical" },
        { id: 3, name: "Jems", age: 24, department: "Environmental" },
        { id: 4,name: "Ablel",age:22,department: "Computer Science"},
        { id: 5, name:"Sara", age: 20, department: "Information Technology"}
        
    ];

    return (
        <section>
            <h2>Our Students</h2>

            {students.map((student) => (
                <Student
                    key={student.id}
                    name={student.name}
                    age={student.age}
                    department={student.department}
                />
            ))}
        </section>
    );
}

export default StudentList;