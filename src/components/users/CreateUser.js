import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Button from "../utility/Button";
import InputGroup from "../utility/InputGroup";

const Container = styled.div`
  width: 70rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 5rem 3rem;
  border-radius: 1rem;
  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 20rem auto;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 10rem auto;
  }
`;

const SectionLabel = styled.p`
  padding: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.grey};
  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

const InputSection = styled.div`
  padding: 1rem;
`;

const Group = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Btn = styled(Button)`
  width: 100%;
`;

const ErrorMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: red;
`;

export default function CreateUser() {
  // hook up current path to state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "CURRENT_PATH",
      payload: "create",
    });
  });

  //input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  // redirect for login once succesful creation
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (e) => {
    //regex email and phone validation
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/;
    e.preventDefault();
    setError("");
    // form validation
    if (!name || !email || !restaurant || !phone || !password || !password) {
      setError("Please enter all fields");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
    } else if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number");
    } else if (password !== rePassword) {
      setError("Passwords must match");
    } else {
      const data = {
        name,
        email,
        restaurant,
        phone,
        password,
      };
      setError("");
      axios.post("/users/create", data).then((response) => {
        if (response.data.message) {
          //error
          setError(response.data.message);
        } else {
          setRedirect(true);
        }
      });
    }
  };

  return redirect ? (
    <Redirect to="/users/login" />
  ) : (
    <Container>
      <Form className="box-shadow" onSubmit={onSubmit}>
        <Section>
          <SectionLabel>Personal Information</SectionLabel>
          <InputSection>
            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Name"
              value={name}
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Re-enter Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
            />
          </InputSection>
        </Section>
        <Section>
          <SectionLabel>Business Information</SectionLabel>
          <InputSection>
            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Restaurant Name"
              value={restaurant}
              placeholder="In N Out"
              onChange={(e) => setRestaurant(e.target.value)}
              type="text"
            />
            <StyledInputGroup
              style={{ marginBottom: "2rem" }}
              label="Phone Number"
              value={phone}
              placeholder="123-456-7890"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
            />
          </InputSection>
        </Section>
        {error ? (
          <Group>
            <ErrorMessage>{error}</ErrorMessage>
          </Group>
        ) : null}
        <Group>
          <Btn variant="filled">Create Account</Btn>
        </Group>
      </Form>
    </Container>
  );
}
