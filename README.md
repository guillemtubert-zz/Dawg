# DOGGY

## Description

Doggy is an app to meet new dogs arround you. You can create a profile, search for new dog friends and chat with them!
 
## User Stories

- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **match** - see new dogs.
- **Direct Messages** - Chat with the dogs you've matched!
- **Profile** - See your profile. Edit it and change the search settings



## Backlog

List of other features outside of the MVPs scope

Creating events:
- Create events.
- Join different events.
- Earn points / upgrade levels.

Geo Location:
- Filter the dogs by distance.

Homepage
- Adding new future features.


## Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. |                                                          |
                                  




## Models

Doggy model

```javascript
{
  email: String,
  password: String,
  dogName: String,
  breed: String,
  age: Number,
  activity: String, enum: ["Shy","Friendly","Very Sociable"],
  favoriteDogs: [FavoriteDogIds],
}

```



Match model

```javascript
{
  dogOneAnswer: Boolean,
  dogTwoAnswer: Boolean,
  succes: Boolean,
}

```

## Links

### Trello

[Open the trello!](https://trello.com/b/WuUgMfQq/project-2-doggy)

### Git

[Repository Link](https://github.com/guillemtubert/Doggy)

[Deploy Link](http://heroku.com) TO BE DONE

### Slides 

[Slides Link](https://docs.google.com/presentation/d/1maTh19snJx0KqOmr5Z6mSbECEX2EyE4BDtyz2u09eM8/edit?usp=sharing)
