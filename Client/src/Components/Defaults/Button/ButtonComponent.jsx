import { Button } from "@/Components/ui/button";

const ButtonComponent = ({ classes, text = "Shop Now", children }) => {
  return <Button className={classes}>{children ?? text}</Button>;
};

export default ButtonComponent;
