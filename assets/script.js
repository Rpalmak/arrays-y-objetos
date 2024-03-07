// 1

const traumatologia = [
    { HORA: '08:00', ESPECIALISTA: 'RENÉ RIVAS', PACIENTE: 'ANA GELLONA', RUT: '13123329-7', PREVISIÓN: 'ISAPRE' },
    { HORA: '08:30', ESPECIALISTA: 'MARÍA SOLAR', PACIENTE: 'RAMIRO ANDRADE', RUT: '12221451-K', PREVISIÓN: 'FONASA' },
    { HORA: '09:00', ESPECIALISTA: 'RAÚL LOYOLA', PACIENTE: 'CARMEN ISLA', RUT: '10112348-3', PREVISIÓN: 'ISAPRE' },
    { HORA: '09:30', ESPECIALISTA: 'ANTONIO LARENAS', PACIENTE: 'PABLO LOAYZA', RUT: '13453234-1', PREVISIÓN: 'ISAPRE' },
    { HORA: '12:00', ESPECIALISTA: 'MATÍAS ARAVENA', PACIENTE: 'SUSANA POBLETE', RUT: '14345656-6', PREVISIÓN: 'FONASA' }
];

const traumatologiaSection = document.getElementById("traumatologia");

traumatologiaSection.innerHTML = traumatologia.map(consulta => {
    return `<tr>
    <td>${consulta.HORA}</td>
    <td>${consulta.ESPECIALISTA}</td>
    <td>${consulta.PACIENTE}</td>
    <td>${consulta.RUT}</td>
    <td>${consulta.PREVISIÓN}</td>
</tr>`;
}).join('');

// 2

const radiologia = [];
radiologia.shift();
radiologia.pop();

// 3

const dental = [
    { HORA: '08:30', ESPECIALISTA: 'ANDREA ZUÑIGA', PACIENTE: 'MARCELA RETAMAL', RUT: '11123425-6', PREVISIÓN: 'ISAPRE' },
    { HORA: '11:00', ESPECIALISTA: 'MARIA PIA ZAÑARTU', PACIENTE: 'ANGEL MUÑOZ', RUT: '9878789-2', PREVISIÓN: 'ISAPRE' }
];

const dentalList = document.createElement('ul');
dental.forEach(consulta => {
    const listItem = document.createElement('li');
    listItem.textContent = `${consulta.HORA} - ${consulta.ESPECIALISTA} - ${consulta.PACIENTE} - ${consulta.RUT} - ${consulta.PREVISIÓN}`;
    dentalList.appendChild(listItem);
});

const ejercicio3Section = document.getElementById("ejercicio3");
ejercicio3Section.appendChild(dentalList);

// 4

const pacientesAtendidos = traumatologia.map(consulta => consulta.PACIENTE);
const pacientesRadiologia = radiologia.map(consulta => consulta.PACIENTE);
const pacientesDental = dental.map(consulta => consulta.PACIENTE);

const todosLosPacientes = pacientesAtendidos.concat(pacientesRadiologia, pacientesDental);

const pacientesList = document.createElement('ul');
todosLosPacientes.forEach(paciente => {
    const listItem = document.createElement('li');
    listItem.textContent = paciente;
    pacientesList.appendChild(listItem);
});

const ejercicio4Section = document.getElementById("ejercicio4");
ejercicio4Section.appendChild(pacientesList);

// 5
const pacientesIsapreDental = dental.filter(consulta => consulta.PREVISIÓN === 'ISAPRE');

const ejercicio5Section = document.getElementById("ejercicio5");
const isapreListDental = document.createElement('ul');
pacientesIsapreDental.forEach(consulta => {
    const listItem = document.createElement('li');
    listItem.textContent = `${consulta.PACIENTE} - ${consulta.PREVISIÓN}`;
    isapreListDental.appendChild(listItem);
});
ejercicio5Section.appendChild(isapreListDental);

// 6
const pacientesFonasaTraumatologia = traumatologia.filter(consulta => consulta.PREVISIÓN === 'FONASA');

const ejercicio6Section = document.getElementById("ejercicio6");
const fonasaListTraumatologia = document.createElement('ul');
pacientesFonasaTraumatologia.forEach(consulta => {
    const listItem = document.createElement('li');
    listItem.textContent = `${consulta.PACIENTE} - ${consulta.PREVISIÓN}`;
    fonasaListTraumatologia.appendChild(listItem);
});
ejercicio6Section.appendChild(fonasaListTraumatologia);
