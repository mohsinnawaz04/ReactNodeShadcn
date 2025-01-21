import { Button } from "@/Components/ui/button";

const ButtonComponent = ({ classes, text = "Shop Now" }) => {
  return <Button className={classes}>{text}</Button>;
};

export default ButtonComponent;
