import React from 'react';
import { IoBagHandle } from "react-icons/io5";

const DashboardStatusBox = () => {

    function BoxWrapper({children}){
        return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
    }

    return (
        <div className="flex  gap-4 w-full">
        <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pr-4">
                <span className='text-sm text-gray-500 font-light'>Total Seals</span>
                <div className="flex items-center">
                    <strong className='text-xl text-gray-700 font-semibold'>$5245</strong>
                    <span className='text-sm text-green-500 pr-2'>+ 245</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pr-4">
                <span className='text-sm text-gray-500 font-light'>Total Seals</span>
                <div className="flex items-center">
                    <strong className='text-xl text-gray-700 font-semibold'>$5245</strong>
                    <span className='text-sm text-green-500 pr-2'>+ 245</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pr-4">
                <span className='text-sm text-gray-500 font-light'>Total Seals</span>
                <div className="flex items-center">
                    <strong className='text-xl text-gray-700 font-semibold'>$5245</strong>
                    <span className='text-sm text-green-500 pr-2'>+ 245</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pr-4">
                <span className='text-sm text-gray-500 font-light'>Total Seals</span>
                <div className="flex items-center">
                    <strong className='text-xl text-gray-700 font-semibold'>$5245</strong>
                    <span className='text-sm text-green-500 pr-2'>+ 245</span>
                </div>
            </div>
        </BoxWrapper>
       </div>
    );
};

export default DashboardStatusBox;