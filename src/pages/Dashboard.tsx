import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";  

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/tasks")
        .then((response) => response.json())
        .then(data => {
            setTasks(data.data)
            console.log(data)
        });
    }, []);
    return (
        <div>
            <Header />
            {/**The Table */}
            <div className="my-4">
                <table className="table-auto min-w-full p-4 m-6">
                    <thead>
                        <tr>
                            <th className="text-start">Title</th>
                            <th className="text-start">Description</th>
                            <th className="text-start">Due</th>
                            <th className="text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task: any) => {
                            return <tr key={task.id}>
                            <td>
                                <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                            </td>
                            <td>{task.description}</td>
                            <td>{task.due_date}</td>
                            <td>{task.status}</td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;