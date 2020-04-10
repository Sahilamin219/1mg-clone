
import React, { Component } from 'react'
import { Dropdown, Menu, List, Popup, Button } from 'semantic-ui-react'
import CateoryItem from './CateoryItem'
import './categoryNav.css';

const results = [
    {
        "id": 7,
        "name": "Deodrant",
        "parent": 5,
        "image": "http://upachar.com.np/media/category/images/Deodrant_Icon.png"
    },
    {
        "id": 8,
        "name": "Sexual Wellness",
        "parent": 5,
        "image": "http://upachar.com.np/media/category/images/Condom_Icon.png"
    },
    {
        "id": 4,
        "name": "Baby Needs",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/milk2.png"
    },
    {
        "id": 5,
        "name": "Personal Care",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/personal-care1.png"
    },
    {
        "id": 6,
        "name": "Diabetic",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/diabetes1.png"
    },
    {
        "id": 2,
        "name": "Nutrition",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/soy-milk.png"
    },
    {
        "id": 9,
        "name": "Ayurvedic",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/bowl.png"
    },
    {
        "id": 11,
        "name": "Home Care",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/home-care-icon-02.png"
    },
    {
        "id": 12,
        "name": "Medical Equip.",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/glove_jQ4LfL0.png"
    },
    {
        "id": 13,
        "name": "Grocery",
        "parent": null,
        "image": "http://upachar.com.np/media/category/images/grocery-icon.png"
    }
]

const inlineStyles = {
    categoryInline:{
        display:'flex',
        marginTop:'0px'
    },
    liPadding:{
        padding:'10px'
    }
}







class CategoryNav extends Component {

    inlineCategoryStyle={
        linkColorChange:{
            color:'black'
        }
    }

    mouseOver = (e) => {
        console.log('moved over', e.target.id)
        
    }
    
    getChildren = (item) => {
        return results.filter((child)=>{
            return child.parent===item.id
        })
    }
    

    render() {
        
        return (<Menu secondary>
            {results && results.map((item)=>{
                if(item.parent==null){
                return <CateoryItem item={item} children={this.getChildren(item)}/>
                }else{
                    return null
                }                
            }   
            
            )
        }
    </Menu>
        )
    }
}

export default CategoryNav
