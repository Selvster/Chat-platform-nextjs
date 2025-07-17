
import React from 'react';

interface InputProps {
  label: string; // The label text for the input field
  id: string;    // The unique ID for the input, used for htmlFor and id attributes
  name: string;  // The name attribute for the input, used in FormData
  type: string;  // The HTML input type (e.g., "text", "email", "password")
  placeholder: string; // The placeholder text for the input field
  value: string; // The current value of the input field (controlled component)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input changes
  required?: boolean; // Optional: If the input is required (defaults to false)
  disabled?: boolean; // Optional: If the input should be disabled (defaults to false)
}


export default function Input({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false, 
  disabled = false, 
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
