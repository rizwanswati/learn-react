import React,{forwardRef} from "react";
function Engine(props, ref) {
    return(
      <input type={"text"} ref={ref}/>
    );
}
export default forwardRef(Engine);