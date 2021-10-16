import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import './firebase'

const auth = getAuth()

export function useAuth() {
    const [userdata, setUser] = useState({});
    const [status, setStatus] = useState(false)

    function signIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                console.log('Logged In!')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    function logOut() {
        signOut(auth);
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            setStatus(true)
        } else {
            setStatus(false)
            console.log('Not Logged IN!')
        }
    })

    return { userdata, signIn, logOut, status }
}