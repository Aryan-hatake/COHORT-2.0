import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserProvider.jsx'
import AppProvider from './context/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>  //this is much better wrapping then all wrapping with .Provider
    ,
)


// ✅ Choice 2: Centralize the wrapping (correct way)

// Create ONE component whose only job is composition.

// AppProviders.jsx
// const AppProviders = ({ children }) => {
//   return (
//     <AuthProvider>
//       <UserProvider>
//         <ThemeProvider>
//           <CartProvider>
//             {children}
//           </CartProvider>
//         </ThemeProvider>
//       </UserProvider>
//     </AuthProvider>
//   );
// };

// export default AppProviders;


{/* <AppProviders>
  <App />
</AppProviders> */}
