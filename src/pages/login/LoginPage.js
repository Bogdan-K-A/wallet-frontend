import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@component/loginForm';
import { isAuth } from '@redux/user/user-selector';

const LoginPage = () => {
    const isLoggedIn = useSelector(isAuth);
    const push = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            push('/');
        }
    }, [isLoggedIn, push]);

    return (
        <div>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
