import CheckersPage from "../support/pages/CheckersPage";

describe("Checkers Game - Positive Scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const assertBoardState = () => {
    [CheckersPage.PLAYER_1_STARTING_POSITIONS, CheckersPage.PLAYER_2_STARTING_POSITIONS].forEach(
      (positions, index) => {
        positions.forEach(([row, col]) => {
          CheckersPage.getSpace(row, col)
            .should("have.attr", "src")
            .and("contain", index === 0 ? CheckersPage.PLAYER_1_SRC : CheckersPage.PLAYER_2_SRC);
        });
      }
    );
    CheckersPage.BLANK_SPACE_STARTING_POSITIONS.forEach(([row, col]) => {
      CheckersPage.getSpace(row, col)
        .should("have.attr", "src")
        .and("match", CheckersPage.BLANK_SPACE_SRC_REGEX);
    });
  };

  it("should verify initial board state", () => {
    assertBoardState();

    // Assert initial message
    CheckersPage.getMessage().should("contain.text", CheckersPage.INITIAL_MESSAGE);
  });

  it("should allow Player 1 to select a valid piece", () => {
    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .click()
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);
  });

  it("should allow Player 1 to deselect a selected piece", () => {
    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .click()
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);

    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .click()
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SRC);
  });

  it("should allow Player 1 to move a piece to an empty space", () => {
    CheckersPage.getSpace(0, 2).click();
    CheckersPage.getSpace(1, 3).click();

    CheckersPage.getSpace(1, 3)
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SRC);

    CheckersPage.getSpace(0, 2)
      .should("have.attr", "src")
      .and("match", CheckersPage.BLANK_SPACE_SRC_REGEX);
  });

  it("should restart the game and reset all pieces", () => {
    CheckersPage.getRestartButton().click();

    assertBoardState();
  });
});
