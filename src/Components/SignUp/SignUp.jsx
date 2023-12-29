import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="mt-16">
        <div className="mx-auto  lg:w-[50%] md:w-[56%] sm:w-[90%] p-8 space-y-3 rounded-xl bg-[#adc1e9] text-gray-100">
 <h1 className="text-3xl font-bold text-center text-red-800">Sign Up</h1>
 <form  action="" className="space-y-6">
     
     <div className="space-y-1 text-sm">
         <label  className="block text-black">Email<span className="text-red-600 font-semibold text-md"> *</span></label>
         <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-50 text-gray-100 focus:border-violet-400" />
         
     </div>
     <div className="space-y-1 text-sm">
         <label  className="block text-black">Password <span className="text-red-600 font-semibold text-md"> *</span></label>
         <input type="password" name="password" id="password" placeholder="password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-50 text-gray-100 focus:border-violet-400" />
         
     </div>
    <div className="border-2 rounded-xl">
    <select  className="select text-black select-ghost border-2 w-full ">
  <option className="text-black" selected>Please select your type </option>
  <option className="text-black">As A Doctors</option>
  <option className="text-black">As A User</option>
</select>
    </div>

<Link to='/OtpVerification' className="block w-full p-3 text-center rounded-sm text-white bg-sky-700 text-xl ">Sign Up</Link>

     
 </form>

 
</div>
     </div>
    );
};

export default SignUp;