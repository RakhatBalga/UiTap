import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className = '', type = 'button', ...props }: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50'
  return (
    <button type={type} className={`${base} ${className}`.trim()} {...props} />
  )
}
