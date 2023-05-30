import styled from "styled-components";

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
    padding: 6px;
  }
  @media screen and (max-width: 490px) {
    flex-direction: column;
    text-align: center;
    input[type="text"] {
      width: 100%;
    }
    input[type="submit"] {
      padding: 7px;
    }
  }
`;
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  button {
    cursor: pointer;
    padding: 5px;
  }
`;
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

  @media screen and (max-width: 490px) {
    flex-direction: column;
    margin-bottom: 10px;
    p {
      width: 100%;
      text-align: center;
      padding: 11px;
      margin-bottom: 3px;
    }
    img {
      width: 100%;
    }
  }
`;
export const Error = styled.p`
  /* padding: 0px; */
  text-align: center;
  color: red;
  font-size: 22px;
`;
