import { Mail, MapPin, PhoneCall } from "lucide-react";

const UserDetails = ({ user }) => {
  return (
    <>
      {/* Email Info */}
      <div className="extra-info mt-16">
        <p className="email text-sm mb-4 flex items-center gap-2 justify-start">
          <span className="info-logo">
            <Mail size={15} />
          </span>
          {user?.email}
        </p>
        <p className="phone text-sm mb-4 flex items-center gap-2 justify-start">
          <span className="info-logo">
            <PhoneCall size={15} />
          </span>
          {user?.phone ?? "0300-0001234"}
        </p>
        <p className="location text-sm mb flex items-center gap-2 justify-start-4">
          <span className="info-logo">
            <MapPin size={15} />
          </span>
          {user?.phone ?? "Toronto"}
        </p>
      </div>
    </>
  );
};

export default UserDetails;
