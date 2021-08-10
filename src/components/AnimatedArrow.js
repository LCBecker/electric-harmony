import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import { motion } from "framer-motion"

const AnimatedArrow = ({ direction }) => {

  let icon = <ArrowBackOutlinedIcon />;
  switch (direction) {
    case "right": icon = <ArrowForwardOutlinedIcon />; break;
    case "up": icon = <ArrowUpwardOutlinedIcon />; break;
    case "down": icon = <ArrowDownwardOutlinedIcon />; break;
    default: icon = <ArrowBackOutlinedIcon />;
  }

  return (
    <motion.div
      initial={{ y: '10vh' }}
      animate={{ y: '85vh' }}
      transition={{ duration: 5 }}
    >
      {icon}
    </motion.div>
  )
}

export default AnimatedArrow
