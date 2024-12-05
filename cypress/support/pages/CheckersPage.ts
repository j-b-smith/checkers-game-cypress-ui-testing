class CheckersPage {
  public static readonly spaceSelectorPrefix: string = 'img[name="space';
  public static readonly messageSelector: string = "#message";
  public static readonly restartSelector: string = '.footnote a[href="./"]';
  public static readonly PLAYER_1_SRC = "you1.gif";
  public static readonly PLAYER_2_SRC = "me1.gif";
  public static readonly PLAYER_1_SELECTED_SRC = "you2.gif";
  public static readonly BLANK_SPACE_SRC_REGEX = /black\.gif|gray\.gif/;
  public static readonly INITIAL_MESSAGE = "Select an orange piece to move.";
  public static readonly INVALID_PIECE_MESSAGE =
    "Click on your orange piece, then click where you want to move it.";
  public static readonly INVALID_MOVE_MESSAGE = "This is an invalid move.";
  public static readonly MOVE_DIAGONALLY_MESSAGE = 'Move diagonally only.';

  public static readonly PLAYER_1_STARTING_POSITIONS = [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [0, 2],
    [2, 2],
    [4, 2],
    [6, 2],
  ];

  public static readonly PLAYER_2_STARTING_POSITIONS = [
    [7, 7],
    [5, 7],
    [3, 7],
    [1, 7],
    [6, 6],
    [4, 6],
    [2, 6],
    [0, 6],
    [7, 5],
    [5, 5],
    [3, 5],
    [1, 5],
  ];

  public static readonly BLANK_SPACE_STARTING_POSITIONS = [
    [1, 0],
    [3, 0],
    [5, 0],
    [7, 0],
    [0, 1],
    [2, 1],
    [4, 1],
    [6, 1],
    [1, 2],
    [3, 2],
    [5, 2],
    [7, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [0, 5],
    [2, 5],
    [4, 5],
    [6, 5],
    [1, 6],
    [3, 6],
    [5, 6],
    [7, 6],
    [0, 7],
    [2, 7],
    [4, 7],
    [6, 7],
  ];

  /**
   * Gets a specific space by coordinates (row, col) or an array of ([row, col]).
   */
  public static getSpace(
    rowOrPosition: number | number[],
    col?: number
  ): ChainableJQueryElement {
    let row, column;

    if (Array.isArray(rowOrPosition)) {
      [row, column] = rowOrPosition;
    } else {
      row = rowOrPosition;
      column = col!;
    }

    return cy.get(`${CheckersPage.spaceSelectorPrefix}${row}${column}"]`);
  }

  public static getMessage(): ChainableJQueryElement {
    return cy.get(CheckersPage.messageSelector);
  }

  public static getRestartButton(): ChainableJQueryElement {
    return cy.get(CheckersPage.restartSelector);
  }

  public static getPlayer1Position(index: number): number[] | null {
    if (index < 0 || index >= CheckersPage.PLAYER_1_STARTING_POSITIONS.length) {
      console.error(`Index ${index} is out of bounds for PLAYER_1_STARTING_POSITIONS. Valid range: 0 to ${CheckersPage.PLAYER_1_STARTING_POSITIONS.length - 1}`);
      return null;
    }
    return CheckersPage.PLAYER_1_STARTING_POSITIONS[index];
  }
  
  public static getPlayer2Position(index: number): number[] | null {
    if (index < 0 || index >= CheckersPage.PLAYER_2_STARTING_POSITIONS.length) {
      console.error(`Index ${index} is out of bounds for PLAYER_2_STARTING_POSITIONS. Valid range: 0 to ${CheckersPage.PLAYER_2_STARTING_POSITIONS.length - 1}`);
      return null;
    }
    return CheckersPage.PLAYER_2_STARTING_POSITIONS[index];
  }
  
}

export default CheckersPage;
