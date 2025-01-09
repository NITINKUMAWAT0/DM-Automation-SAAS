'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
  strategy: 'INSTAGRAM' | 'CRM'
  isConnected: boolean
}

const IntegrationCard = ({ description, icon, strategy, title, isConnected }: Props) => {
  const onInstaOAuth = () => {
    // Assuming onOAuthInstagram is handled elsewhere as a static action
    console.log(`OAuth for ${strategy} initiated.`)
  }

  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center justify-between">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl"> {title}</h3>
        <p className="text-[#9D9D9D] text-base ">{description}</p>
      </div>
      <Button
        onClick={onInstaOAuth}
        disabled={isConnected}
        className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
      >
        {isConnected ? 'Connected' : 'Connect'}
      </Button>
    </div>
  )
}

export default IntegrationCard
