function calcularSueldoNeto() {
  let sueldoBruto = prompt("Ingrese valor de sueldo bruto:");

  while (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    sueldoBruto = prompt("Por favor ingrese un valor numérico y positivo");
  }

  let jubilacion = sueldoBruto * 0.11;
  let obraSocial = sueldoBruto * 0.03;
  let pami = sueldoBruto * 0.03;

  let sueldoNeto = sueldoBruto - jubilacion - obraSocial - pami;

  alert(
    `Sueldo neto: $${sueldoNeto}\n Jubilacion: $${jubilacion}\n Obra Social: $${obraSocial}\n PAMI: $${pami}`
  );
}

while (true) {
  calcularSueldoNeto();

  let seguir = confirm("¿Desea calcular otra vez?");

  if (!seguir) {
    break;
  }
}
