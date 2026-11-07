import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users!");
                }
                if (loading) {
                    return" Loading users...";
                }

                if (error) {
                    return error;
                }
                

                const data = await response.json();
                setUsers(data);

                

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

 if (loading) {
    return <h2>Loading users...</h2>;
}

if (error) {
    return <h2>{error}</h2>;
}

if (users.length === 0) {
    return <h2>No users found</h2>;
}

return (
    <div>
        <h1>Users List</h1>

        {users.map((user) => (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.username}</p>
            </div>
        ))}
    </div>
);

}

export default App;