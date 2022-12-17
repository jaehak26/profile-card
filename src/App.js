import React, { useEffect, useRef } from 'react';
import './style.css';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { FONTAWSOME_LINK } from './IconLink';
import ImgUpload from './ImgUpload';
import InputUserInfo from './InputUserInfo';
import { useRecoilState } from 'recoil';
import { inputBase64 } from './recoil/Base64';
import { UserInfo } from './recoil/UserInfo';
import { onClickDownload } from './OnClick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ICON_CSS, PHONE_ICON_CSS } from './style';

export default function App() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(UserInfo);
  const ref = useRef();

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
      <p ref={ref}>
        <section>
          <Icon baseClassName="fas" className="fa-bars" />
          <Icon
            baseClassName="far"
            className="fa-sticky-note"
            onClick={() => onClickDownload(ref)}
          />
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

            <a
              href={userCoil.userlink ? userCoil.userlink : '#'}
              class="btnView"
            >
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
                <Icon
                  baseClassName="fas"
                  className="fa-envelope"
                  sx={ICON_CSS}
                />
                <span className="afterIcon">
                  {userCoil.userEmail ? userCoil.userEmail : 'email@email.com'}
                </span>
              </li>
            </ul>
          </article>
        </section>
        <br />
      </p>
      <InputUserInfo></InputUserInfo>
      <ImgUpload></ImgUpload>
      <Button variant="outlined">서버로 전송</Button>
      <FontAwesomeIcon icon={faCircleInfo} size="2x" />
      <Icon baseClassName="fa" className="fa-info" />
      <InfoOutlinedIcon />

      <div class="filebox">
        <label for="file">파일찾기</label>
        <input type="file" id="file" />
      </div>
      <Button variant="outlined">
        <label>
          파일찾기
          <input type="file" id="file" />
        </label>
      </Button>
    </div>
  );
}
