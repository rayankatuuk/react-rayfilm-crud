import { useState } from 'react';

const PasswordInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3 sm:mb-4">
      <label className="block mb-1 text-sm" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input 
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-8 sm:pr-10 text-white ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400 cursor-pointer"
        >
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.8585 8L12.5002 10.6333C12.5002 10.5917 12.5002 10.5417 12.5002 10.5C12.5002 9.83696 12.2368 9.20107 11.7679 8.73223C11.2991 8.26339 10.6632 8 10.0002 8C9.95016 8 9.9085 8 9.8585 8ZM6.27516 8.66667L7.56683 9.95833C7.52516 10.1333 7.50016 10.3083 7.50016 10.5C7.50016 11.163 7.76356 11.7989 8.2324 12.2678C8.70124 12.7366 9.33712 13 10.0002 13C10.1835 13 10.3668 12.975 10.5418 12.9333L11.8335 14.225C11.2752 14.5 10.6585 14.6667 10.0002 14.6667C8.89509 14.6667 7.83529 14.2277 7.05388 13.4463C6.27248 12.6649 5.8335 11.6051 5.8335 10.5C5.8335 9.84167 6.00016 9.225 6.27516 8.66667ZM1.66683 4.05833L3.56683 5.95833L3.94183 6.33333C2.56683 7.41667 1.4835 8.83333 0.833496 10.5C2.27516 14.1583 5.8335 16.75 10.0002 16.75C11.2918 16.75 12.5252 16.5 13.6502 16.05L14.0085 16.4L16.4418 18.8333L17.5002 17.775L2.72516 3M10.0002 6.33333C11.1052 6.33333 12.165 6.77232 12.9464 7.55372C13.7278 8.33512 14.1668 9.39493 14.1668 10.5C14.1668 11.0333 14.0585 11.55 13.8668 12.0167L16.3085 14.4583C17.5585 13.4167 18.5585 12.05 19.1668 10.5C17.7252 6.84167 14.1668 4.25 10.0002 4.25C8.8335 4.25 7.71683 4.45833 6.66683 4.83333L8.47516 6.625C8.95016 6.44167 9.4585 6.33333 10.0002 6.33333Z" fill="#9D9EA1"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput; 