'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
    let isVisible = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = 1;
        follower.style.opacity = 1;
      }
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const onMouseLeaveWindow = () => {
      isVisible = false;
      cursor.style.opacity = 0;
      follower.style.opacity = 0;
    };

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.15;
      followerY += (mouseY - followerY - 18) * 0.15;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.classList.add('hovered');
      follower.classList.add('hovered');
    };
    const onLeave = () => {
      cursor.classList.remove('hovered');
      follower.classList.remove('hovered');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    
    // Add hover listeners to links and buttons
    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover], input, textarea').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    
    addListeners();
    animate();

    // Re-bind listeners when content changes
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} style={{ opacity: 0, transition: 'opacity 0.3s, transform 0.1s ease' }} />
      <div className="cursor-follower" ref={followerRef} style={{ opacity: 0, transition: 'opacity 0.3s, transform 0.15s ease, width 0.3s, height 0.3s, border-color 0.3s' }} />
    </>
  );
}
