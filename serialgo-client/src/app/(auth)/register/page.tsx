// "use client";

// import React, { useState } from 'react';
// import Link from "next/link";

// export default function RegisterPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // এখানে আপনার রেজিস্ট্রেশন লজিক বা API কল যুক্ত করতে পারেন
//     console.log({ name, email, password });
//   };

//   return (
//     <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-background">
//       <div className="w-full max-w-md space-y-8 rounded-2xl border border-border bg-card p-8 shadow-sm">

//         {/* Header Title */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-foreground">
//             Create an account with <span className="text-primary">SerialGo</span>
//           </h2>
//           <p className="mt-2 text-sm text-muted-foreground">
//             Enter your details below to get started.
//           </p>
//         </div>

//         {/* Form */}
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="John Doe"
//                 className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Footer Link */}
//         <p className="text-center text-sm text-muted-foreground">
//           Already have an account?{' '}
//           <Link href="/login" className="font-medium text-primary hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }




import React from 'react'

const RegisterPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1>Register Page</h1>
      <div className='border border-black-500'>
        <form >
          {/* First Name */}
          <div>
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder="First Name" />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Last Name" />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>

          {/* Button */}
          <div>
            <button>Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage;


