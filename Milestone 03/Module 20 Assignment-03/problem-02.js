// ✅কী কী চেক করা হচ্ছে

// ইনপুট string না হলে → "Invalid"

// OTP এর length ঠিক ৮ হতে হবে

// OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে

// সব শর্ত ঠিক হলে true, নাহলে false




/*function signature/sample */
function validOtp(otp) {
          // You have to write your code here
    if(typeof otp !== "string"){
        return "Invalid";
    }

    if(otp.length === 8 && otp.startsWith("ph-")){
        return true
    }
    return false;
}
validOtp("ph-10985");

