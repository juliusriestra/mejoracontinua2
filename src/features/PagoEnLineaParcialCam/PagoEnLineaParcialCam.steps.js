const login = require("../../pages/Login/Login.module");
const PagoEnLineaCamTotal = require("././PagoEnLineaParcialCam.module");

const I = actor();

Given("Ingreso el {string} mi {string} y mi {string}", async function(
  Pais,
  Usuario,
  Password
) {
  login.Constructor();
  login.ValidacionInicialLogin();
  login.IngresarCredenciales(Pais, Usuario, Password);
  login.ClickBotonLogin();
  login.ValidacionFinalLogin();
  await login.SiPopUp_Cerrar();
});

When('Le doy click a la Opcion "Paga_en_Linea"', function() {
  PagoEnLineaCamTotal.IngresarPagoOnline();
});

Then('Click en la Opcion "Pagadito"', function() {
  PagoEnLineaCamTotal.SeleccionarclickOpcionPagadito();
});

Then('Click en el desplegable de la opcion "Pago_Parcial"', function() {
  PagoEnLineaCamTotal.SeleccionarclickPagoParcialdesplegable();
});

/*Then('Click en el desplegable de la opcion "Pago_Total"', function() {
  PagoEnLineaCamTotal.SeleccionarclickPagoTotaldesplegable();
});*/

Then("Ingreso el MontoParcial {string}", function(Monto) {
  PagoEnLineaCamTotal.IngresarMontoParcial(Monto);
});

Then('Click en el boton "ContinuarPagoParcial"', function() {
  PagoEnLineaCamTotal.ClickBotonContinuarPagoParcial();
});

/*Then('Click en el boton "ContinuarPagoTotal"', function() {
  PagoEnLineaCamTotal.ClickBotonContinuarPagoTotal();
});*/

Then('Click en el boton "Pagar"', function() {
  PagoEnLineaCamTotal.ClickBotonPagar();
});

Then("Se muestra {string} de Pagadito", async function(HomePagadito) {
  await PagoEnLineaCamTotal.HomePagadito(HomePagadito);
});
      
Then('Click en la Opcion "Pago_con_Tarjeta_Pagadito"', function() {
  PagoEnLineaCamTotal.SeleccionarOpcionFormaDePago();
});

Then("Ingresar nombre propietario {string}", function(NombrePropietario) {
  PagoEnLineaCamTotal.IngresarNombrePropietario(NombrePropietario);
});

Then('Click en RadioButton {string}', function(tarjeta) {
  PagoEnLineaCamTotal.SelectTarjetaItem(tarjeta);
});

Then("Ingresar Numero de Tarjeta {string}", function(NumeroDeTarjeta) {
  PagoEnLineaCamTotal.CompletarNumeroDeTarjeta(NumeroDeTarjeta);
});

Then("Ingresar Mes de vencimiento de tarjeta {string}", function(
  FechaExpiracionMes
) {
  PagoEnLineaCamTotal.CompletarVencimientoMesTarjeta(FechaExpiracionMes);
});

Then("Ingresar Ano de vencimiento de tarjeta {string}", function(
  FechaExpiracionAno
) {
  PagoEnLineaCamTotal.CompletarVencimientoAnoTarjeta(FechaExpiracionAno);
});

Then("Ingresar cvv de vencimiento de tarjeta {string}", function(CvvTarjeta) {
  PagoEnLineaCamTotal.CompletarVencimientoCvvTarjeta(CvvTarjeta);
});

Then("Ingresar nombre de tarjeta {string}", function(Nombre) {
  PagoEnLineaCamTotal.CompletarNombreTarjeta(Nombre);
});

Then("Ingresar apellido de tarjeta {string}", function(Apellido) {
  PagoEnLineaCamTotal.CompletarApellidoTarjeta(Apellido);
});

Then("Ingresar direccion de tarjeta {string}", function(Direccion) {
  PagoEnLineaCamTotal.CompletarDireccionTarjeta(Direccion);
});

Then("Ingresar ciudad de tarjeta {string}", function(Ciudad) {
  PagoEnLineaCamTotal.CompletarCiudadTarjeta(Ciudad);
});

Then("Selecciono el pais {string}", function(Pais2) {
  PagoEnLineaCamTotal.SeleccionarPaisTarjeta(Pais2);
});

Then("Selecciono el estado {string}", function(Estado) {
  PagoEnLineaCamTotal.SeleccionarEstadoTarjeta(Estado);
});

Then("Ingresar Zip {string}", function(Zip) {
  PagoEnLineaCamTotal.CompletarZipTarjeta(Zip);
});

Then("Ingresar telefono {string}", function(Telefono) {
  PagoEnLineaCamTotal.CompletarTelefonoTarjeta(Telefono);
});

Then("Ingresar celular {string}", function(Celular) {
  PagoEnLineaCamTotal.CompletarCelularTarjeta(Celular);
});

Then("Ingresar Email {string}", function(Email) {
  PagoEnLineaCamTotal.CompletarEmailPagadito(Email);
});

Then('Ingresar contrasena {string}', function(ClaveEmail) {
  PagoEnLineaCamTotal.CompletarContrasenaPagadito(ClaveEmail);
});

Then('Click en Check Box Acuerdos "Acuerdo y Condiciones"', function() {
PagoEnLineaCamTotal.SeleccionarTerminosYCondiciones();
});

Then('Click en el botón Pagar "Pagar tarjeta Pagadito"', function() {
  //PagoEnLineaCamTotal.SeleccionarBotonPagarPagadito();
});
