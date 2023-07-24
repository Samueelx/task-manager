
function Header() {
    return (

        <header className="flex p-8 justify-between bg-emerald-200 z-50">
            <div className="flex-1">
                <h2 className="text-3xl font-bold">Task Train</h2>
            </div>

            <nav className="flex-1">
                <ul>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-3">Home</a>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-3">Dashboard</a>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-3">New Task</a>
                    </li>
                    <li className="float-left">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-3">Contact Us</a>
                    </li>
                </ul>
            </nav>

            <div className="flex-1">
                <ul>
                    <li className="float-right">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Login</a>
                    </li>
                    <li className="float-right">
                        <a href="#" className="text-lg hover:text-sky-700 hover:underline mx-2">Signup</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;