
const MyClasses = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        <th>Status</th>
                        <th>Total Enrolled Students</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist lorem50</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td className="space-x-2">
                        <button className="btn normal-case btn-warning btn-xs">Pending</button>
                        <button className="btn normal-case btn-success btn-xs">Approved</button>
                        <button className="btn normal-case btn-error btn-xs">Denied</button>
                        </td>
                        <td>12/16/2020</td>
                        <td><button className="btn normal-case btn-error btn-xs">Denied</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyClasses;