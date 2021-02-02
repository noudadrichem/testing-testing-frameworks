Feature: Feed Sync

    Scenario: Validate dirty objects
        Given an object that has dirty set to true
        When dirty is true
        Then generate a new image asset for this document