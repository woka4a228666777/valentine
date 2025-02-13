'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './style.scss';
import Image from "next/image";
import Lock from "@/assets/lock.svg";
import LockUp from "@/assets/lockUp.svg";

function Page() {
    const [inputPassword, setInputPassword] = useState('');
    const [isCorrectPas, setCorrectPas] = useState(false);
    const router = useRouter();
    const correctPassword = '228666';

    useEffect(() => {
      document.body.style.backgroundColor = '#FFFFFF';

      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (inputPassword === correctPassword) {
            setCorrectPas(()=> !isCorrectPas)
            setTimeout(()=>{
                router.push('/mail');
            }, 900)
        } else {
            alert('не угадала! но ты его точно знаешь, он связан со мной :)  (подсказка: он шестизначный), напиши потом со скольки попыток угадала');
        }
    };

    return (
        <div className='password'>
            <div className="lock">
                <Image className='lockImg' src={Lock} alt='lock' />
                <Image className={(isCorrectPas) ? 'lockUpImg unlock': 'lockUpImg'} src={LockUp} alt='lockUp' />
            </div>
            <form onSubmit={handleSubmit}>
                <p>Чтобы посмотреть письмо валентинки введите пароль</p>
                <input
                    type="text"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    required
                />
                <button type="submit">открыть</button>
            </form>
        </div>
    );
}

export default Page;