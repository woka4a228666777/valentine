'use client'

import React, {useEffect} from 'react'
import Image from 'next/image'
import Heart from '@/assets/heart_mini.svg'
import './style.scss'

function Mail() {
  useEffect(()=>{
    document.body.style.backgroundColor = '#FFFFFF'
  })

  return (
    <div className='mail'>
      <h1>Полина,</h1>
      <div className='content'>
        <p>Ты — самое яркое и тёплое, что появлялось в моей жизни за последние года. Каждую секунду, проведённую рядом с тобой я вспоминаю каждый день и мне становится очень хорошо.</p>
        
        <p>Мне нравится твоя супер милая улыбка и ямочки которые появляются при ней. <br />
        Мне нравятся твои глубокие глаза. <br />
        Мне нравится как ты иногда стесняешься когда смотришь на меня. <br />
        Мне нравится как ты всегда вкусно пахнешь и твои длинные мягкие волосы.</p>

        <p>      Твоя доброта и забота — это то, что делает меня лучше, вдохновляет и поддерживает.
        Я благодарен судьбе за то, что ты появилась в моей жизни. Ты — не просто человек с которым я бы хотел проводить как можно больше времени, ты — мой друг и мотиватор.</p>

        <p>Спасибо что делаешь меня счастливым!!! Хоть мы и знакомы чуть меньше двух месяцев, но мне уже невероятно весело и радостно рядом с тобой.</p>
        <p>С днём святого Валентина <Image src={Heart} alt='heart' width={24} height={22}></Image></p>
      </div>
      <h2>Даня</h2>
    </div>
  )
}

export default Mail