import React from 'react'

const BrowserMockup = ({ children, } : { children: React.ReactNode}) => {
  return (
    <div className='mockup-browser bg-base-300 border m-16'>
        <div className="mockup-browser-toolbar">
            <div className="input">
                https://oseelabs.github.io
            </div>
        </div>
        <div className="bg-base-200 flex justify-center p-4 rounded-md">
            { children }
        </div>
    </div>
  )
}

export default BrowserMockup