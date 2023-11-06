import React from "react";
import logo from "./assets/logo.svg";
import { useQuery, gql } from "@apollo/client";

const GET_CLIENT = gql`
  query getClient {
    clients {
      id
      name
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!){
    project {
      id
      name
      description
      status
    }
  }
`;

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: String!, $clientId: String){
    project {
      id
      name
      description
      status
    }
  }
`;

function Header() {
    const id = 1;
  const { loading, data, error } = useQuery(GET_PROJECT, {
    variables: {id}})
  console.log(data)
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img className="bg-red mt-2" src={logo} alt="" />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
