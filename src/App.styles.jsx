import styled from "styled-components";

export const VideosContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  p {
    width: 66%;
    text-align: left;
    line-height: 1.5;
  }
  margin: 4px 0;
`;
export const Form = styled.form`
  padding: 15px 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  label {
    padding: 5px;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    line-height: 1.5;
    color: #495057;
  }
  input[type="text"] {
    padding: 5px;
    width: 60%;
    outline: none;
  }
  input[type="submit"] {
    cursor: pointer;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  button {
    cursor: pointer;
  }
`;
export const Error = styled.p`
  /* padding: 0px; */
  text-align: center;
  color: red;
  font-size: 22px;
`;
