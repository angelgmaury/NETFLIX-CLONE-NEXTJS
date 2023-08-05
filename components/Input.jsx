import React from "react";

const Input = React.forwardRef(function Input(
  { type, label, value, onChange, error, ...rest },
  ref
) {
  return (
    <div className="relative">
      <input
        ref={ref}
        className={`
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          ${error ? "border-red-500" : ""}
        `}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        id={label}
        autoComplete="off"
        {...rest}
      />
      <label
        htmlFor={label}
        className={`
          absolute
          text-md
          text-zinc-200
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        `}
      >
        {label}
      </label>
      {error && (
        <p
          className={`text-red-500 mt-2 transition-opacity ${
            error ? "opacity-100" : "opacity-0"
          } transform ${
            error ? "translate-y-0" : "-translate-y-3"
          } duration-300`}
        >
          {error.message}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input-Register";

export default Input;
