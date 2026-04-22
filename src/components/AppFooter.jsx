import React from 'react'

export default function AppFooter() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between p-6 sm:p-10 gap-6 sm:gap-10 border-t border-white/10'>
        <div className="flex items-center gap-6">
            <a href="https://x.com/SpaceX">
                <img src="https://cdn.vectorstock.com/i/500p/89/00/x-logo-icon-vector-51648900.jpg" alt="X logo" className='w-8 h-8 rounded-full'/>
            </a>
            <p className='text-white/50 text-xs'>© 2026 SpaceX</p>
        </div>
        <ul className='flex flex-wrap justify-center gap-6 text-[10px] tracking-widest text-white/70 uppercase'>
          <a href="https://www.spacex.com/careers/" className="hover:text-white transition-colors"><li>Careers</li></a>
          <a href="https://www.spacex.com/updates/" className="hover:text-white transition-colors"><li>Updates</li></a>
          <a href="https://www.spacex.com/privacy-policy/" className="hover:text-white transition-colors"><li>Privacy Policy</li></a>
          <a href="https://www.spacex.com/supplies/" className="hover:text-white transition-colors"><li>Supplies</li></a>
        </ul>
    </div>
  )
}