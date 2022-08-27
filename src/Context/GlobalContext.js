import React, { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import swal from "sweetalert";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [currentId, setCurrentId] = useState(-1);
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [inputPass, setInputPass] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const HandlingInputPass = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputPass({ ...inputPass, [name]: value });
    console.log(inputPass);
  };

  const HandlingPass = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } = inputPass;
    console.log(inputPass);
    if (new_password === new_confirm_password) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/change-password",
          {
            current_password,
            new_password,
            new_confirm_password,
          },
          {
            headers: { Authorization: "Bearer" + Cookies.get("token") },
          }
        )
        .then((res) => {
          console.log(res);
          swal("Selamat!", "Password Sudah Diganti!", "success");
          setInputPass({
            current_password: "",
            new_password: "",
            new_confirm_password: "",
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      swal("Opps", "Masukkan Password Baru dengan benar!", "error");
    }
  };

  //default id
  const DefaultId = () => {
    setCurrentId(-1);
  };

  //CreateDataInput
  const CreateDataInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const HandlingCreate = (event) => {
    event.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;
    console.log(input);
    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: "Bearer" + Cookies.get("token") },
          }
        )
        .then(() => {
          swal("Good job!", "You clicked the button!", "success");
          navigate("dashboard/List-vacancy");
        })
        .catch((error) => console.log(error.message));
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: "Bearer" + Cookies.get("token") },
          }
        )
        .then(() => {
          swal("Good job!", "You clicked the button!", "success");
          setCurrentId(-1);
          navigate("/dashboard/manage");
        });
    }
    setFetchStatus(true);
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  //register
  const [registerInput, setRegisterInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const HandlingRegisterInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setRegisterInput({ ...registerInput, [name]: value });
  };

  const HandlingRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = registerInput;
    console.log(registerInput);
    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then(() => {
        setRegisterInput({ name: "", image_url: "", email: "", password: "" });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //login
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const HandlingLoginInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setLoginInput({ ...loginInput, [name]: value });
  };

  const HandlingLogin = (event) => {
    event.preventDefault();
    let { email, password } = loginInput;
    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        let { token } = res.data;
        Cookies.set("token", token, { expires: 1 });
        navigate("/dashboard");
      })
      .catch(() => {
        swal("password Invalid", "Slah memasukkan password", "error");
      });
  };
  //remove token
  const RemoveToken = () => {
    Cookies.remove("token");
    swal("LOGOUT", "BERHASIL", "success");
    navigate("/Login");
  };

  //Handling Delete
  const HandlingDelete = (event) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const idData = parseInt(event.target.value);
        console.log(idData);
        axios
          .delete(
            `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
            {
              headers: { Authorization: "Bearer" + Cookies.get("token") },
            }
          )
          .then(() => {
            setFetchStatus(true);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => console.log(error.message));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  //Handle Edit
  const HandlingEdit = (event) => {
    const idData = parseInt(event.target.value);

    console.log(idData);
    setCurrentId(idData);
    navigate(`/dashboard/create/${idData}`);
  };

  //detail handling
  const HandlingDetail = (event) => {
    const idData = parseInt(event.target.value);
    console.log(idData);
    navigate(`/dashboard/detail/${idData}`);
  };

  const State = {
    loginInput,
    setLoginInput,
    registerInput,
    setRegisterInput,
    fetchStatus,
    setFetchStatus,
    data,
    setData,
    input,
    setInput,
    currentData,
    setCurrentData,
    currentId,
    setCurrentId,
    inputPass,
    setInputPass,
  };

  const allFunct = {
    HandlingLoginInput,
    HandlingLogin,
    RemoveToken,
    HandlingRegisterInput,
    HandlingRegister,
    HandlingDetail,
    HandlingDelete,
    HandlingCreate,
    CreateDataInput,
    HandlingEdit,
    DefaultId,
    HandlingInputPass,
    HandlingPass,
  };

  return (
    <GlobalContext.Provider value={{ State, allFunct }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
