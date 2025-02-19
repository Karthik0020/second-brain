import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { TextIcon } from '../icons/TextIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const content = useContent()
  return (
    <div>
      <div>
      <SideBar/>
      </div>
    <div className='p-4 bg-slate-200 h-screen ml-72' >
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)
      }} />
      <div className='flex justify-end gap-4'>
        <Button onClick={() => {
          setModalOpen(true)
        }} varient='primary' text='Add content' startIcon={<PlusIcon/>} > </Button>  
        <Button varient='secondary' text='Add content' startIcon={<ShareIcon/>}> </Button>     
      </div>  
      <div className='flex gap-4'>
        {
          content.map(({type,link,title}) =><Card typeIcon={<TextIcon/>}
           title={title}
            type={type}
             link={link}> 
          </Card>

        )}
      </div>
    </div>
    </div>

  )
}
