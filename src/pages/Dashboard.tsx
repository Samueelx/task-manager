import Header from "../components/Header";

function Dashboard() {
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
                        <tr>
                            <td>Task Title</td>
                            <td>Description</td>
                            <td>Due Date</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>Task Title</td>
                            <td>Description</td>
                            <td>Due Date</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>Task Title</td>
                            <td>Description</td>
                            <td>Due Date</td>
                            <td>Status</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;