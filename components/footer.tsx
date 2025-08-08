export function Footer() {
  return (
    <footer className='text-foreground py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        {/* App Store Badges */}
        <div className='flex justify-center items-center space-x-4 mb-6'>
          <div className='bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2'>
            <div className='w-6 h-6 bg-white rounded'></div>
            <div className='text-left'>
              <div className='text-xs'>Download on the</div>
              <div className='text-sm font-semibold'>App Store</div>
            </div>
          </div>
          <div className='bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2'>
            <div className='w-6 h-6 bg-green-500 rounded flex items-center justify-center'>
              <div className='w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white'></div>
            </div>
            <div className='text-left'>
              <div className='text-xs'>GET IT ON</div>
              <div className='text-sm font-semibold'>Google Play</div>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className='text-center space-y-3 text-sm'>
          <p className='text-foreground/80'>
            This site does not contain sexually explicit images as defined in 18
            U.S.C. 2256. Accordingly, neither this site nor the contents
            contained herein are covered by the record-keeping provisions of 18
            USC 2257(a)-(c).
          </p>
          <p className='text-foreground/80'>
            Disclaimer: This website contains adult material. You must be over
            18 to enter or 21 where applicable by law. All Members are over 18
            years of age.
          </p>
          <div className='flex justify-center space-x-4 text-foreground/60'>
            <span>Terms of use</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>FOSTA Compliance Policy</span>
          </div>
          <p className='text-foreground/60'>
            Copyright © 1998-2025 DashBoardHosting, LLC., and/or its affiliates.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
