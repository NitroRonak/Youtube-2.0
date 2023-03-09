import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
    return (
        <Stack direction="row"
            sx={{ overflowY: "auto", flexDirection: { md: "column" }, height: { sx: "auto", md: "95%" }, color: "whitesmoke" }}
        >
            {categories.map((item) => {
                return (
                    <button className='category-btn'
                        onClick={()=>setSelectedCategory(item.name)}
                        style={{
                            background: item.name === selectedCategory && "#FC1503",
                            color: "white",
                        }}
                        key={item.name}
                    >
                        <span style={{ color: item.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{item.icon}</span>
                        <span style={{ opacity: item.name === selectedCategory ? "1.2" : "0.8" }}>{item.name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default SideBar
