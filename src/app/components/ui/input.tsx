'use client';
import React, { useId, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isrequired?: boolean;
  helperText?: string;
  error?: boolean;
}

export default function INPUT({
  label,
  isrequired,
  helperText,
  error,
  className = "",
  value,
  defaultValue,
  onChange,
  id,
  type = "text",
  ...rest
}: InputProps) {
  const inputId = id || useId();
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue as string | undefined
  );

  const hasValue = Boolean(value ?? internalValue);

  // local show/hide state for password inputs
  const [showLocal, setShowLocal] = useState(false);
  const inputRest = rest as any;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(e);
    if (value === undefined) setInternalValue(e.target.value);
  }

  return (
    <div className={`w-full p-2 text-white bg-blue-950/25 border flex  border-blue-900 rounded-md relative ${className}`}>
      <div className="relative w-full">
        <input
          id={inputId}
          type={type === "password" ? (showLocal ? "text" : "password") : type}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-transparent border border-transparent focus:outline-0 px-1 py-1 rounded text-white placeholder-transparent transition-colors duration-150`}
          placeholder={label}
          aria-invalid={error ? "true" : undefined}
          {...inputRest}
        />

        <label
          htmlFor={inputId}
          className={`absolute left-3 transition-all duration-150 pointer-events-none text-gray-300 ${isFocused || hasValue ? "-translate-y-7 text-sm text-blue-300" : "top-4 text-sm"}`}
        >
          {label}
          {isrequired && <span className="ml-1 text-red-400">*</span>}
        </label>
      </div>
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowLocal((s) => !s)}
          className="ml-3 p-1 text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-pressed={showLocal}
          aria-label={showLocal ? "Hide password" : "Show password"}
          title={showLocal ? "Hide password" : "Show password"}
        >
          {showLocal ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-5.523 0-10-4.477-10-10 0-1.072.158-2.103.45-3.063M3 3l18 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      )}
      {helperText && (
        <p className={`mt-2 text-sm ${error ? "text-red-400" : "text-gray-400"}`}>{helperText}</p>
      )}
    </div>
  );
}