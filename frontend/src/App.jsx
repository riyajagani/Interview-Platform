
import './App.css';
import { SignInButton, UserButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
  
  return (
    <>
      <h1>Welcome to TalentQ</h1>
      
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
    </>
  );
}

export default App
