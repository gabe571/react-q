import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCirlce } from '@fortawesome/fontawesome-svg-core'
import { fontaAwesomeIcon } from '@fortawesome/react-fontawesome'

//validating user input
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
    //focus on field when first loads, also on error message
    const useRef = useRef();
    const errRef = errRef();
    //user state, validate name, focus input field
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [ValidMatch,setValidMatch] = useState(false); 
    const [matchFocus, setMatchFocus] = useState(false); 

    const [ errMsg, setErrMsg] = useState('');
    const [ success, setSuccess] = useState(false);


       return (
    <div>
      
    </div>
  )
}

export default Register
