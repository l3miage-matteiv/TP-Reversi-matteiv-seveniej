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

        var H : TileCoords[] = [];
        var P : PlayImpact = [];
        
        // On commence par parcourir une direction
        // Direction: Haut
        var i = y;
        if(y>0) i = y - 1;  // i Prend la prochaine case en haut
        // On verifie bien que la prochaine case a un pion enemie
        // On continue dans la direction jusqu'a trouver une case 'Empty', un pion a nous ou atteindre la fin de la table
        while(i > 0 && this.board[x][i] !== this.currentTurn && this.board[x][i] !== "Empty") {
            H.push([x,i-1]);
            console.log("Haut: " + this.board[x][i]);
            i--;
        }
        console.log("Haut: " + this.board[x][i]);
        // Si on trouve un pion a nous on accumule les coordonnees parcourues
        if(this.board[x][i] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Haut Droite
        H = [];
        i = y - 1;
        var j = x + 1;
        while((i > 0 && j < 7) && (this.board[j][i] !== this.currentTurn)) {
            H.push([j,i]);
            i--;
            j++;
        }
        if(this.board[j][i] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Droite
        H = [];
        j = x + 1;
        while(j < 7 && (this.board[j][y] !== this.currentTurn)) {
            H.push([j,y]);
            j++;
        }
        if(this.board[j][y] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Bas Droite
        H = [];
        i = y + 1;
        j = x + 1;
        while((i < 7 && j < 7) && (this.board[j][i] !== this.currentTurn)) {
            H.push([j,i]);
            i++;
            j++;
        }
        if(this.board[j][i] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Bas
        H = [];
        i = y + 1;
        while((i < 7) && (this.board[x][i] !== this.currentTurn)) {
            H.push([x,i]);
            i++;
        }
        if(this.board[x][i] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Bas Gauche
        H = [];
        i = y + 1;
        j = x - 1;
        while((i < 7 && j > 0) && (this.board[j][i] !== this.currentTurn)) {
            H.push([j,i]);
            i++;
            j--;
        }
        if(this.board[j][i] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Gauche
        H = [];
        j = x - 1;
        while((j > 0) && (this.board[j][y] !== this.currentTurn)) {
            H.push([j,y]);
            j--;
        }
        if(this.board[j][y] === this.currentTurn) {
            P = [...P, ...H];
        }

        // Direction: Haut Gauche
        H = [];
        i = y - 1;
        j = x - 1;
        while((i > 0 && j > 0) && (this.board[j][i] !== this.currentTurn)) {
            H.push([j,i]);
            i--;
            j--;
        }
        if(this.board[j][i] === this.currentTurn) {
            P = [...P, ...H];
        }
        return P;
    }

    

    play(i: number, j: number): void {
        // Vérifier que le coup est valide.
        // Si c'est le cas, après avoir jouer le coup, on passe à l'autre joueur.
        // Si l'autre joueur ne peut jouer nul part, on redonne la main au joueur initial. 
    }

}
