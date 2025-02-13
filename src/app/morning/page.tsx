'use client'

import Planet from '@/components/planet/planet'
import { useEffect } from 'react';
import './style.scss'
import { useRouter } from 'next/navigation';

export default function Morning() {
  const router = useRouter()

  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className='morning_cont'>
      <Planet />
      <div className="text">
        <h1>Просыпаясь <span>утром</span></h1>
        <div className="messages">
          <p>Я рад видеть сообщение от <span>тебя</span></p>
          <p>Ты освещаешь и делаешь мой день <span>ярче</span></p>
        </div>
      </div>
      <button className='next_btn' onClick={()=>router.push('/night')}>дальше</button>
    </div>
  );
}