import PageHeader from "../../components/PageHeader";
import school from '../../assets/images/school.png'

import './styles.css';

export default function DetailsSchool() {

  return (
    <div id="page-details">
      <main>
      <PageHeader
        title="Cadastre uma instituição"
      />
        <div className="details-details">
        <img src={school} alt="" />

          <div className="details-details-content">
            <h1>teste</h1>
            <p>teste do teste</p>

            <h2>Instruções para visita</h2>
            <p>teste do teste testoso</p>

            <div className="open-details">
              <div className="hour">
                {/* <FiClock size={32} color="#15B6D6" /> */}
                Segunda à Sexta <br />
                Sei lá mano
              </div>

              
                <div className="open-on-weekends dont-open">
                    {/* <FiInfo size={32} color="#FF6690" /> */}
                Não Atendemos <br />
                fim de semana
                  </div>


            </div>

            <button type="button" className="contact-button">
              {/* <FaWhatsapp size={20} color="#FFF" /> */}
              Entrar em contato
            </button> 
          </div>
        </div>
      </main>
    </div>
  );
}