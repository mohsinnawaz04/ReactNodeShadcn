import { Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import MountainIcon from "./MountainIcon";

const MiniHeader = () => {
  return (
    <div className="mini-header container mx-auto flex justify-between items-center py-3">
      <div>
        <p className="flex items-center gap-3 text-xs">
          <Phone size={18} color="#5DBDAC" strokeWidth={2} />
          <Link to={""}>Support +0123456789</Link>
        </p>
      </div>
      <Link to={"/"}>
        <div className="flex items-center">
          <MountainIcon className="size-5" />
          <span className="ms-2">Acme Inc</span>
        </div>
      </Link>
      <div>
        <ul className="flex gap-5 text-xs   ">
          <Link>
            <li>Newsletter</li>
          </Link>
          <Link>
            <li>Track Order</li>
          </Link>
          <Link>
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MiniHeader;
