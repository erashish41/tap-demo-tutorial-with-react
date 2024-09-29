import { useState } from "react"

export const Tab = ({tabsInfo, onChange}) => {

    const [currentTabIndex, setCurrenTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
        setCurrenTabIndex(getCurrentIndex); // Update the active tab index
        onChange(getCurrentIndex); // Notify the parent component about the tab change
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsInfo && tabsInfo.length > 0 
                    ? tabsInfo.map((currElm, index) =>{
                       return (
                        <div
                            className={`{tab-item ${currentTabIndex === index ? "active" : ""}`}
                            onClick={() => handleOnClick(index)}
                            key={currElm.label}> 
                                <span className="label">
                                    {currElm.label}
                                </span>
                        </div>)
                    })
                    : null
                }
            </div>
            <div className="content" style={{color:"red", border:"1px solid #ccc"}}>
                {
                    tabsInfo[currentTabIndex] && tabsInfo[currentTabIndex].context
                }
            </div>
        </div>
    )
}