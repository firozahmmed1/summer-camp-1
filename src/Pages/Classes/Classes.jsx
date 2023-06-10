import Container from "../../Components/Container/Container";

const Classes = () => {
  const isactive =false
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-2 mb-40 gap-5">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/YZv93S9/339266532-527372782919415-6578240290515521451-n.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Instructor name</p>
                    <p>Available seats:</p>
                    <p>Price:</p>
                    <div className="card">
                        {isactive ?<button className="btn btn-accent normal-case">Select</button>:
                        <button disabled type="button" className="px-8 py-3 text-white bg-red-200 rounded focus:outline-none">Select</button>}
                    </div>
                </div>
            </div>
            </div>
        </Container>

    );
};

export default Classes;