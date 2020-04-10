import React from 'react'
import { Dropdown, Menu, MenuItem } from 'semantic-ui-react'


export default function CateoryItem(props) {
    const { item, children } = props    
    if(children.length>0){
       return <Dropdown simple item text={item.name}>
             <Dropdown.Menu>
            {children && children.map((child)=>{
                                return <Dropdown.Item>{child.name}</Dropdown.Item>})}
       </Dropdown.Menu>
     </Dropdown>
    }
    else{
        return <Menu.Item
            id={item.id}
            name={item.name}
    
            />
    }

}
