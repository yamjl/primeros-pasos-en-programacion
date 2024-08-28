// Mapeo de vocales a palabras
const mapaEncriptacion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const mapaDesencriptacion = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar() {
    let texto = document.getElementById("inputText").value;

    // Reemplaza cada vocal con su respectiva palabra
    let encriptado = texto.replace(/[aeiou]/g, function(vocal) {
        return mapaEncriptacion[vocal];
    });

    document.getElementById("resultText").value = encriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;

    // Reemplaza las palabras por las vocales originales
    let desencriptado = texto;

    // Realiza el reemplazo de todas las palabras en el texto
    for (const [clave, valor] of Object.entries(mapaDesencriptacion)) {
        let regex = new RegExp(clave, "g");
        desencriptado = desencriptado.replace(regex, valor);
    }

    document.getElementById("resultText").value = desencriptado;
}

function copiar() {
    const textoEncriptado = document.getElementById("resultText");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

