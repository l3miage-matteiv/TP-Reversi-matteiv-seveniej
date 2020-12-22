import {GameState, ReversiModelInterface} from './ReversiDefinitions';

const reversiView = `
    <table class="reversi">
        <tbody></tbody>
    </table>
`;

export class ReversiPresenter {
    tds: HTMLElement[][] = [];

    constructor(private root: HTMLElement, private model: ReversiModelInterface) {
        this.initBoard();
    }

    updatePresentation({board, turn}: GameState) {
        // à compléter
        // Les cases (balises td) contenant un pion du joueur 1 ont la classe CSS Player1 (voir le CSS)
        // Les cases (balises td) contenant un pion du joueur 2 ont la classe CSS Player2 (voir le CSS)
        // Les cases sur lesquelles le joueur courant peut poser un pion ont la classe CSS canPlayHere
    }

    private initBoard() {
        // à compléter
        // Remplir le tableau avec 8x8 cases contenant chacune une balise div
        // Utiliser la fonction document.createElement
        // Stockez les balises td dans l'attribut tds de l'objet => ça vous facilitera la vie plus tard
    }
}
