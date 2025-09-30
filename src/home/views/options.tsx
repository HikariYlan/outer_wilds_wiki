export function OptionsView(): JSX.Element {
    return (
        <>
            <dialog class="dialog" open>
                <h1>Options</h1>
                <label class="checkbox">
                    <input id="skipIntroCheck" type="checkbox"/>
                    <span></span>
                    Passer l'introduction ?
                </label>
                <button id="closeButton" class="close_dialog"
                        onclick="document.querySelector('dialog').remove()">Continuer
                </button>
                <script src="/scripts/app.js"/>
                <script src="/scripts/options.js"/>
            </dialog>
        </>
    );
}