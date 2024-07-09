import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ServicesChose() {
  return (
    <div className="flex justify-center p-12 gap-4">
      <div>
        <Dropdown label="Création de société" dismissOnClick={false}>
          <Dropdown.Item as={Link} to={"creation_sarl"} className="hover:bg-black">
            Création de SARL
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={"Creation_Sarl"}>Création de SARL AU</Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <Dropdown label="Modifications de statuts" dismissOnClick={false}>
          <Dropdown.Item className="hover:bg-blue-500">
            Statuts de SARL/SARL AU
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <Dropdown label="Fermeture d'entreprise" dismissOnClick={false}>
          <Dropdown.Item>Dissolution/Liquidation</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
