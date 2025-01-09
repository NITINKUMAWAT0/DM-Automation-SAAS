import React from 'react'
import Sidebar from '@/components/global/sidebar'

type Props = {
    children:React.ReactNode
    params:{slug:string}
}

const layout = ({children, params}: Props) => {

    //Query

  return (
    <div className='p-3'>
    {/* sidebar */}
<Sidebar slug={params.slug}/>

    {/* navbar */}
    </div>
  )
}

export default layout
