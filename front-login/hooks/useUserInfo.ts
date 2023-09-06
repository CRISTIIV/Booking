import { useState } from "react";

export const useUserInfo = () => {
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [active, setActive] = useState(true);

    const handleInfo = () => {return{name,email,password}}
    const setNameInfo = (name_param?:string) => setName(name_param?name_param:name);
    const setEmailInfo = (email_param?:string) => setEmail(email_param?email_param:email);
    const setPasswordInfo = (password_param?:string) => setPassword(password_param?password_param:password);
    const setCityInfo = (city_param?:string) => setCity(city_param?city_param:city);
    const setActiveInfo = (active_param?:boolean) => setActive(active_param?active_param:active);
    const setLastNameInfo = (last_name_param?:string) => setLastName(last_name_param?last_name_param:last_name);
    return{email,
        city,
        last_name,
        name,
        password,
        active,
        setCityInfo,
        setLastNameInfo,
        handleInfo,
        setNameInfo,
        setEmailInfo,
        setPasswordInfo,
        setActiveInfo}
}