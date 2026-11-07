// LESSON 01: JSX AND COMPONENTS

function Header() {
    return <h1>Student Management System</h1>;
}

function Footer() {
    return <p>Created with React</p>;
}

function App() {
    return (
        <div>
            <Header />
            <h2>Welcome to React!</h2>
            <Footer />
        </div>
    );
}

export default App;