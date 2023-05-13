import { ChangeEvent, ReactElement, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import fileIcon from '../../assets/images/icons/file-icon.svg';
import removeIcon from '../../assets/images/icons/remove-icon.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function CreateSchool(): ReactElement {

type SelectedFile = {
    name: string;
    src: string;
};

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [requirements, setRequirements] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

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

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems,
    { week_day: 0, from: '', to: '' },
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Cadastre uma instituição"
      />
    <div className="form">
      <main>
        <form>
          <fieldset>
            <legend>Informações</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Input
              name="bio"
              label="Sobre (Máximo de 300 caracteres)"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />

            <Input
              name="address"
              label="Endereço"
              value={address}
              onChange={(e) => { setAddress(e.target.value) }}
            />

            <Input
              name="Número de WhatsApp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Input className="photo" type="file" accept="image/*" multiple onChange={handleImageUpload} label={'Fotos'} name={'photo'} />
            <div>
            {selectedImages.map((image, index) => (
            <div className="containerImage" key={index}>
                <img className="iconPhoto" src={fileIcon} alt='Ícone de documento' /> {image.name}  
                <button className="buttonPhoto" onClick={() => handleRemoveImage(image.name)}> <img src={removeIcon} alt='Ícone de remover' /></button>
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
              onChange={(e) => { setRequirements(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>
                Horarios disponíveis para matrícula
              <button onClick={addNewScheduleItem} type="button">+ Novo Horário</button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />

                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <Link to='/confirmation'>Salvar Cadastro</Link>
          </footer>
        </form>
      </main>
      </div>
    </div>
  );
}

export default CreateSchool;
