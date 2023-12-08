import { ChangeEvent, useState } from "react";
import PageHeader from "../../components/PageHeader";
import fileIcon from '../../assets/images/icons/file-icon.svg';
import nuvem from '../../assets/images/icons/nuvem-icon.svg';
import removeIcon from '../../assets/images/icons/remove-icon.svg';
import './styles.css';
import { Link } from "react-router-dom";
import Input from "../../components/Input";

export default function SendDocuments() {

  type SelectedFile = {
    name: string;
    src: string;
};

  const [selectedImages, setSelectedImages] = useState<SelectedFile[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray: SelectedFile[] = Array.from(event.target.files).map((file) => ({
        name: file.name,
        src: URL.createObjectURL(file),
      }));

      setSelectedImages((prevImages) => prevImages.concat(filesArray));
      Array.from(event.target.files).map(
        (file) => URL.revokeObjectURL(file.name)
      );
    }
  };

  const handleRemoveImage = (name: string) => {
    setSelectedImages((prevImages) => prevImages.filter((image) => image.name !== name));
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Envio de documentos"/>
      <div className="containerContent">
        <h2>Envie os documentos necessários para a matrícula</h2>
      </div>

      <div className="form">
      <div className="mainDetails">
        <div className="containerDetails">

          <div className="containerPersona">
            <div>
              <div className="divPhoto"></div>
            </div>
            <div className="divText">
            <h3>André da Guerra</h3>
            <span>Escolaridade: Fundamental Completo</span>
            <span>Responsável: Cleiton da Guerra</span>
            </div>
          </div>

          <div className="containerTextDescription">
            <p className="containerTextP">Envie os documentos necessários para a matrícula na instituição a seguir:</p>
            <p className="titlePhoto">Fotos</p>
          </div>

          <div className="containerPhoto">
            <div className="photoContainerSend">
              <img className="iconNuvem" src={nuvem} alt='Ícone de nuvem' />
              <label htmlFor="fileInput" className="customLabel">
                Clique para escolher o arquivo
              <Input className="photo" type="file" id="fileInput" accept="image/*" multiple onChange={handleImageUpload} label={''} name="photo" />
              </label>
            </div>
            </div>

            <div className="containerPhoto">
            {selectedImages.map((image, index) => (
            <div className="containerSendImage" key={index}>
            <div className="imageSendWrapper">
              <img className="iconSendPhoto" src={fileIcon} alt='Ícone de documento' />
              <span className="imageSendName">{image.name}</span>
            </div>
            <button className="buttonPhoto" onClick={() => handleRemoveImage(image.name)}>
              <img src={removeIcon} alt='Ícone de remover' />
            </button>
          </div>
        ))}
            </div>

          <footer>
            <div>
            <span>Data da solicitação:</span>
            <span>09/12/2023</span>
            </div>
            <Link to='/confirmation-documents'>Enviar documentos</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}