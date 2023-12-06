import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logotipo-icon.svg";

import "./styles.css";

interface CardProps {
  path: string;
  name: string;
  link: string;
  type: "public" | "private";
}

export function Card({ path, name, link }: CardProps) {
  return (
    <Link to={link} className="link">
      <div className="containerCard">
        <div className="cardImage">
          <img src={path} alt={`Foto de ${name}`} />
        </div>
        <div className="cardFooter">
          <div className="cardIcon">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <p className="name">{name}</p>
        </div>
      </div>
    </Link>
  );
}
