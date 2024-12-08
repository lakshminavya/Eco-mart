import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ()=>{
    return(
        <>
            <div className="dashboard-menu">
                <Link to="dashboard/laptops">Seeds</Link>
                <Link to="dashboard/mobiles">fertilizer</Link>
                <Link to="dashboard/headphones">Vegtables</Link>
            </div>
            
            <br></br><br></br>

            <Outlet></Outlet>
            
        </>
    )
}
export default Dashboard;