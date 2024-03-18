function codificar() {
    let texto = document.getElementById("textoInput").value;
    let texto_codificado = "";
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        let codigo = texto.charCodeAt(i);
        if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
            let posicao;
            if (codigo >= 65 && codigo <= 90)
                posicao = codigo - 64;
            else
                posicao = codigo - 96;
            texto_codificado += posicao + " ";
        } else {
            texto_codificado += caractere;
        }
    }
    document.getElementById("textoOutput").value = texto_codificado.trim();
}

function decodificar() {
    let texto_codificado = document.getElementById("textoInput").value;
    let texto_decodificado = "";
    let partes = texto_codificado.split(" ");
    for (let i = 0; i < partes.length; i++) {
        let parte = partes[i];
        if (!isNaN(parte)) {
            let posicao = parseInt(parte);
            let caractere = String.fromCharCode(posicao + (posicao <= 26 ? 64 : 96));
            texto_decodificado += caractere;
        } else {
            texto_decodificado += parte;
        }
    }
    document.getElementById("textoOutput").value = texto_decodificado;
}