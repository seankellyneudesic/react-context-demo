import React from 'react';
import { useAuthStore } from '../Contexts/AuthContext';


function NavBar() {
    const { state } = useAuthStore();

    return (
        <div style={{ height: 50, width: '100vw', backgroundColor: '#55eeff', top: 0, position: 'fixed' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {!state.isAuthenticated && <div style={{ margin: 10 }}>I don't know you!</div>}
                {state.isAuthenticated && <div style={{ margin: 10 }}>Welcome, {state.username}</div>}
            </div>
        </div>
    );
}
export default NavBar;