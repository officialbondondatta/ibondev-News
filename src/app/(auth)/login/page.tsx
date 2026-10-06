"use client"
import React from "react";

const LoginPage = () => {
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <main>
            <section>
                <header>
                    <h2>Welcome Back, Login Now !</h2>
                </header>
                <main>
                    <form action="" onSubmit={handleLoginSubmit}>

                    </form>
                </main>
            </section>
        </main>
    );
};

export default LoginPage;