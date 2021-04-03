
export function timestampToDate(timestamp: number): Date {
    return new Date(timestamp * 1000)
}

export function dateToAAAAMMDD(fecha: Date): string {
    const mes = pad2(fecha.getMonth() + 1);
    const dia = pad2(fecha.getDate());
    const ano = fecha.getFullYear();

    return ano + "-" + mes + "-" + dia;
}

function pad2(numero: number) {
    return (numero < 10 ? "0" : "") + numero;
}

export function dateToReadableFormat(fecha: Date): string {
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const ano = fecha.getFullYear();
    const mesString = getMonthName(mes);

    return dia + " de " + mesString + " de " + ano;
}

export function dateToReadableFormatUTC(fecha: Date): string {
    const mes = fecha.getUTCMonth() + 1;
    const dia = fecha.getUTCDate();
    const ano = fecha.getUTCFullYear();
    const mesString = getMonthName(mes);

    return dia + " de " + mesString + " de " + ano;
}

export function timeToReadableFormat(fecha: Date): string {
    let periodo = "am";
    let hora: number = fecha.getHours();
    let minutos: any = fecha.getMinutes();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (hora > 12) {
        hora -= 12;
        periodo = "pm";
    }

    return hora + ":" + minutos + periodo;
}

export function dateAndTimeToReadableFormat(fecha: Date): string {
    const fechaLegible = dateToReadableFormat(fecha);
    const horaLegible = timeToReadableFormat(fecha);

    return fechaLegible + "  " + horaLegible;
}

function getMonthName(mes) {
    let mesString = "";
    switch (mes) {
        case 1:
            mesString = "enero";
            break;
        case 2:
            mesString = "febrero";
            break;
        case 3:
            mesString = "marzo";
            break;
        case 4:
            mesString = "abril";
            break;
        case 5:
            mesString = "mayo";
            break;
        case 6:
            mesString = "junio";
            break;
        case 7:
            mesString = "julio";
            break;
        case 8:
            mesString = "agosto";
            break;
        case 9:
            mesString = "septiembre";
            break;
        case 10:
            mesString = "octubre";
            break;
        case 11:
            mesString = "noviembre";
            break;
        case 12:
            mesString = "diciembre";
            break;

        default:
            break;
    }

    return mesString;
}