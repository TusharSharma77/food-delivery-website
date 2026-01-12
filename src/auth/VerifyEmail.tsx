import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const HandleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-6">
        
        <div className="text-center">
          <h1 className="font-extrabold text-lg sm:text-xl">
            Verify Email
          </h1>
          <p className="text-sm text-gray-600">
            Enter the verification code sent to your email.
          </p>
        </div>

        <form>
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((letter: string, index: number) => (
              <input
                key={index}
                ref={(element) => (inputRef.current[index] = element)}
                maxLength={1}
                type="text"
                value={letter}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => HandleKeyDown(index, e)}
                className="
                  w-9 h-9 sm:w-12 sm:h-12 
                  text-center text-sm sm:text-xl 
                  font-medium sm:font-bold 
                  border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 !bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Verify OTP
          </button>
        </form>

      </div>
    </div>
  )
}

export default VerifyEmail
