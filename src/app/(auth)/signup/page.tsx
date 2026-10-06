"use client"
import { signUp } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SignUpPage = () => {
    const router = useRouter()
    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(form)
        const userInput = Object.fromEntries(formData.entries()) as Record<string, string>
        const { data, error } = await signUp.email({
            name: userInput.name,
            image: userInput.image,
            email: userInput.email,
            password: userInput.password,
            callbackURL: "/"
        })
        if (error?.status === 401) {
            toast.warning("সঠিক তথ্য প্রদান করুন")
        }
        if (data?.user) {
            form.reset()
            router.push("/")
            toast.success("সাইন আপ সম্পন্ন হয়েছে")
        }
    };


    return (
        <main className="container mx-auto flex flex-col items-center justify-center mt-10">
            <section className="p-5">
                <header>
                    <h2 className="text-2xl text-center text-red-700 font-bold mb-5">সাইন আপ</h2>

                </header>
                <main>
                    <Form className="flex flex-col gap-4" onSubmit={handleSignUpSubmit}>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-normal">আপনার নাম</Label>
                            <Input
                                className="border placeholder:text-sm placeholder:italic border-slate-400 lg:min-w-100 min-w-80 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-none"
                                placeholder="আপনার নাম লিখুন" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="image"
                        >
                            <Label className="font-normal">আপনার ছবি </Label>
                            <Input
                                className="border placeholder:text-sm placeholder:italic border-slate-400 lg:min-w-100 min-w-80 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-none"
                                placeholder="আপনার ছবির লিংক দিন" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-normal">ইমেইল</Label>
                            <Input
                                className="border placeholder:text-sm placeholder:italic border-slate-400 lg:min-w-100 min-w-80 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-none"
                                placeholder="আপনার ইমেইল লিখুন" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-normal">পাসওয়ার্ড</Label>
                            <Input
                                className="border border-slate-400 placeholder:text-sm placeholder:italic rounded-sm focus:ring-1 focus:ring-red-700 focus:border-none focus:outline-none"
                                placeholder="আপনার পাসওয়ার্ড দিন" />
                            <Description className="wrap-break-word">কমপক্ষে ৮টি অক্ষরের হতে হবে, যার মধ্যে অন্তত ১টি বড় হাতের অক্ষর এবং ১টি সংখ্যা থাকতে হবে</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex flex-col gap-2">
                            <Button type="submit" className="w-full mt-3 hover:bg-red-800 rounded-md bg-red-700 font-bold
                        ">
                                সাইন আপ করুন
                            </Button>
                            <div className="mt-3">
                                <h2 className="text-sm text-center font-light">অ্যাকাউন্ট আছে?
                                    <Link href="/login" className="text-red-700 font-semibold cursor-pointer hover:underline ml-2">
                                        সাইন ইন করুন
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </Form>
                </main>
            </section>
        </main>
    );
};

export default SignUpPage;