import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import {Board, Turn, ReversiModelInterface, C, TileCoords, Board_RO, GameState, PlayImpact} from "./ReversiDefinitions";

export class ReversiModel implements ReversiModelInterface {
    protected board: Board;
    protected currentTurn: Turn;
    protected gameStateSubj: BehaviorSubject<GameState>;
    
    public readonly gameStateObs: Observable<GameState>;

    constructor() {
        this.initBoard();

        this.gameStateSubj = new BehaviorSubject<GameState>({
            board: this.board,
            turn: this.currentTurn
        });
        this.gameStateObs = this.gameStateSubj.asObservable();
    }

    initBoard(): void {
        /* Remplir tous les lignes avec 'empty'
        const B = [];                       // [L[],L[]]
        for(let i = 0; i < 8; i++) {
            const L : C[] = [];             // [C['Empty'|Turn],...,C['Empty'|Turn]] 
            for(let j = 0; j < 8; j++) {
                L.push('Empty');
            }
            B.push(L);
        }
        this.board = B as Board;
        ou*/
        this.board =
            new Array(8).fill(0).map(
                ()=> new Array<C>(8).fill("Empty")
            ) as Board;

        this.board[3][3] = this.board[4][4] = 'Player2';
        this.board[3][4] = this.board[4][3] = 'Player1';

        this.currentTurn = 'Player1';
    }

    PionsTakenIfPlayAt(x: number, y: number): PlayImpact {
        // Parcourir les 8 directions pour accumuler les coordonnées de pions prenables
        // Cherche que les cases dans une des directions contiennent n pions de l'autre joueur et aussi qu'il rencontre un pion a lui a la fin

        // Commencer par parcourir une direction
        // 
        return [];
    }

    play(i: number, j: number): void {
        // Vérifier que le coup est valide.
        // Si c'est le cas, après avoir jouer le coup, on passe à l'autre joueur.
        // Si l'autre joueur ne peut jouer nul part, on redonne la main au joueur initial. 
    }

}
