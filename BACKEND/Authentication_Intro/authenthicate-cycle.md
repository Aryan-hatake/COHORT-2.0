user comes on website for first time

he has to register and his email and password and other data in saved in mongo db

after saving his data in DB we generate token by jwt and save in his cookie storage

when user comes back on website we just access his token in cookie storage and Voila! user is logged in

when user tries to register again with same email, we say user already exist

after cookie expires user has to do manual login and new token is generated and set in cookie storage