
import moment from 'moment';
import React, { useRef, useState } from 'react'
import styles from 'styles/ComponentCSS/HeaderCalendar.module.css'
import { FcCalendar } from "react-icons/fc";
import { useRouter } from 'next/router';
function HeaderCalendar() {
  const router = useRouter();
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const inputDateRef = useRef(null)
  const handlePreviousMonth = () => {
    const day = moment(date, "DD-MM-YYYY").subtract(30, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handlePreviousWeek = () => {
    const day = moment(date, "DD-MM-YYYY").subtract(7, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handlePreviousDate = () => {
    const day = moment(date, "DD-MM-YYYY").subtract(1, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handleNextDate = () => {
    const day = moment(date, "DD-MM-YYYY").add(1, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handleNextWeek = () => {
    const day = moment(date, "DD-MM-YYYY").add(7, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handleNextMonth = () => {
    const day = moment(date, "DD-MM-YYYY").add(30, "days").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  const handleChangeDate = (date) => {
    const day = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");
    setDate(day);
    router.push(`/?date=${day}`)
  }
  return (
    <ul className={styles['header-calendar']}>
        <li onClick={handlePreviousMonth}>{`<<<`}</li>
        <li onClick={handlePreviousWeek}>{`<<`}</li>
        <li onClick={handlePreviousDate}>{`<`}</li>
        <li onClick={() => inputDateRef.current?.showPicker()}>
            {date}
            <FcCalendar />
            <input
                ref={inputDateRef}
                type="date"
                value={date}
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
                onChange={(e) =>
                  handleChangeDate(e.target.value)
                }
            />
        </li>
        <li onClick={handleNextDate}>{'>'}</li>
        <li onClick={handleNextWeek}>{'>>'}</li>
        <li onClick={handleNextMonth}>{'>>>'}</li>
    </ul>
  )
}

export default HeaderCalendar