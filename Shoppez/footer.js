const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="wooden.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">furniture</li>
                <li><a href="#" class="footer-link">kids</a></li>
                <li><a href="#" class="footer-link">dining</a></li>
                <li><a href="#" class="footer-link">kitchen</a></li>
                <li><a href="#" class="footer-link">drawing room</a></li>
                <li><a href="#" class="footer-link">room</a></li>
            </ul>
        </div>
    </div>
    <p class="info">support emails -shoppez.2023@gmail.com</p>
    <p class="info">telephone -+917152036498</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>

    </div>
    `;
}

createFooter();