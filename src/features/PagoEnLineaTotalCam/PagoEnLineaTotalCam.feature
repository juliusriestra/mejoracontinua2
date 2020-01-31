@PagoEnLineaTotalExitoso
Feature: Realizar el Pago en Linea en Web Somos Belcorp
  Yo como consultora de Belcorp deseo pagar mi deuda 
  para tener un control economico

  Scenario Outline: Pago en Linea Total Exitoso
    Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
    When Le doy click a la Opcion "Paga_en_Linea"
    Then Click en la Opcion "Pagadito"
    And Click en el desplegable de la opcion "Pago_Total"
    And Click en el boton "ContinuarPagoTotal"
    And Click en el boton "Pagar"
    And Se muestra "<Home>" de Pagadito
    And Click en la Opcion "Pago_con_Tarjeta_Pagadito"
    And Ingresar nombre propietario "<NombrePropietario>"
    And Click en RadioButton "<Tarjeta>"
    And Ingresar Numero de Tarjeta "<NumeroDeTarjeta>"
    And Ingresar Mes de vencimiento de tarjeta "<Mes_tarjeta_Pagadito>" 
    And Ingresar Ano de vencimiento de tarjeta "<Ano_tarjeta_Pagadito>"
    And Ingresar cvv de vencimiento de tarjeta "<CCV_tarjeta_Pagadito>"
    And Ingresar nombre de tarjeta "<Nombres_tarjeta_Pagadito>"
    And Ingresar apellido de tarjeta "<Apellidos_tarjeta_Pagadito>"
    And Ingresar direccion de tarjeta "<Direccion_tarjeta_Pagadito>"
    And Ingresar ciudad de tarjeta "<Ciudad_tarjeta_Pagadito>"
    And Selecciono el pais "<PaisTarjeta>"
    And Selecciono el estado "<EstadoTarjeta>"
    And Ingresar Zip "<CodigoZipTarjeta>"
    And Ingresar telefono "<TelefonoTarjeta>"
    And Ingresar celular "<CelularTarjeta>"
    And Ingresar Email "<EmailTarjeta>"
    And Ingresar contrasena "<ContrasenaTarjeta>"
    And Click en Check Box Acuerdos "Acuerdo y Condiciones"
    #And Click en el botón Pagar "Pagar tarjeta Pagadito"
    #Then Se muestra ventana de confirmacion de Pago en Pagadito
    #Then Se muestra ventana de Pago Exitoso Somos Belcop

  Examples:
  | Pais       | Usuario   | Password |  Home   | Tarjeta | NombrePropietario | NumeroDeTarjeta  | Mes_tarjeta_Pagadito  | Ano_tarjeta_Pagadito  | CCV_tarjeta_Pagadito  | Nombres_tarjeta_Pagadito  | Apellidos_tarjeta_Pagadito  | Direccion_tarjeta_Pagadito | Ciudad_tarjeta_Pagadito | PaisTarjeta | EstadoTarjeta | CodigoZipTarjeta |  TelefonoTarjeta | CelularTarjeta | EmailTarjeta | ContrasenaTarjeta |
  | Costa Rica | 2472511   | 1        | DETALLES DE PAGO |  1 | Prueba          | 4913407733624972 | 01                    | 2023                  | 123                   | Prueba                    | Prueba 2                    | Andalucia              | Castilla                   | España         | Madrid        | 15023                       | 3637018                    | 996149576                | test123@gmail.com              | prueba123 |
  | Costa Rica | 2472511   | 1        | DETALLES DE PAGO |  2 | Prueba          | 4913407733624972 | 02                    | 2023                  | 123                   | Prueba                    | Prueba 2                    | Andalucia              | Castilla                   | España         | Madrid        | 15023                       | 3637018                    | 996149576                | test123@gmail.com              | prueba123 |
