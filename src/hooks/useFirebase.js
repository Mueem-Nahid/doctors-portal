import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [authError, setAuthError] = useState('');

    const [admin, setAdmin] = useState(false);

    const [token, setToken] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('Registration successfull. Please go to Login page and login');
            logOut();
            //setting user name
            const newUser = {email, displayName: name};
            setUser(newUser);

            //save user to the database
            saveUser(email, name, 'POST');

            //send user name to firebase
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then( () => {

            })
            .catch( (error) => {

            });

            //history.replace('/login');
            
        })
        .catch((error) => {
            setAuthError(error.message);
            // ..
        })
        .finally( () => setIsLoading(false) );
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setIsLoading(false) );
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
            // ...
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setIsLoading(false) );
    }

    //observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken => {
                  setToken(idToken);
              })
            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
        });
        return ()=>unSubscribe;
    }, []);

    //useEffect to find if an user is admin or not
    useEffect( () => {

        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin));

    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            
        })
        .finally( () => setIsLoading(false) );
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        token,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;