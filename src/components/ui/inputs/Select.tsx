"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export const Select: React.FC<SelectProps> = ({ label, options, value, onChange, error, className = "" }) => {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <motion.select
          whileFocus={{ scale: 1.02 }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 outline-none appearance-none
            bg-white cursor-pointer
            ${error ? "border-red-500" : ""}
            ${className}
          `}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </motion.select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {error && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-600">
          {error}
        </motion.p>
      )}
    </div>
  )
}
