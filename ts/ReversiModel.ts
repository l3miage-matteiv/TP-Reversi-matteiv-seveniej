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
    }

    initBoard(): void {
    }

    PionsTakenIfPlayAt(x: number, y: number): PlayImpact {
        // Parcourir les 8 directions pour accumuler les coordonnées de pions prenables
        return [];
    }

    play(i: number, j: number): void {
        // Vérifier que le coup est valide.
        // Si c'est le cas, après avoir jouer le coup, on passe à l'autre joueur.
        // Si l'autre joueur ne peut jouer nul part, on redonne la main au joueur initial. 
    }

}
