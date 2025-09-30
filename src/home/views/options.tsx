export function OptionsView(): JSX.Element {
    return (
        <>
            <dialog class="dialog" open>
                <h1>Options</h1>
                <div>
                    <input id="skipIntroCheck" type="checkbox">Passer l'introduction ?</input>
                </div>
                <button id="closeButton" class="close_dialog" onclick="document.querySelector('dialog').remove()">Continuer</button>
                <script src="/scripts/app.js"/>
                <script src="/scripts/options.js" />
            </dialog>
        </>
    );
}