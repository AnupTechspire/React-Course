const Condition = () => {
    const user = "Admin"

    if (user === 'Admin') {
        return <AdminPage />
    } else {
        return <UserPage />
    }
}

const AdminPage = () => {
    return <div>This is admin page!</div>
}

const UserPage = () => {
    return <div>This is user page!</div>
}

export default Condition