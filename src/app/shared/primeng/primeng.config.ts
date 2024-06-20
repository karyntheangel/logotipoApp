import { PrimeNGConfig } from 'primeng/api';

export function configPrimeNG(primengConfiguration: PrimeNGConfig) {
  primengConfiguration.setTranslation({
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
    dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
    monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Augosto","Septiembre","Ocuobre","Noviembre","Deciembre" ],
    monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Sem'
  });
}
export function changeLocalId() {
    return 'es'; 
  }