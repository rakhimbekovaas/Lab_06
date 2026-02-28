import { Link, Outlet } from "react-router-dom"
// Task_3
function Layout() {
    return (
        <>
            <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc"}}>
                <Link to = "/">Home</Link>
                <Link to = "/courses">Courses</Link>
                <Link to = "/about">About</Link>
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