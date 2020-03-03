Hands Down Racing
==========================


Features
-------
* list of races
* count down timer to race start
* category filters
* automatic refeshing of data
* continue to display races that have started. eventually removed 1 minute after race start. (logic needs inprovement)

* Redux & Redux thunk for calling api
** NB: haven't used redux for a while, so had to relearn it.


Wanted to do, but ran out of time
------

* snap shot testing
create a sample test for <RaceFilter />, but got the following error. didn't get time to resolve it.
```
    const warnedKeys: {[string]: boolean} = {};
          ^^^^^^^^^^

    SyntaxError: Missing initializer in const declaration
```
- in the past we have found snapshot testing provided limited value.

* typescript - really interested in using this
** have used propTypes on past projects, but typescript interfaces look at lot more promising

* behaviour testing
** have used enzyme on past projects

* e2e testing
** have used apium, with limited success.
** in the last project we decided to exercise the code from the business logic layer to the backend.

* Story Book - used it in previous projects
* Atomic Design - a way to organise components



