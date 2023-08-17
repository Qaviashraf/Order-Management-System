export const Customers = () => {

    return (
        <div className="flex m-2 border-black border-2 rounded-2xl w-4/5 shadow-xl shadow-black">

            <div className="m-2  px-0.5  border-black border-2  rounded-3xl h-fit ">
                <input type="text" placeholder="Enter Customer name" className="ml-1 pl-2 h-7  outline-none" />
                <button className="my-0.5 p-2 px-6  text-white cursor-pointer bg-gray-800 rounded-3xl border-2 hover:bg-gray-700  hover:border-black ">Search</button>
            </div>

        </div>
    )
}