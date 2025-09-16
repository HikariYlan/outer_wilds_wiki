export function CreditsView(): JSX.Element {
    return (
        <>
            <dialog class="dialog hidden">
                <h1>Crédits</h1>
                <div id="credits">
                    <div>
                        <h1>Outer Wilds</h1>
                        <p>
                            <span class="hightlight">Développeur :</span> Mobius Digital
                        </p>
                        <p>
                            <span class="hightlight">Éditeur :</span> Annapurna Interactive
                        </p>
                    </div>
                    <div>
                        <h1>Outer Wilds Wiki</h1>
                        <p>
                            <span class="hightlight">Créateur / maintainer : </span>
                            <a href="https://github.com/HikariYlan">Hikari / Ylan</a>
                        </p>
                        <p>
                            <a href="https://github.com/HikariYlan/outer_wilds_wiki">Lien vers le projet GitHub</a>
                        </p>
                    </div>
                </div>
                <button id="closeButton" class="close_dialog">Continuer</button>
            </dialog>
            <script src="/scripts/dialog.js"/>
            <script src="/scripts/app.js" />
        </>
    );
}