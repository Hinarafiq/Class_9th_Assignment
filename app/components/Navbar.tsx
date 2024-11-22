export default function Navbar(){
    return(
        <div className="bg-white p-4 flex justify-around mt-3 pb-2 w-3/4 ml-32 h-16">
            <div className="flex justify-start bg-orange-500 border rounded-md w-16 h-9 font-bold pt-2">
              <h1 className="text-white pl-2">TEMU</h1>
            
                <h1 className="text-black hover:text-gray-800 pl-6">Categories</h1>
            </div>
             
            <div className="flex justify-end hover:text-gray-900 items-end pl-44 gap-4">
                <h1 className="font-thin">Sign In / Register</h1>
                <h1 className="font-semibold">Orders & Account</h1>
                <h1 className="font-semibold ">Support</h1>
            </div> 
            <hr />
        </div>
    )
}