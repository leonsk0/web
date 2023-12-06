import { ChangeEvent, ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import fileIcon from "../../assets/images/icons/file-icon.svg";
import nuvem from "../../assets/images/icons/nuvem-icon.svg";
import removeIcon from "../../assets/images/icons/remove-icon.svg";

import styles from "./styles.module.css";

function CreateSchool(): ReactElement {
  type SelectedFile = {
    name: string;
    src: string;
  };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [requirements, setRequirements] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

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

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  return (
    <div id={styles.pageTeacherForm}>
      <PageHeader title="Cadastre uma instituição" />
      <div className={styles.formContainer}>
        <form>
          <fieldset>
            <legend>Informações</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              name="bio"
              label="Sobre (Máximo de 300 caracteres)"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />

            <Input
              name="address"
              label="Endereço"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <Input
              name=" Número de WhatsApp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <p className={styles.titlePhoto}>Fotos</p>
            <div className={styles.photoContainer}>
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

            <div>
              {selectedImages.map((image, index) => (
                <div className={styles.containerImage} key={index}>
                  <img
                    className={styles.iconPhoto}
                    src={fileIcon}
                    alt="Ícone de documento"
                  />
                  <div className={styles.imageWrapper}>
                    <p className={styles.imageName}>{image.name}</p>
                  </div>
                  <button
                    className={styles.buttonPhoto}
                    onClick={() => handleRemoveImage(image.name)}
                  >
                    <img src={removeIcon} alt="Ícone de remover" />
                  </button>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Requisitos para matrícula</legend>
            <Input
              name="requirements"
              label="Requisitos"
              value={requirements}
              onChange={(e) => {
                setRequirements(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horarios disponíveis para matrícula
              <button onClick={addNewScheduleItem} type="button">
                + Novo Horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />

                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
            <div className={styles.submitContainer}>
              <Link to="/confirmation-school">Salvar Cadastro</Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default CreateSchool;
