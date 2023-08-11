export const Orders = () => {

    return (
        <div className="flex justify-center m-2 border-black border-2 rounded-2xl shadow-xl shadow-black">

              <div className="m-2 mr-96 px-0.5  border-black border-2  rounded-3xl h-fit ">
                <input type="text" placeholder="Enter Order ID" className="ml-1 pl-2 h-7  outline-none"/>
                <button className="my-0.5 p-2 px-6  text-white cursor-pointer bg-gray-800 rounded-3xl border-2 hover:bg-gray-700  hover:border-black ">Search</button>
              </div>

              <div className="w-fit h-fit m-3 ml-96 p-2 px-6 text-white bg-gray-800 rounded-3xl border-2 hover:bg-gray-700 hover:border-black">
                <button>Create Order</button>
              </div>


        </div>
    )
}