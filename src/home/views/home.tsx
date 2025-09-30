export function HomeView(props: { version: string }): JSX.Element {

    return (
        <>
        {'<!DOCTYPE html>'}
            <head>
                <title>Outer Wilds Wiki</title>
                <link rel="stylesheet" href="/styles/app.css"/>
                <link rel="icon" href="/images/icon.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
                    rel="stylesheet"/>
            </head>
            <body class="josefin-sans-font">
            <div id="main">
                <dialog id="dialog" class="dialog" open>
                    <h1>Pour une meilleure expérience utilisateur, il est recommandé de passer en plein écran (touche
                        F11)</h1>
                    <button
                        id="close"
                        class="close_dialog"
                        onclick="document.querySelector('dialog').remove()"
                    >Continuer
                    </button>
                </dialog>
                <video muted={true}>
                    <source src="/videos/outer_wilds_menu_vid.mp4" id="vSource"/>
                    <source src="/videos/outer_wilds_menu_vid_skip.mp4" id="vSourceSkip"/>
                </video>
                <audio loop={true} id="background-audio" src="/sounds/musics/main_menu.m4a" />
                <audio id="buttonAudio" src="/sounds/button.wav"/>
                <div id="logos" class="hidden transition">
                <img src="/images/main_logo.png" alt="logo principal"/>
                    <img src="/images/main_logo_dlc.png" alt="logo DLC"/>
                </div>
                <section id="separator_top" class="hidden transition separator">
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </section>
                <div id="buttons" class="hidden transition">
                    <button>NOUVELLE EXPÉDITION</button>
                    <button
                        hx-get="/options"
                        hx-target="#main"
                        hx-swap="afterbegin"
                        onclick="document.querySelector('dialog').remove()">OPTIONS
                    </button>
                    <button
                        hx-get="/credits"
                        hx-target="#main"
                        hx-swap="afterbegin"
                        onclick="document.querySelector('dialog').remove()"
                    >CRÉDITS
                    </button>
                    <button>CHANGER DE PROFIL</button>
                </div>
                <section id="separator_bottom" class="hidden transition separator">
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </section>
                <p id="version" class="hidden transition">v{props.version}</p>
            </div>
            <script src="/scripts/video.js"/>
            <script src="/scripts/htmx.min.js"/>
            <script src="/scripts/app.js"/>
            </body>
        </>
    );
}