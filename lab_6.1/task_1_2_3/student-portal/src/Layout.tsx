import { Link, NavLink, Outlet } from "react-router-dom"
// Task_3
function Layout() {
    return (
        <>
            <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc"}}>
                <Link to = "/">Home</Link>
                <NavLink to = "/courses" style={({ isActive}) => ({fontWeight: isActive ? "bold": "normal"})}>Courses</NavLink>
                <NavLink to = "/about" style={({ isActive}) => ({fontWeight: isActive ? "bold": "normal"})}>About</NavLink>
            </nav>
            <main style={{ padding: "2rem"}}>
                <Outlet />
            </main>
            <footer style={{ textAlign: "center", padding: "1rem", borderTop: "1px solid #ccc"}}>
                Student Portal 2026
            </footer>
        </>
    )
}

export default Layout;