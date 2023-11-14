import { TextField,InputAdornment } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMoonFill,BsBell } from "react-icons/bs"
import style from "./header.module.scss"
import Image from "next/image"
import user from "../../../public/photos/avatar.png"
const  Header =() =>{
    return (
        <>
        <div className={style.container}>
                <div className={style.searchbox}>
            <TextField
        id="input-with-icon-textfield"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineSearch size={22} color="#b1b1b1"/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          backgroundColor:"white",
          color:"black"
        }}
      />
            </div>
            <div className={style.userInfo}>
                <BsFillMoonFill size={16}/>
                <BsBell size={16}/>
              <Image
              src={user}
              width={34}
              height={34}
              alt="Done!"
              />
            </div>
            
            
        </div>
        
        </>
    )
}

export default Header

