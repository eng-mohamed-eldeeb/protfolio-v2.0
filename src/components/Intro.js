import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";
const Box = styled(motion.div)`
  width: 65vw;
  height: 55vh;
  display: flex;
  position: absolute;

  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    top: -9.5%;
    left: 60%;
    transform: translate(-50%, -25%);
    width: 30%;
    height: auto;
    @media only screen and (max-width: 450px) {
    display: none;
  }
    @media only screen and (max-width: 1080px) {
    top: -6%;
  }
    @media only screen and (max-width: 768px) {
    top: -4%;
  }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1em;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 0.7 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Mohamed Eldeeb.</h3>
          <h6>I code beatiful and simple websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.7 }}
        >
          <img className="pic" src={Me} alt="Coding pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
