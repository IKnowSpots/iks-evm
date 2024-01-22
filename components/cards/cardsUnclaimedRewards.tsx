import React from 'react'

export default function cardsUnclaimedRewards() {
  return (
    <div>
        <div className="w-full mb-12">
            <div className="flex flex-col gap-4 py-4 justify-center items-center w-full">
                <div className="flex justify-center items-center w-full">
                    <div className='absolute z-[5]'>
                        <button className="bg-white font-bold text-black px-4 py-2 rounded-full hover:text-white hover:bg-black mx-auto">Claim Now!</button>
                    </div>
                    <div className="relative flex flex-col gap-2 w-[90%] pl-5 pt-5 pr-4 claimed-bg rounded-lg">
                        <img src="/claimrewards.svg" className="w-full rounded-lg" alt="" />
                        <div className="flex justify-between px-2 pb-4 items-center font-semibold">
                            <p>Reward Name</p>
                            {/* <p>Text</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
