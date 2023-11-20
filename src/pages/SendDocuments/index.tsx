import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import fileIcon from "../../assets/images/icons/file-icon.svg";
import nuvem from "../../assets/images/icons/nuvem-icon.svg";
import removeIcon from "../../assets/images/icons/remove-icon.svg";

import styles from "./styles.module.css";

type SelectedFile = {
  name: string;
  src: string;
};

export default function SendDocuments() {
  const [selectedImages, setSelectedImages] = useState<SelectedFile[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray: SelectedFile[] = Array.from(event.target.files).map(
        (file) => ({
          name: file.name,
          src: URL.createObjectURL(file),
        })
      );

      setSelectedImages((prevImages) => prevImages.concat(filesArray));
      Array.from(event.target.files).map((file) =>
        URL.revokeObjectURL(file.name)
      );
    }
  };

  const handleRemoveImage = (name: string) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image.name !== name)
    );
  };

  return (
    <div id={styles.sendDocumentsPage}>
      <PageHeader
        title="Envio de documentos"
        children={
          <p>
            <strong>Envie os documentos necessários para a matrícula</strong>
          </p>
        }
      />

      <div className={`${styles.sendDocumentsContainer} container`}>
        <div className={styles.sendDocumentsCard}>
          <div className={styles.sendDocumentsCardContent}>
            <div className={styles.containerPersona}>
              <div>
                <div className={styles.divPhoto}></div>
              </div>
              <div className={styles.divText}>
                <h3>André da Guerra</h3>
                <span>Escolaridade: Fundamental Completo</span>
                <span>Responsável: Cleiton da Guerra</span>
              </div>
            </div>

            <div className="containerTextDescription">
              <p className={styles.textDescription}>
                Envie os documentos necessários para a matrícula na instituição
                a seguir:
              </p>
              <p className={styles.titlePhoto}>Fotos</p>
            </div>

            <div className={styles.containerPhoto}>
              <div className={styles.photoContainerSend}>
                <img
                  className={styles.iconNuvem}
                  src={nuvem}
                  alt="Ícone de nuvem"
                />
                <label htmlFor="fileInput" className={styles.customLabel}>
                  Clique para escolher o arquivo
                  <Input
                    className={styles.photo}
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    label={""}
                    name="photo"
                  />
                </label>
              </div>
            </div>

            <div className={styles.containerPhoto}>
              {selectedImages.map((image, index) => (
                <div className={styles.containerSendImage} key={index}>
                  <div className={styles.imageSendWrapper}>
                    <img
                      className="iconSendPhoto"
                      src={fileIcon}
                      alt="Ícone de documento"
                    />
                    <span className={styles.imageSendName}>{image.name}</span>
                  </div>
                  <button
                    className="buttonPhoto"
                    onClick={() => handleRemoveImage(image.name)}
                  >
                    <img src={removeIcon} alt="Ícone de remover" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.submitContainer}>
            <div>
              <span>Data da solicitação:</span>
              <span>08/12/2022</span>
            </div>
            <Link to="/confirmation-documents">Aceitar cadastro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
