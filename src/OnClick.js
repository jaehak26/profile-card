import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export const onClickDownload = (ref) => {
  const card = ref.current;
  domtoimage.toBlob(card).then((blob) => {
    saveAs(blob, 'card.png');
  });
};
