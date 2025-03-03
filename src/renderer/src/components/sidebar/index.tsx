import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { ArrowBendDoubleUpLeft} from 'phosphor-react'   

export function Sidebar(){
    const isSidebarOpen = false
    const isMac = process.platform === 'darwin' 

    return (
        <Collapsible.CollapsibleContent
            className='bg-gray-950 flex-shrink-0 border-r border-slate-600 h-screen relative group overflow-hidden'
            >
            <Collapsible.Trigger
                className={
                    clsx(
                        'absolute h-7 w-7 right-4 z-[99] text-slate-200 inline-flex items-center justify-center',
                        {
                            'top-[1.125rem]': !isMac,
                        }
                    )
                }
                >
            <ArrowBendDoubleUpLeft className='w-7 h-7'/>
            </Collapsible.Trigger>
            <div
                className={
                    clsx(
                        'flex-1 flex flex-col h-full gap-8 w-[220px] transition-opacity duration-200',
                        {
                            'pt-6' : !isMac
                        }
                    )
                }
                >
                <nav className='flex flex-col gap-3'> 
                    <button className='text-white'>HOME</button>
                </nav> 
            </div>
        </Collapsible.CollapsibleContent>
   
    )
}
