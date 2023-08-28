import React from 'react'
import cls from "./CountryItem.module.css"

const CountryItem = ({country}) => {
  return (
    <li className={cls.countryItem}>
    <span>{country.emoji}</span>
    <span>{country.country}</span>
  </li>
  )
}

export default CountryItem