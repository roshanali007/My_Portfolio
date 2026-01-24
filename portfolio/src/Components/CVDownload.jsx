import React from 'react'

function CVDownload() {
  return (
    <>
        <a
            href="/Roshan_Resume_13_01_2026.pdf"
            download
            className="inline-flex items-center justify-center
                        px-6 py-3
                        bg-white text-black
                        rounded-md
                        font-bold
                        transition-all duration-300
                        hover:bg-gray-800
                        active:scale-95
                        fixed z-50 bottom-6 right-6"
            >
            Download Resume
        </a>
    </>
  )
}

export default CVDownload