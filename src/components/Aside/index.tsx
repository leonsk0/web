import "./styles.css";

import AsideLogo from "../../assets/images/asideLogo.svg";

function Aside() {
  return (
    <aside className="aside">
      <div className="background-image">
        <img src={AsideLogo} alt="proffy-logo" />
      </div>
    </aside>
  );
}

export default Aside;
