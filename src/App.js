import React, { useEffect } from 'react';
import './style.css';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { FONTAWSOME_LINK } from './IconLink';
import ImgUpload from './ImgUpload';

import { useRecoilState } from 'recoil';
import { inputBase64 } from './recoil/Base64';

export default function App() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);

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
          <h1>DCODELAB</h1>
          <h2>UI/UX</h2>

          <a href="#" class="btnView">
            View More
          </a>
          
        </article>
      </section>
      <ImgUpload></ImgUpload>
    </div>
  );
}
