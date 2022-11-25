# PDxF frontend

## ToDo

- training management > create scenario and edit scenario combine
- dashboard remake
- combine design to scss, remove tailwind and styled component
- combine modal components
- divide layout css files and `home.scss` and `sign.scss`

## env file

.env.development -> used in `npm start`

.env.production -> used in `npm run build`

.env.test -> used in `npm run test` jest or sth

## image files

go to src/assets

---

## etc

admin route -> admin dashboard with current challenging state

admin route -> home route

_admin route layout_ and _player route layout_

from server : challenges, abilities, adversaries, dashboard data

different page -> _user challenges_ and _admin challenges_

empty tag <></>

useref() direct element access (no jquery, getelementbyid) or non-changing state

You shouldn't use log.Fatal in the server's read loop, as that calls os.Exit

### bootstrap changed default tags style

#FA678C custom color "pdxf-pink"

at asset/\_colors.scss

### optimizable parts

createchallenge assign data to each droppable, not route component

### CSS, HTML, REACT

Link -> just link

NavLink -> highlight with activeclassname

### front-back connect

- dashboard and its modal
- get training , create training, remove training
- edit training -> remove and create
- get all trainings

### problems

- create scenario and challenge reverse?
- dashboard show online users only?
- createchallenge table or sth else?
