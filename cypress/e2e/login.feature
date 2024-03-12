Feature: User Login
  As a user
  I want to log in with valid credentials
  So that I can access the system

  Scenario: Login with valid credentials
    Given User is on remotepass page
    When I enter valid email
    And  I enter valid password
    Then I click the submit button
  