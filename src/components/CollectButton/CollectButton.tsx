import React from 'react'

const Button = ( props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> ) => {
  const { children,className,disabled } = props
  return (
    <button type="button" {...props} className={"btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray ".concat(disabled?"cursor-not-allowed opacity-50 ":"").concat(className)}>
      {children}
    </button>
  )
}

export default Button