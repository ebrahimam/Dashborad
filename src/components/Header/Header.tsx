import { TextField,InputAdornment } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMoonFill,BsBell } from "react-icons/bs"
import style from "./header.module.scss"
const  Header =() =>{
    return (
        <>
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.searchbox}>
            <TextField
        id="input-with-icon-textfield"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineSearch size={22}/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
            </div>
            <div className="userinfo">
                <BsFillMoonFill/>
                <BsBell/>
                <div className={style.user}>
                    
                </div>
            </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Header

