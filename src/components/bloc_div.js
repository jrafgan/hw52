import React from "react";

const Bingo = props => {
    return (
        <React.Fragment>
            <div className="circle_div">{props.num}</div>
        </React.Fragment>
    )
};

export default Bingo;