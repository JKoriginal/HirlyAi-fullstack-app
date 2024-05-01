import Navigation from "@/components/shared/navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return(
        <div>
            <Navigation />
            <Outlet/>
        </div>
    )
    
}

export default MainLayout