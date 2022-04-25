import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCirlce } from '@fortawesome/fontawesome-svg-core'
import { fontaAwesomeIcon } from '@fortawesome/react-fontawesome'

//validating user input
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  return (
    <div>
      
    </div>
  )
}

export default Register
