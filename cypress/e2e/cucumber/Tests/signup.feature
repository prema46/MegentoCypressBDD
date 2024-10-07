Feature: New User sign up flow

  Background: 
    Given I navigate to the Website "https://magento.softwaretestingboard.com/customer/account/create/"

 Scenario: Successful sign-up with valid details
    When I enter first name "Prema"
    And I enter last name "Neelakantan"
    And I enter email "Testt@example.com"
    And I enter password "Testtest@123"
    And I confirm password "Testtest@123"
    And I click the create account button
    Then I should see a confirmation message

    Scenario: Unsuccessful sign-up with existing email
    When I enter first name "John"
    And I enter last name "Doe"
    And I enter email "testt@example.com" # Assuming this email already exists
    And I enter password "Testtest@123"
    And I confirm password "Testtest@123"
    And I click the create account button
    Then I should see an error message indicating that the email already exists

    Scenario: Unsuccessful sign-up with mismatched passwords
    When I enter first name "Alice"
    And I enter last name "Smith"
    And I enter email "alice@example.com"
    And I enter password "Testtest@123"
    And I confirm password "WrongPassword@123"
    And I click the create account button
    Then I should see an error message for password mismatch