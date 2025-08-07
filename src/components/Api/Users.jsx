import { useState, useEffect } from "react";
import "./Api.css";
import axios from "axios";

// API endpoint
const API_URL = "https://6890bd39944bf437b597267e.mockapi.io/users";

// Empty form data template
const EMPTY_FORM = { name: "", email: "", address: "", phone: "" };

const UserTable = () => {
    const [users, setUsers] = useState([]);         // Store list of users
    const [formData, setFormData] = useState(EMPTY_FORM); // Store form input values
    const [loading, setLoading] = useState(true);   // Loading state for table
    const [submitting, setSubmitting] = useState(false); // Loading state for form
    const [editId, setEditId] = useState(null);     // Edit if not null

    // Fetch users from API when component loads
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(API_URL);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchUsers();
    }, []);

    // Reset form to empty
    const resetForm = () => {
        setFormData(EMPTY_FORM);
        setEditId(null);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submit (Create or Update)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit set to true for loading purpose
        setSubmitting(true);

        if (editId) {
            // UPDATE existing user
            axios
                .put(`${API_URL}/${editId}`, formData)
                .then((res) => {
                    setUsers((prev) =>
                        prev.map((u) => (u.id === editId ? res.data : u))
                    );
                    resetForm();
                })
                .catch((err) => console.error("Error updating user:", err))
                .finally(() => setSubmitting(false));
        } else {
            // CREATE new user
            axios
                .post(API_URL, formData)
                .then((res) => {
                    setUsers((prev) => [res.data, ...prev]);
                    resetForm();
                })
                .catch((err) => console.error("Error creating user:", err))
                .finally(() => setSubmitting(false));
        }
    };

    // When clicking "Edit", fill form with that user's data
    const handleEditClick = (user) => {
        setEditId(user.id);
        setFormData({
            name: user.name || "",
            email: user.email || "",
            address: user.address || "",
            phone: user.phone || "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="table-container">
            <h2>User Table (From API)</h2>

            {/* Create or Edit Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "center" }}>
                    <button type="submit" disabled={submitting}>
                        {submitting
                            ? editId
                                ? "Saving..."
                                : "Creating..."
                            : editId
                                ? "Save Changes"
                                : "Create"}
                    </button>
                    {editId && (
                        <button type="button" onClick={resetForm}>
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>

            {/* Users Table */}
            <table className="user-table">
                <thead>
                    <tr>
                        <th style={{ width: 80 }}>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th style={{ width: 90 }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Loading users...</td>
                        </tr>
                    ) : users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id} className="user-row">
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        style={{ backgroundColor: "blue" }}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
