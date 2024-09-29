import { Tab } from "./Tab";
import "../App.css"

const RandomComponent = () => {
    return <div>Some random content</div>
}

// Define inside the parent component if it’s simple and specific to that component.
// Define outside if the child component is large, reusable, or may benefit from better 
// separation of concerns.

export const TabTest = () => {

    const tabsContent = [
        {
            label: "Tab 1",
            context: <div>This content is for Tab 1</div>
        },
        {
            label: "Tab 2",
            context: <div>This content is for Tab 2</div>
        },
        {
            label: "Tab 3",
            context: <RandomComponent />
        }
    ]

    function handleOnClick(currentTabIndex) {
        console.log(currentTabIndex);
        
    }

    return (
        <>
            <Tab tabsInfo={tabsContent} onChange={handleOnClick}/>
        </>
    )
}