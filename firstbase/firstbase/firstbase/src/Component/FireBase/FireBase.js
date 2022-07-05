import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ab } from "../Base/Base";
import { collection, getDocs } from "firebase/firestore";

const FireBase = () => {
  const [baseData, setBaseData] = useState([]);

  const getData = async () => {
    const data = await getDocs(collection(ab, "CodeLab Student"));
    setBaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(baseData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>
        {" "}
        <BsClipboardData /> CodeLab Set05 Students Data
      </h1>
      <Container>
        {baseData?.map((props) => {
          return (
            <Wrapper key={props}>
              <Card>
                <Name>
                  {" "}
                  <MdOutlineDriveFileRenameOutline />
                  <strong>Name:</strong> {props.Name}
                </Name>
                <Stark>
                  {" "}
                  <BsCodeSlash />
                  <strong>Stark:</strong> {props.Stark}
                </Stark>
                <Description>
                  {" "}
                  <BsFillPersonLinesFill />
                  <strong>Description:</strong>
                  {props.Description}
                </Description>
              </Card>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};

export default FireBase;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  font-family: poppins;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: #fff;
  width: 250px;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  flex-wrap: wrap;
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 10px 30px 10px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Stark = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.div``;
