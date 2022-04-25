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

    //set focus on intial page load -> username
    useEffect(() => {
        userRef.current.focus():
    }, [])

    //validating username
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    //validating password
    useEffect(() => {
       const result = PWD_REGEX.test(pwd);
       console.log(result);
       console.log(pwd);
       setValidPwd(result);
       const match = pwd === matchPwd;
       setValidMatch(match);
    }, [pwd, matchPwd])

    //error message
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

       return (
    <div>
      
    </div>
  )
}

export default Register
