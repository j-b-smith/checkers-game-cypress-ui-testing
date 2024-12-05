import CheckersPage from "../support/pages/CheckersPage";

describe("Checkers Game - Negative Scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not allow Player 1 to move to a black space directly", () => {
    CheckersPage.getSpace(0, 2).click();
    CheckersPage.getSpace(0, 3).click();

    CheckersPage.getSpace(0, 2)
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);

    CheckersPage.getSpace(0, 3)
      .should("have.attr", "src")
      .and("match", CheckersPage.BLANK_SPACE_SRC_REGEX);
  });

  it("should not allow Player 1 to jump a space without capturing a Player 2 piece", () => {
    CheckersPage.getSpace(0, 2).click();
    CheckersPage.getSpace(0, 4).click();

    CheckersPage.getMessage().should("contain.text", CheckersPage.MOVE_DIAGONALLY_MESSAGE);
  });

  it("should not allow Player 1 to select a Player 2 piece", () => {
    CheckersPage.getSpace(1, 5).click();

    CheckersPage.getSpace(1, 5)
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_2_SRC);

    CheckersPage.getMessage().should("contain.text", CheckersPage.INVALID_PIECE_MESSAGE);
  });

  it("should not allow Player 1 to move to an invalid space", () => {
    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0]).click();
    CheckersPage.getSpace(CheckersPage.PLAYER_2_STARTING_POSITIONS[0]).click();

    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);

    CheckersPage.getSpace(CheckersPage.PLAYER_2_STARTING_POSITIONS[0])
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_2_SRC);

    CheckersPage.getMessage().should(
      "contain.text",
      CheckersPage.INVALID_MOVE_MESSAGE
    );
  });

  it("should not allow Player 1 to select 2 pieces at once", () => {
    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .click()
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);

    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[1])
      .click()
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SELECTED_SRC);

    CheckersPage.getSpace(CheckersPage.PLAYER_1_STARTING_POSITIONS[0])
      .should("have.attr", "src")
      .and("contain", CheckersPage.PLAYER_1_SRC);
  });
});
