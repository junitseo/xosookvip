import React from 'react'
import BlockResultSX from 'components/BlockResultSX'
import SideBarRight from 'components/SideBarRight'
function Page() {
  return (
    <div style={{display: 'flex', gap: 10}}>
      <SideBarRight />
      <div style={{flex: 1}}>
        <BlockResultSX />
      </div>
    </div>
  )
}

export default Page
