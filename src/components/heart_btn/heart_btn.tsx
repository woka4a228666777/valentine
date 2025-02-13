'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Heart from '@/assets/heart.svg';
import Heart_hovered from '@/assets/heart_hovered.svg';
import {useRouter} from 'next/navigation';
import './style.scss';

export default function HeartBtn() {
  const [isLiked, setIsLiked] = useState(true);
  const [isVisible, setIsVisible] = useState(1);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter()

  const handleClick = () => {
    if (isClicked) return;

    setIsClicked(true);
    setIsLiked(false);
    setIsVisible(1);
    setIsAnimating(true);

    setTimeout(() => {
      setIsVisible(0);
      setTimeout(() => {
        setIsDisplayed(false);
      }, 900);
    }, 300);

    setTimeout(() => {
      setIsLiked(true);
    }, 1000);

    setTimeout(() => {
      document.body.style.backgroundColor = isLiked ? '#FFFFFF' : '#0a0a0a';
    }, 2500);

    setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    setTimeout(() => {
      router.push('/morning');
    }, 2200);
  };

  return (
    isDisplayed && (
      <div className='valentine_btn'>
        <button
          className={`heart_btn ${isAnimating ? 'active_heart_btn' : ''}`}
          onClick={handleClick}
          aria-label="Like"
          style={{ opacity: isVisible }}
          disabled={isClicked}
        >
          <div className="image-container">
            <Image
              className={`heart_btn_img ${!isLiked ? 'active' : ''}`}
              src={Heart}
              alt="heart"
            />
            <Image
              className={`heart_btn_img ${isLiked ? 'active' : ''}`}
              src={Heart_hovered}
              alt="heart hovered"
            />
          </div>
        </button>
      </div>
    )
  );
}