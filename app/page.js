import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInForm from "@/appPages/SignInForm";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // Get session
  const session = await getServerSession(authOptions);

  // If there's a session, redirect to the dashboard
  if (session) {
    redirect("/dashboard");
    return null; // Return null to avoid rendering the rest of the component
  }

  return (
    <main>
      <SignInForm />
    </main>
  );
}
  
// import SignInForm from "@/appPages/SignInForm";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

// import { authOptions } from "./api/auth/[...nextauth]/route";

// export default async function Home() {

//   const session = await getServerSession(authOptions);

//   if(session) redirect("/dashboard");
//   return(
//     <main>
//       <SignInForm/>
//     </main>
//   );
// }
