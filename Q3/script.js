function validateForm() {
    const form = document.forms["my-form"];
    const name = form["name"].value.trim();
    const age = parseInt(form["age"].value);
    const salary = parseFloat(form["salary"].value);
    const gender = form["gender"].value;
    const maritalStatus = form["marital-status"].value;
  
    let error = "";
  
    // Validate name
    if (name.length < 3) {
      error += "Nome deve ter no mínimo 3 caracteres.\n";
    }
  
    // Validate age
    if (age < 0 || age > 150) {
      error += "Idade deve estar entre 0 e 150.\n";
    }
  
    // Validate salary
    if (salary <= 0) {
      error += "Salário deve ser maior que zero.\n";
    }
  
    // Validate gender
    if (gender !== "f" && gender !== "m") {
      error += "Sexo inválido.\n";
    }
  
    // Validate marital status
    const validMaritalStatus = ["s", "c", "v", "d"];
    if (!validMaritalStatus.includes(maritalStatus)) {
      error += "Estado civil inválido.\n";
    }
  
    // Show error message if any
    if (error) {
      alert(error);
      return false;
    }
  
    return true;
  }
  
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
  });
  