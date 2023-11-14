
import React from 'react'
import style from "./index.module.scss"
export default function index() {
  return (
    <>
       <div className={style.container}>
        <div className={style.inner}>
          <div className={style.discover}>
            <span></span>
            <div className={style.text}></div>
            <div className={style.buttons}></div>
          </div>
          <div className={style.userCard}>
            <div className={style.photos}></div>
            <div className={style.info}></div>
          </div>
        </div>
       </div>
    </>
  )
}
