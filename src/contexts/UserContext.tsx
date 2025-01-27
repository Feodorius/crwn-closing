import { User } from "firebase/auth";
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "utils/firebase/firebase.utils";

interface UserContextProps {
    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction<User>>
}

export const UserContext: React.Context<UserContextProps> = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    const value = useMemo(() => ({
        currentUser, setCurrentUser
    }), [currentUser, setCurrentUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>);
};