
import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

import "./style.css";

const products = [
    { id: 1, name: "Samsung Galaxy", category: "Electronics", price: 500, icon: "📱" },
    { id: 2, name: "Nike Shoes", category: "Clothing", price: 120, icon: "👟" },
    { id: 3, name: "Clean Code", category: "Books", price: 40, icon: "📚" },
    { id: 4, name: "MacBook Pro", category: "Electronics", price: 1500, icon: "💻" },
    { id: 5, name: "Adidas Shirt", category: "Clothing", price: 60, icon: "👕" },
    { id: 6, name: "Atomic Habits", category: "Books", price: 25, icon: "📖" },
    { id: 7, name: "Headphones", category: "Electronics", price: 150, icon: "🎧" },
    { id: 8, name: "Jeans", category: "Clothing", price: 80, icon: "👖" }
];

function ProductList() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        const matchesPrice =
            maxPrice === "" || product.price <= Number(maxPrice);

        return matchesSearch && matchesCategory && matchesPrice;
    });

    return (
        <main className="container">
            <header className="header">
                <Link to="/" className="logo">Shop<span>Zone.</span></Link>
                <p>Your favorite products, all in one place.</p>
            </header>

            <section className="hero">
                <p className="eyebrow">DISCOVER OUR COLLECTION</p>
                <h1>Find something <span>you love.</span></h1>
                <p>Explore our collection and find the perfect product for you.</p>
            </section>

            <section className="filter-section">
                <div className="search-box">
                    <span>🔍</span>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                </select>

                <input
                    className="price-input"
                    type="number"
                    min="0"
                    placeholder="Max price ($)"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </section>

            <section className="products-section">
                <div className="section-heading">
                    <h2>Our Products</h2>
                    <span>{filteredProducts.length} products found</span>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="empty-state">
                        <span>🔎</span>
                        <h2>No products found</h2>
                        <p>Try changing your search or filters.</p>
                    </div>
                ) : (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <article className="product-card" key={product.id}>
                                <div className="product-image">
                                    <span>{product.icon}</span>
                                </div>

                                <div className="product-info">
                                    <span className="category">
                                        {product.category}
                                    </span>

                                    <h3>{product.name}</h3>

                                    <div className="product-bottom">
                                        <strong>${product.price}</strong>
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="view-button"
                                        >
                                            View →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <footer>
                <p>© 2026 ShopZone. Built with React.</p>
            </footer>
        </main>
    );
}

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <main className="container details-page">
                <h1>Product not found</h1>
                <Link to="/" className="back-button">← Back to products</Link>
            </main>
        );
    }

    return (
        <main className="container details-page">
            <Link to="/" className="back-button">← Back to products</Link>

            <article className="details-card">
                <div className="details-image">{product.icon}</div>

                <div className="details-info">
                    <span className="category">{product.category}</span>
                    <h1>{product.name}</h1>
                    <p>Discover this product from our exclusive collection.</p>
                    <strong className="details-price">${product.price}</strong>

                    <Link to="/" className="view-button">
                        Continue Shopping
                    </Link>
                </div>
            </article>
        </main>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
