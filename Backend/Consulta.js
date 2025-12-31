import axios from "axios";

const api = "http://localhost:3000/Usuarios"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NDdjOTcxODIzYmI5ZTczMmI0ZmI4YSIsImlhdCI6MTc2NjMxMjMwNiwiZXhwIjoxNzY2Mzk4NzA2fQ.nHcZuQ4q-dZIACV15Erh2AJ5FwOvKUpDL1zfm1F2iw8"


async function conectar() {
    
    try {
        const dados = await axios.get(api, { headers: { Authorization: `Bearer ${token}`}})

        console.log("Api conectada com sucesso")

        console.log("Buscando dados de API")
        const dadosApi = dados.data
        console.log("Dados encontrado com sucesso")
        console.log(dadosApi)

        
    } catch(error){
        console.log("Erro ao se conectar com api", error)
    }
}


conectar()