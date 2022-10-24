import axios from "axios";
const insertDataEmploye = (name: string, lastName: string, birthDay: string) => {
    let options = {
        url: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:raul_Morales",
        data: {
            name: name,
            last_name: lastName,
            birthday: birthDay
        },
        method: 'POST'
    };
    return axios(options).then(response => {
        console.log(response);
    }).catch((error) => {
        alert("Algo salio mal");
        console.log(error);
    });
}
export default insertDataEmploye;