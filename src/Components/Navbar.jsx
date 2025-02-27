import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" max-w-[1600px] mx-auto py-5 flex justify-between item-center">
            <div className="navLeft">
                <div className="title">
                    <Link to='/' className="text-5xl font-bold">Emon Rozario <span className="text-[16px] font-normal capitalize ">photographer</span></Link>
                </div>
            </div>
            <div className="navRight mr-5 pt-3">
                <div className="menu">
                    <ul className="flex gap-10 text-[18px] font-semibold ">
                        <Link to='/wedding' className="px-3 hover:bg-slate-500 rounded p-1 transition duration-300">Wedding</Link>
                        <Link to='/concert' className="px-3 hover:bg-slate-500 rounded p-1 transition duration-300 ">Concert</Link>
                        <Link to='/studio' className="px-3 hover:bg-slate-500 rounded p-1 transition duration-300 ">Studio</Link>  
                        <Link to='/documentory' className="px-3 hover:bg-slate-500 rounded p-1 transition duration-300 ">Documentory</Link>                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;