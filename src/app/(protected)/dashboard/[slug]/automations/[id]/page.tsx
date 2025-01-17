import PostNode from '@/components/global/automations/post/node'
import ThenNode from '@/components/global/automations/then/node'
import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { Warning } from '@/icons'
import React from 'react'

type Props = {
  params: { id: string }
}

const Page = async ({ params }: Props) => {
  const { id } = params; // Ensure `params` is resolved before usage

  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={id} />
      </div>
      <ThenNode id={id} />
      <PostNode id={id} />
    </div>
  )
}

export default Page;
