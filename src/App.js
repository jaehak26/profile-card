import React, { useEffect } from 'react';
import './style.css';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { FONTAWSOME_LINK } from './IconLink';
import ImgUpload from './ImgUpload';
import InputUserInfo from './InputUserInfo';
import { useRecoilState } from 'recoil';
import { inputBase64 } from './recoil/Base64';
import { UserInfo } from './recoil/UserInfo';

import { ICON_CSS, PHONE_ICON_CSS } from './style';

export default function App() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(UserInfo);

  useEffect(() => {
    const node = loadCSS(
      FONTAWSOME_LINK,
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div>
      <section>
        <Icon baseClassName="fas" className="fa-bars" />
        <Icon baseClassName="far" className="fa-sticky-note" />
        <article class="profile">
          <br />
          <div>
            {baseDataCoil != null && (
              <img src={`data:image;base64,${baseDataCoil}`} alt="profile" />
            )}
          </div>
          <h1>{userCoil.userName ? userCoil.userName : 'name'}</h1>
          <h2>
            {userCoil.moreInfo ? userCoil.moreInfo : 'for more information'}
          </h2>

          <a href="#" class="btnView">
            View More
          </a>

          <ul class="contact">
            <li>
              <Icon
                baseClassName="fas"
                className="fa-phone"
                sx={{ ...ICON_CSS }}
              />
              <span className="afterIcon">
                {userCoil.userPhone ? userCoil.userPhone : '010-0000-0000'}
              </span>
            </li>
            <li>
              <Icon baseClassName="fas" className="fa-envelope" sx={ICON_CSS} />
              <span className="afterIcon">
                {userCoil.userEmail ? userCoil.userEmail : 'email@email.com'}
              </span>
            </li>
          </ul>
        </article>
      </section>
      <InputUserInfo></InputUserInfo>
      <ImgUpload></ImgUpload>
    </div>
  );
}
