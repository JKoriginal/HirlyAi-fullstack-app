
import Navigation from "@/components/shared/navigation";
import { Outlet } from "react-router-dom";
function RootLayout() {
    return (
    
    <main className="container">
        <Navigation/>
        <Outlet />
     </main>
    );
    
}

export default RootLayout;