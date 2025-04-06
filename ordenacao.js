let list = [113, 139, 68, 177, 12, 47];

//função para ordenação bubblesort 
function ordenaLista(lista) {
    let actualItem;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > lista[i + 1]) {
            actualItem = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = actualItem;
        }
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] > lista[j + 1]) {
                actualItem = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = actualItem;
            }
        }
    }
    return lista;
};

module.exports = { ordenaLista };
ordenaLista(list);
console.log(list);



