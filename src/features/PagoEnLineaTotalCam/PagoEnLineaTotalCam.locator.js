Login = {
  locator: {
    selectPais: { id: "ddlPais" },
    fieldUsuario: { id: "txtUsuario" },
    fieldPassword: { id: "txtContrasenia" },
    clickLogin: { id: "btnLogin" },
    clickPagaEnLinea: {
      xpath: '//*[@id="contentmain"]/div[1]/div[2]/div[3]/a[2]'
    },
    clickOpcionPagadito: {
      xpath: '//*[@id="divOpciones"]/div[2]/div[2]/div/div[1]/div[2]/div'
    },

    clickPagoTotaldesplegable: {
      xpath:
        '//*[@id="contentmain"]/div[2]/div[2]/div[2]/div[3]/div/div[1]/div[1]/div[2]/div'
    },
  
    clickPagoParcialdesplegable: {
      xpath:
        '//*[@id="contentmain"]/div[2]/div[2]/div[2]/div[3]/div/div[2]/div[1]/div[2]/div'
    },

    fieldMontoParcial: { id: "txtMontoParcial" },
    clickBotonPagoTotal: { id: "btnPagoTotal" },
    clickBotonPagoParcial: { id: "btnPagoParcial" },
    clickBtnConfirmaPagoFinal: { xpath: '//*[@id="paymentForm"]/button' },

    HomeWebPagadito: { xpath: '//*[@id="titulos"]/div/div[1]/h1' },
    clickOpcionPagoConTarjeta: { id: "opc_sin_cp" },
    fieldNombrePropietario: { id: "ptarjeta" },
    selectTipoTarjeta : (row) =>{ return { id:  `tiTarjeta${row}`}},
    //clickPagaditoVisa: { id: "tiTarjeta1" },
    //clickPagaditoMastercad: { id: "tiTarjeta2" },
    fieldNumeroDeTarjeta: { id: "ntarjeta" },
    fieldFechaDeExpiracionMes: { id: "fvencM" },
    fieldFechaDeExpiracionAno: { id: "fvencA" },
    fieldCvvTarjeta: { id: "cvv" },
    fieldPrimerNombre: { id: "nombre" },
    fieldApellido: { id: "apellido" },
    fieldDireccionTarjeta: { id: "direccion1" },
    fieldCiudadTarjeta: { id: "ciudad" },

    clickComboPais: { id: "pais" },
    //SeleccionarPaisItem: (point) => {return `form-control sel_Paises="${point}"]`},
    SeleccionarPaisItem: row => {
      return (
        '//*[@id="pais"]/option[contains(text(),"' + row.toString() + '")]'
      );
    },

    clickComboDepartamento: { id: "estado" }, 
    //SeleccionarDepartamentoItem: (point) => {return `sel_Paises="${point}"]`},
    SeleccionarDepartamentoItem: row => {
      return (
        '//*[@id="estado"]/option[contains(text(),"' + row.toString() + '")]'
      );
    },

    fieldZip: { id: "zip" },
    fieldTelefono: { id: "telefono" },
    fieldCelular: { id: "celular" },
    fieldEmail: { id: "email1" },
    fieldPassword: { id: "pass1" },
    checkTerminosyCondiciones: { id: "ckAcuerdo" },
    clickBtnPagaditoPagarAhora: { id: "btnNoTengoCuentaSiguiente" }
  }
};
module.exports.login = Login;
module.exports.locator = Login.locator;
