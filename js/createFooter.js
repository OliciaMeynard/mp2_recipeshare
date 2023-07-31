export const createFooter = (logoLink) =>{
    const markup = `  <div class="container">

    <div class="footer-top section">

      <div class="footer-brand">

        <a href="#" class="logo">
          <img src="${logoLink}" width="129" height="40" alt="Blogy logo">
        </a>

        <p class="footer-text">
          Share your unique and amazing recipes to the world.
        </p>

      </div>

      <ul class="footer-list">

        <li>
          <p class="h5">Social</p>
        </li>

        <li class="footer-list-item">
          <ion-icon name="logo-facebook"></ion-icon>

          <a href="https://www.facebook.com/designermeynard/" class="footer-link hover:underline">Facebook</a>
        </li>

        <li class="footer-list-item">
          <ion-icon name="logo-github"></ion-icon>

          <a href="https://github.com/OliciaMeynard/" class="footer-link hover:underline">Github</a>
        </li>

        <li class="footer-list-item">
          <ion-icon name="logo-pinterest"></ion-icon>

          <a href="#" class="footer-link hover:underline">Pinterest</a>
        </li>

        <li class="footer-list-item">
          <ion-icon name="logo-linkedin"></ion-icon>

          <a href="#" class="footer-link hover:underline">Linkedin</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="h5">About</p>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Cooking Guide</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Features</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Contact</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">404</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Privacy Policy</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="h5">Features</p>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Upcoming Events</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Blog & News</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Features</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">FAQ Question</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Testimonial</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="h5">Membership</p>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Account</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Membership</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Subscribe</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Tags</a>
        </li>

        <li>
          <a href="#" class="footer-link hover:underline">Authors</a>
        </li>

      </ul>

    </div>

    <div class="section footer-bottom">

      <p class="copyright">
        &copy; RecipeShare by: <a href="#" class="copyright-link hover:underline">Meynard Olicia</a>.
      </p>

    </div>

  </div>`


  $('.footer').html(markup)
}