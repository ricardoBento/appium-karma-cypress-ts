# White Label Test Strategy

## Unit

    # Components
        * App component
            Imports: StatusBar and SplashScreen Plugins.
            Services: 
            - should create the app
            - should initialize the app
        * Fan Menu
        * Header
        * Logo
        * Img Background

    # Services
        * Auth
            - Login
            - Logout
        * Interceptor
            - Test CheckTokenStorage method
            - Test redirection 
        * Router
            - Imported correctly
            - Auth Guard

    #Auth Pages
        * Login Page
            Imports: Form and Logo.
            Services: Auth, Storage, Notifications.
        * Register Page
        * Forgot Page
        * Venue Page

## Protractor

    # Components
    - App component
    - Fan Menu
    - Header
    - Logo
    - Img Background

    # Services
    - Auth
    - Interceptor
    - Router

    #Auth Pages
    - Login Page
    - Register Page
    - Forgot Page
    - Venue Page

## Cypress

    User interactions with video recorded.
    # Login Page
    - Fill the email field
    - Fill the password field
    - Press (navigate to) Login button
    - Press (navigate to) Register button
    - Press (navigate to) Forgot button

    # Test Register
    - (navigate back) header back button
    - User name field
    - First name
    - Last name
    - Email
    - Access Code
    - password
    - password check
    - Tap Register button

    # Venue Page
    - Type City
    - Select Venue
    - Enter Post Code
    - Press Register button

    # Forgot Password Page
    - Enter email
    - Press submit button
