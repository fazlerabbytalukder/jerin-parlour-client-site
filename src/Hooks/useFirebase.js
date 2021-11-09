import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initilizeFirebase from "../pages/Login/Firebase/firebase.init";

initilizeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');  
    const auth = getAuth();

    //admin or non admin related work
    const [admin, setAdmin] = useState(false);

    //sign in with google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                //save user info to the database
                saveUser(user.email, user.displayName, 'PUT');
                //
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //new user register
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //user login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])



    //logout system
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //user information save to the database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://warm-caverns-33729.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }

    //admin or non admin related work
    useEffect(() => {
        fetch(`https://warm-caverns-33729.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    },[user.email])
    


    //return method all
    return {
        user,
        admin,
        isLoading,
        authError,
        loginUser,
        registerUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;