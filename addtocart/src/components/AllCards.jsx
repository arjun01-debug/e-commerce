import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";
import { useEffect } from "react";

const AllCards = ({ allItems }) => {
    const naviagte = useNavigate();

    useEffect(() => {
        if (allItems.length === 0) {
            naviagte('/');
        }
    }, [allItems, naviagte]);

    return (
        <>
            <h2 className="text-center">Items Details Page</h2>
            {
                allItems.map((itemDetail) => {
                    return (
                        <CardDetails selectedElement={itemDetail} />
                    )
                })
            }
        </>
    )
}

export default AllCards;