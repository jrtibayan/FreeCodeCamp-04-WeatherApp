<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Weather App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="Weather App by JericT" />
        <meta property="og:description" content="This app uses geolocation to aquire the longitude and latitude of the user. The lon and lat will be then be used by the openweathermap API to get information on that location." />
        <meta property="og:image" content="http://jrtibayan.github.io/FreeCodeCamp-02-Random-Quote-Machine/assets/img/placeit.jpg" />

        <link rel="stylesheet" href="assets/css/normalize.css">
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
        <main>
            <h1 id="title">Weather App</h1>
            <div class="Aligner">
                <div class="Aligner-item Aligner-item--top"></div>
                <div class="Aligner-item">
                    <section>
                        <div class="icon"></div>
                        <div class="info">
                            <h2 id="city"></h2>
                            <p id="weather"></p>
                            <p>
                                <span id="temp"></span>
                                &nbsp;
                                <span class="btn">
                                    <span class="btnTemp" id="btnCel">C</span><span class="btnTemp" id="btnFar">F</span>
                                </span>
                            </p>
                        </div>
                    </section>
                </div>
                <div class="Aligner-item Aligner-item--bottom"></div>
            </div>
        </main>


        <footer class="app-info">
            <p>by <a href="http://www.jeric.rocks">Jeric Tibayan</a> | For more info <button class="more-info-btn btn2">Click Me!</button></p>
        </footer>


        <div class="more-info">
            <div class="container">
                <h3>About this APP</h3>
                <p>This app is the 4th project and a requirement for the Free Code Camp FRONT END Developer Certificate.</p>
                <p>This app uses geolocation to aquire the user's longitude and latitude. After getting the long and lat of the user, the coordinates will then be used with the OpenWeattherMap API to get the weather information on the given location.</p>
                <p>This app passed Googles Mobile-Friendly Test and the W3C CSS3 Validation</p>
                <p>
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                        <img style="border:0;width:88px;height:31px"
                        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                        alt="Valid CSS!" />
                    </a>
                </p>
                <h3>What I Used For This Project</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>GeoLocation</li>
                    <li>OpenWeatherMap API</li>
                </ul>
                <p>Want to report a bug / suggestions for improvement / want to hire me? Feel free to use the form below.</p>
                <h3>Contact</h3>
                <form method="POST" action="https://formspree.io/jeric_tibayan-webdev@yahoo.com">
                    <textarea rows="5" name="message" id="message" placeholder="Message"></textarea>
                    <input type="submit" class="btn">
                </form>
                <button class="close-btn">CLOSE</button>
            </div>
        </div>
<!--
        <div id="hideContainer" class="hide">

            <h1 id="title">Weather App</h1>

            <div class="Aligner">
                <div class="Aligner-item Aligner-item--top"></div>
                <div class="Aligner-item">
                    <section class="container">
                        <div id="icon"></div>
                        <h2 id="city"></h2>
                        <p id="weather"></p>
                        <p>
                            <span id="temp"></span>
                            &nbsp;
                            <span class="btn">
                                <span class="btnTemp" id="btnCel">C</span><span class="btnTemp" id="btnFar">F</span>
                            </span>
                        </p>
                    </section>
                </div>
                <div class="Aligner-item Aligner-item--bottom"></div>
            </div>

            <footer>
                <p>By: <a href="http://www.jeric.rocks" target="_blank">Jeric Tibayan</a></p>
            </footer>
        </div>


-->


        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="assets/js/app.js"></script>

    </body>
</html>