"use client"
import React from "react";

const SignUpPage = () => {
    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <main className="container mx-auto">
            <section className="">
                <header>
                    <h2>Welcome To ibondev News, Sign Up Now !</h2>
                </header>
                <main>
                    <form action="" onSubmit={handleSignUpSubmit}>

                    </form>
                </main>
            </section>
        </main>
    );
};

export default SignUpPage;