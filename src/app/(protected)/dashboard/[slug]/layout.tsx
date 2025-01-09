import React from 'react'
import Sidebar from '@/components/global/sidebar'
import Infobar from "@/components/global/infobar"

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
    <div    className="
      lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      ">
   <Infobar slug={params.slug} />
   {children}
    </div>
    </div>
  )
}

export default layout
