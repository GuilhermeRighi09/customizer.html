function carregarUsuarios() {
    const usuariosLS = window.localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuariosLS)
    const tbodyusuarios = document.getElementById('tbody-usuarios')

    for(let i=0; i < usuarios.length; i++){
        const usuario = usuarios[i]
        const nome = usuario.nome
        const email = usuario.email

        const linha = document.createElement('tr')
        const Coluna = document.createElement('td')
        const Coluna2 = document.createElement('td')
        
        Coluna.textContent = nome
        Coluna2.textContent = email

        tbodyusuarios.appendChild(linha)
        linha.appendChild(Coluna)
        linha.appendChild(Coluna2)
    }
}

carregarUsuarios()