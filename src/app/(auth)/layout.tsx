import React from 'react'

function Rootlayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Rootlayout
