import {createContext, useState} from "react";

const NotificationsContext = createContext<{

} | null>(null);

export default function NotificationProvider() {
    const [close, onClose] = useState<boolean>();

    return (
       <NotificationsContext.Provider value={{close, onClose}}>

       </NotificationsContext.Provider>
    );
}