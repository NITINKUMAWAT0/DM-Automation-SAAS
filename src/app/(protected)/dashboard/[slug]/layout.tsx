import React from 'react'

type Props = {
    children:React.ReactNode
    params:{slug:string}
}

const layout = ({children, params}: Props) => {

    //Query

  return (
    <div className='p-3'>{children}</div>
  )
}

export default layout
