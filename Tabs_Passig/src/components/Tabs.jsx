import React, { useState } from 'react'

const Tabs = (props) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const onClickHandler = (e, index) => {
        setActiveTabIndex(index);
    }
  return (
    <fieldset>
        <legend>Tabs</legend>
    <div>
     {props.tabs.map( (item, index) => {
        return (<><button onClick={ (e) => onClickHandler(e, index)  } key={index}>{ item.label }</button>
        </>
        )
    })}

    </div>
    <div>{props.tabs[activeTabIndex].content}</div>
    </fieldset>
  )
}

export default Tabs