
const AddaClass = () => {
    return (
        <div className="w-full ">
            <div className="form-control grid grid-cols-2 gap-3 w-full">
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Class Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Class Image</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-warning w-full" />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Instructor Email</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Available Seats</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Price</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="flex items-center justify-center">
            <input type="submit" value="Add" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-10 btn-outline btn-accent" />
            </div>
        </div>
    );
};

export default AddaClass;