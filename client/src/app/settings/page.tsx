import Header from '@/components/Header'
import React from 'react'

const SettingsPage = () => {
  const userSettings = {
    username: "johndoe",
    email: "john@email.com",
    teamName: "Developers",
    roleName: "developer"
  }

  const labelStyles = `block text-sm font-medium dark:text-white`
  const textStyles = `mt-1 p-2 w-full border-md border-gray-300 shadow-sm block dark:text-white`

  return (
    <div className='p-8'>
      <Header name='Settings' />
      <div className='space-y-4'>
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{userSettings.username}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage