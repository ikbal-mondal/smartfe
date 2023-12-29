import { Link } from "react-router-dom";


const OtpVerification = () => {
    return (
        <div className="mt-16">
        <div className="mx-auto  lg:w-[40%] md:w-[50%] sm:w-[90%] p-8 space-y-3 rounded-xl bg-[#adc1e9] text-gray-100">
 <h1 className="text-3xl font-bold text-center text-green-800">Email Verification</h1>
 <p className="text-center text-black">Please Check Your Email And Enter Your Verification Code </p>
 <form  action="" className="space-y-6">
     
     <div className="space-y-1 text-sm">
         <label  className="block text-xl text-black">OTP<span className="text-red-600 font-semibold text-md"></span></label>
         <input type="otp" name="otp" id="otp" placeholder="Enter OTP" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-50 text-gray-100 focus:border-violet-400" />
         
     </div>
<Link to='/' className="block w-full p-3 text-center rounded-sm text-white bg-sky-700 text-xl ">Sign Up</Link>
 </form>
</div>
     </div>
    );
};

export default OtpVerification;