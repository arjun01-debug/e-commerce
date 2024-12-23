import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";

const AllCards = ({allItems}) => {
    const naviagte = useNavigate('/');
    
    if(allItems.length === 0){
        naviagte('/');
    }

    return (
        <>
        {
            allItems.map((itemDetail) => {
                return (
                    <CardDetails selectedElement={itemDetail}/>
                )
            })
        }    
        </>
    )
}

export default AllCards;