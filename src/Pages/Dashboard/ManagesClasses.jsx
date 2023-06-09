
const ManagesClasses = () => {
    return (
       <div className="grid grid-cols-2 grid-flow-col gap-3">
         <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"></textarea>
                </div>
                <div className="card-actions">
                    <button className="btn btn-success btn-sm "> Approve</button>
                    <button className="btn btn-error btn-sm ">Deny</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ManagesClasses;