const displayManagers = (managersArr) => {
  if (!managersArr) {
    return "";
  }
  return `
          ${managersArr
            .map(({ name, id, email, officeNumber }) => {
              return `
                <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
                <div class="card">
                <div class="card-header">
                <h4 class="card-title">${name}</h4>
                <i class="fas fa-briefcase fa-lg"></i>
                <h6 class="card-text">Manager</h6>
            </div>
            <div class="card-body">
                <p class="card-text mb-0">Employee ID: ${id}</p>
                <p class="link">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text">Office: ${officeNumber}</p>
            </div>
            </div>
    </div>
    `;
            })
            .join("")}`;
};

const displayEngineers = (engineersArr) => {
  if (!engineersArr) {
    return "";
  }
  return `
    ${engineersArr
      .map(({ name, id, email, github }) => {
        return `
    <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
          <div class="card">
          <div class="card-header">
            <h4 class="card-title">${name}</h4>
            <i class="fas fa-laptop-code fa-lg"></i>
            <h6 class="card-text">Engineer</h6>
          </div>
          <div class="card-body">
            <p class="card-text mb-0">Employee ID: ${id}</p>
            <p class="link">Email: <a href="mailto:${email}">${email}</a></p><br>
            <p class="card-text link">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
          </div>
      </div>
      </div>
      `;
      })
      .join("")}`;
};

const displayInterns = (internsArr) => {
  if (!internsArr) {
    return "";
  }
  return `
${internsArr
  .map(({ name, id, email, school }) => {
    return `
<div class="col-lg-4 col-md-4 col-sm-6 pt-4">
      <div class="card">
      <div class="card-header">
        <h4 class="card-title">${name}</h4>
        <i class="fas fa-baby fa-lg"></i>
        <h6 class="card-text">Intern</h6>
      </div>
      <div class="card-body">
        <p class="card-text mb-0">Employee ID: ${id}</p>
        <p class="link">Email: <a href="mailto:${email}">${email}</a></p>
        <p class="card-text">School: ${school}</p>
      </div>
      </div>
      </div>`;
  })
  .join("")}`;
};

module.exports = (managersArr, engineersArr, internsArr) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"
    />
  ></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="style.css"/>
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1 class="text-center pt-2" id="appTitle">TEAM</h1>
    </header>
    <div class="container-fluid p-0">
      <div class="col mt-5">
      <div class="row" id="team-container">
            ${displayManagers(managersArr)}
            ${displayEngineers(engineersArr)}
            ${displayInterns(internsArr)}
    </div>
    </div>
    </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
        integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
        crossorigin="anonymous"></script>
    </body>
  </html>
  
      `;
};
