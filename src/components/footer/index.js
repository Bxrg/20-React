import React from "react";
function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-5" href="https://github.com/Bxrg"><i class="fab fa-github"></i></a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-5" href="https://www.linkedin.com/in/noah-borg-81344a21b/"><i class="fab fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="https://github.com/Bxrg/Challenge-20-React-Portfolio">
          {" "}
          Noah Borg
        </a>
      </div>
    </footer>
  );
}

export default Footer;