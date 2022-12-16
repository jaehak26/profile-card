import React, {useState} from "react";
import { useRecoilState } from 'recoil'; 
import {UserInfo} from './recoil/UserInfo'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputUserInfo()) {

  const [userInfoCoil, setUserInfoCoil] = useRecoilState(UserInfo)
  
  const onChangeName = (nameEvent)=>{
    setUserInfoCoil({...userInfoCoil,userName:nameEvent.target.value})
  }
  const onChangeMoreInfo = (moreInfoEvent)=>{
    setUserInfoCoil({...userInfoCoil,moreInfo:moreInfoEvent.target.value})
  }
  const onChangePhone = (phoneEvent)=>{
    setUserInfoCoil({...userInfoCoil,userPhone:phoneEvent.target.value})
  }
  const onChangeEmail = (emailEvent)=>{
    setUserInfoCoil({...userInfoCoil,userEmail:emailEvent.target.value})
  }

    return (<div>
      <div>
        <TextField label="Name" onChange={(e) => onChangeName(e)}/>
      </div>
      <div>
        <TextField label="Name" onChange={(e) => onChangeMoreInfo(e)}/>
      </div>
      <div>
        <TextField label="Name" onChange={(e) => onChangePhone(e)}/>
      </div>
      <div>
        <TextField label="Name" onChange={(e) => onChangeEmail(e)}/>
      </div>
    <Button>프로필 변경</Button>
    </div>
    );
  
}

