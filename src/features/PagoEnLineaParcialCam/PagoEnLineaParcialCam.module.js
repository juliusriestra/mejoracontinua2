const I = actor();
const assert = require("assert");
const utils = require("../../utils/utils");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("../PagoEnLineaParcialCam/PagoEnLineaParcialCam.locator");
let locator = config.locator;

module.exports = {
  Constructor() {},
  //Le doy click a la Opcion "Paga_en_Linea"
  IngresarPagoOnline() {
    I.wait(3);
    //I.retry(wait).seeElement(locator.clickPagaEnLinea);
    I.retry(wait).click(locator.clickPagaEnLinea);
  },
  //And Click en la Opcion "Pagadito"
  SeleccionarclickOpcionPagadito() {
    I.wait(3);
    //I.retry(wait).seeInCurrentUrl("/PagoEnLinea/MetodoPago");
    //I.retry(wait).seeElement(locator.clickOpcionPagadito);
    I.retry(wait).click(locator.clickOpcionPagadito);
  },
  //Click en el desplegable de la opcion "Pago_Parcial"
  SeleccionarclickPagoParcialdesplegable() {
    I.wait(3);
    //I.retry(wait).seeInCurrentUrl("/PagoEnLinea");
    //I.retry(wait).seeElement(locator.clickPagoParcialdesplegable);
    I.retry(wait).click(locator.clickPagoParcialdesplegable);
  },
  //Ingreso el MontoParcial "<Monto_Parcial>"
  IngresarMontoParcial(montoParcial) {
    I.wait(3);
    //I.retry(wait).seeElement(locator.fieldMontoParcial);
    I.retry(wait).fillField(locator.fieldMontoParcial, montoParcial);
  },
  //Click en el desplegable de la opcion "Pago_Total"
  SeleccionarclickPagoTotaldesplegable() {
    //I.wait(3);
    //I.retry(wait).seeInCurrentUrl("/PagoEnLinea");
    I.retry(wait).click(locator.clickPagoTotaldesplegable);
  },
  //Click en el boton "Boton_Continuar"
  ClickBotonContinuarPagoParcial() {
    I.wait(3);
    //I.retry(wait).seeElement(locator.clickBotonContinuar);
    I.retry(wait).click(locator.clickBotonPagoParcial);
  },

  ClickBotonContinuarPagoTotal() {
    I.wait(3);
    //I.retry(wait).seeElement(locator.clickBotonPagoTotal);
    I.retry(wait).click(locator.clickBotonPagoTotal);
  },
  //Click en el boton "Pagar"
  ClickBotonPagar() {
    I.wait(3);
    //I.retry(wait).seeInCurrentUrl("/Pagadito");
    //I.retry(wait).waitForElement(locator.clickBtnConfirmaPagoFinal);
    I.retry(wait).click(locator.clickBtnConfirmaPagoFinal);
    //I.wait(5);
  },
  //Se muestra "<Home>" de Pagadito
  async HomePagadito(HomeEsperado) {
    I.wait(3);
    let HomeObtenido = await I.retry(wait).grabTextFrom(
      locator.HomeWebPagadito
    );
    assert.equal(HomeEsperado, HomeObtenido);
  },
  //Click en la Opcion "Pago_con_Tarjeta_Pagadito"
  SeleccionarOpcionFormaDePago() {
    I.retry(wait).seeElement(locator.clickOpcionPagoConTarjeta);
    I.retry(wait).click(locator.clickOpcionPagoConTarjeta);
  },
  //Ingresar nombre propietario "<NombrePropietario>"
  IngresarNombrePropietario(NombrePropietario) {
    I.retry(wait).seeElement(locator.fieldNombrePropietario);
    I.retry(wait).fillField(locator.fieldNombrePropietario, NombrePropietario);
  },
  // Click en RadioButton Visa "Tarjeta Pagadito Visa"
  SelectTarjetaItem(indice) {
    I.wait(3);
    //I.retry(wait).seeElement(locator.selectTipoTarjeta(indice));
    //I.retry(wait).click("tiTarjeta1");

    I.retry(wait).click(locator.selectTipoTarjeta(indice));
  },

  /*SeleccionarTipoTarjeta() {
    I.retry(wait).seeElement(locator.clickPagaditoVisa);
    I.retry(wait).click(locator.clickPagaditoVisa);
  },*/

  //Ingresar Numero de Tarjeta "<NumeroDeTarjeta>"
  CompletarNumeroDeTarjeta(NumeroDeTarjeta) {
    I.retry(wait).seeElement(locator.fieldNumeroDeTarjeta);
    I.retry(wait).fillField(locator.fieldNumeroDeTarjeta, NumeroDeTarjeta);
  },
  // And Ingresar Mes de vencimiento de tarjeta "<Mes_tarjeta_Pagadito>"
  CompletarVencimientoMesTarjeta(FechaExpiracionMes) {
    I.retry(wait).seeElement(locator.fieldFechaDeExpiracionMes);
    I.retry(wait).fillField(
      locator.fieldFechaDeExpiracionMes,
      FechaExpiracionMes
    );
  },

  CompletarVencimientoAnoTarjeta(FechaExpiracionAno) {
    I.retry(wait).seeElement(locator.fieldFechaDeExpiracionAno);
    I.retry(wait).fillField(
      locator.fieldFechaDeExpiracionAno,
      FechaExpiracionAno
    );
  },

  CompletarVencimientoCvvTarjeta(CvvTarjeta) {
    I.retry(wait).seeElement(locator.fieldCvvTarjeta);
    I.retry(wait).fillField(locator.fieldCvvTarjeta, CvvTarjeta);
  },

  CompletarNombreTarjeta(Nombre) {
    I.retry(wait).seeElement(locator.fieldPrimerNombre);
    I.retry(wait).fillField(locator.fieldPrimerNombre, Nombre);
  },

  CompletarApellidoTarjeta(Apellido) {
    I.retry(wait).seeElement(locator.fieldApellido);
    I.retry(wait).fillField(locator.fieldApellido, Apellido);
  },

  CompletarDireccionTarjeta(Direccion) {
    I.retry(wait).seeElement(locator.fieldDireccionTarjeta);
    I.retry(wait).fillField(locator.fieldDireccionTarjeta, Direccion);
  },

  CompletarCiudadTarjeta(Ciudad) {
    I.retry(wait).seeElement(locator.fieldCiudadTarjeta);
    I.retry(wait).fillField(locator.fieldCiudadTarjeta, Ciudad);
  },

  SeleccionarPaisTarjeta(Pais) {
    I.retry(wait).seeElement(locator.clickComboPais);
    I.retry(wait).fillField(locator.clickComboPais,Pais);
  },

  SeleccionarEstadoTarjeta(Estado) {
    I.retry(wait).seeElement(locator.clickComboDepartamento);
    I.retry(wait).fillField(locator.clickComboDepartamento,Estado);
  },

  CompletarZipTarjeta(CodigoZip) {
    I.retry(wait).seeElement(locator.fieldZip);
    I.retry(wait).fillField(locator.fieldZip, CodigoZip);
  },

  CompletarTelefonoTarjeta(Telefono) {
    I.retry(wait).seeElement(locator.fieldTelefono);
    I.retry(wait).fillField(locator.fieldTelefono, Telefono);
  },

  CompletarCelularTarjeta(Celular) {
    I.retry(wait).seeElement(locator.fieldCelular);
    I.retry(wait).fillField(locator.fieldCelular, Celular);
  },

  CompletarEmailPagadito(Email) {
    I.retry(wait).seeElement(locator.fieldEmail);
    I.retry(wait).fillField(locator.fieldEmail, Email);
  },

  CompletarContrasenaPagadito(Clave) {
    I.retry(wait).seeElement(locator.fieldPassword);
    I.retry(wait).fillField(locator.fieldPassword, Clave);
  },

  SeleccionarTerminosYCondiciones() {
    I.retry(wait).seeElement(locator.checkTerminosyCondiciones);
    I.retry(wait).click(locator.checkTerminosyCondiciones);
  },

  SeleccionarBotonPagarPagadito() {
    I.retry(wait).seeElement(locator.clickBtnPagaditoPagarAhora);
    I.retry(wait).click(locator.clickBtnPagaditoPagarAhora);
  },

};
