'use client'

import Planet from '@/components/planet/planet_moon'
import { useEffect } from 'react';
import './style.scss'
import { useRouter } from 'next/navigation';

export default function Night() {
  const router = useRouter()

  useEffect(() => {
    document.body.style.backgroundColor = '#0A0A0A';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className='night_cont'>
      <Planet />
      <div className="text_nigh">
        <h1>Засыпая <span>ночью</span></h1>
        <div className="messages_nigh">
          <p>Я думаю о <span>тебе</span></p>
          <p><span>Ты</span> даёшь мне уверенность что завтра будет </p>
          <p><span>хороший</span> день и мне стоит просыпаться</p>
        </div>
      </div>
      <button className='next_btn_night' onClick={()=>router.push('/password')}>дальше</button>
    </div>
  );
}