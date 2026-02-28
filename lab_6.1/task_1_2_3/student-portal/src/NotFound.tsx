import { Link } from "react-router-dom"
// Task_3
function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound;