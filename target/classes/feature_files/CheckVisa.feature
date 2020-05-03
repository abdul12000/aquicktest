@TestToRun
Feature: Confirm whether a visa is required to visit the UK

  Scenario: Japan nationality coming to study and staying longer than six months
  Given I provide a nationality of "Japan"
    And I click on "Next Step"
    And I select the reason as "Study"
    And I click on "Next Step"
    And I state I am intending to stay "longer than 6 months"
    When I click on "Next Step"
    Then I will be informed that "You’ll need a visa to study in the UK"